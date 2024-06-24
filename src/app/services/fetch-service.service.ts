import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/room/room.model';


@Injectable({
  providedIn: 'root'
})


export class FetchServiceService {

  private url = 'http://127.0.0.1:8000/rooms';
  constructor(private httpClient: HttpClient) { }
  
  
  listRoom():Observable<Room[]>{
    
    return this.httpClient.get<Room[]>(this.url);  
  }

  getSingleRoom(id:number):Observable<Room>{
    return this.httpClient.get<Room>(`http://127.0.0.1:8000/get_room/${id}`)
  }

  deleteRoom(id:number){
    return this.httpClient.delete(`http://127.0.0.1:8000/delete_room/${id}`)
  }

  createRoom(datas:any){
    return this.httpClient.post(`http://127.0.0.1:8000/create_room`,datas)
  }

  getToken(loginDatas:any){
    
    return this.httpClient.post(`http://127.0.0.1:8000/api/login`,loginDatas)
  }

  refreshToken(token:string){
    return this.httpClient.post(`http://127.0.0.1:8000/api/refresh`,``,)
  }

}
