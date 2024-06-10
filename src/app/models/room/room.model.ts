export class Room {

   
    id: number | undefined
    num: number;
    floor: number
    description: string
    img_dir: string
    climatic: boolean
    window: boolean
    mirror: boolean
    price: number
    created_at: string
    updated_at: string

    constructor(room:{
        num: number;
    floor: number
    description: string
    img_dir: string
    climatic: boolean
    window: boolean
    mirror: boolean
    price: number
    created_at: string
    updated_at: string
    }){
       this.num=room.num
       this.floor=room.floor
       this.description=room.description
       this.img_dir=room.img_dir
       this.climatic=room.climatic
       this.window=room.window
       this.mirror=room.mirror
       this.price=room.price
       this.created_at=room.created_at
       this.updated_at=room.updated_at

   

    }
}
