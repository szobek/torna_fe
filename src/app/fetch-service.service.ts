import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {

  constructor() { }

  listRoom(){
    fetch('http://127.0.0.1:8000/rooms')
      .then(response => response.json())
      .then(json => console.log(json))
  }
}
