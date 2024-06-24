import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Room } from '../../models/room/room.model';
import { FetchServiceService } from '../../services/fetch-service.service';
import { CommonModule } from '@angular/common';
import { Usere } from '../../models/usere.model';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',

})
export class RoomListComponent {
  rooms: Room[]
  constructor(private fs: FetchServiceService) {
    this.rooms = []
  }
  ngAfterViewInit() {
    this.fs.listRoom()
      .subscribe(response => {
        this.rooms = response as Room[];
        this.fs.getToken({ email: 'kn2@test.hu', password: '12345678' }).subscribe({
          next: response => {
            const user: Usere = response as Usere
            const token: string | undefined = user.authorisation?.token
            if (token != undefined)
              this.fs.refreshToken(token).subscribe()
          },
          error: err => {
            alert(err)
          }
        })
      });
  }
}
