import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SingleRoomComponent } from './components/single-room/single-room.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomCreateComponent } from './components/room-create/room-create.component';

export const routes: Routes = [
    {path:"",component:RoomListComponent},
    {path: 'room/:id',component:SingleRoomComponent},
    {path: 'room-create',component:RoomCreateComponent}
];
