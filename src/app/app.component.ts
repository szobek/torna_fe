import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FetchServiceService } from './fetch-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '';
rooms:any
apiUrl:string="http://127.0.0.1:8000"
  constructor(private fs:FetchServiceService){
    
  }
  ngOnInit() {
  
    this.fs.listRoom()
      .subscribe(response => {
        this.rooms = response;
        console.log(response)
      });
}
}
