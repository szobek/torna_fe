import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class FetchServiceService {

  private url = 'http://127.0.0.1:8000/rooms';
  constructor(private httpClient: HttpClient) { }
  
  
  listRoom(){
    
    return this.httpClient.get(this.url);  
  }

}
