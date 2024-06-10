import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Room } from '../../models/room/room.model';
import { FetchServiceService } from '../../fetch-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent {
  rooms:Room[]
  constructor(private fs:FetchServiceService){
    this.rooms=[]
  }
  ngAfterViewInit(){
    this.fs.listRoom()
      .subscribe(response => {
        this.rooms = response as Room[];
        console.log(response)
      });
  }
}
