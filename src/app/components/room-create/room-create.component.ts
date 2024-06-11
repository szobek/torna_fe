import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FetchServiceService } from '../../fetch-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './room-create.component.html',
  styleUrl: './room-create.component.scss'
})
export class RoomCreateComponent {
  createRoomForm = new FormGroup({
    description: new FormControl(''),
    num: new FormControl(''),
    floor: new FormControl(''),
    price: new FormControl(''),
    img_dir:  new FormControl(' '),
    mirror: new FormControl(false),
    climatic: new FormControl(false),
    window: new FormControl(false),
  });

constructor(private call:FetchServiceService,private router:Router){}
  onSubmit(){
    this.call.createRoom(this.createRoomForm.value).subscribe({
      next:res=>{
        alert(res)
        this.router.navigate([""])

      },
      error:e=>alert(e)
    })
  }


}
