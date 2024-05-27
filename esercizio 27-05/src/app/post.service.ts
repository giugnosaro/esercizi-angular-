import { Injectable } from '@angular/core';
import { Post } from './models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

    tuttiIpost:Post[] = [

    ]



  constructor() {
    this.getFromJson()
   }

   getFromJson(){
    fetch('url').then(res => res.json())
    .then(res => {
      this.tuttiIpost = res
    })
  }

  getAll():Post[]{
    return this.tuttiIpost
  }

  getById(id:number){
    return this.tuttiIpost.find(p => p.id == id)
  }
}
