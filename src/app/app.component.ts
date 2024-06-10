import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FetchServiceService } from './fetch-service.service';
import { CommonModule } from '@angular/common';
import { Room } from './models/room/room.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';
rooms:Room[]
apiUrl:string="http://127.0.0.1:8000"

  constructor(private fs:FetchServiceService){
    this.rooms=[]
  }

  ngOnInit() {
  
    setTimeout(()=>{
      this.fs.listRoom()
      .subscribe(response => {
        this.rooms = response;
      });
    },3000)
    
}
}
