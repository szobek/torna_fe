import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Room } from '../../models/room/room.model';
import { FetchServiceService } from '../../fetch-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-room',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './single-room.component.html',
  styleUrl: './single-room.component.scss'
})
export class SingleRoomComponent {
  room:Room|undefined
  roomId:string|null|undefined
  constructor(private call:FetchServiceService, private route: ActivatedRoute,private router: Router){
    this.route.paramMap.subscribe(params => {
      this.roomId=params.get('id')
    });
  }


  ngAfterViewInit(){
    this.call.getSingleRoom(Number(this.roomId)).subscribe({
      next:res=>{
        this.room=res as Room
    
      },
      error:e=>console.log(e)
    })
  }
  deleteRoom(){
    if(confirm("Biztosan törli?")){
this.call.deleteRoom(Number(this.roomId)).subscribe({
  next:res=>{
    alert("Törölve")
    this.router.navigate(['/'])

  },
  error:e=>{alert("Gond volt a törlésnél");console.log(e)}
})
    }
  }
}
