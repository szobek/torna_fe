import { Room } from './room.model';

describe('Room', () => {
  it('should create an instance', () => {
    expect(new Room({num:0,floor:0,description:"",img_dir:"",climatic:false,window:false,mirror:false,price:0,created_at:"",updated_at:""})).toBeTruthy();
  });
});
