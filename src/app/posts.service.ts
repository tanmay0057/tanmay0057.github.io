import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostsService{

    emitPost = new EventEmitter<Post[]>();
    //itemSelected: boolean = false;
    tempData = [];

    //removeBtnClicked = new Subject<boolean>();

    constructor(private http: HttpClient) {
    }
    
    createAndStorePost(name: string, description: string, price: number, imagePath: string){
        const postData: Post = {name: name, description: description, price: price, imagePath: imagePath};
        this.http
          .post<{name: string}>(
            'https://shop-bridge-a260a.firebaseio.com/posts.json',
            postData
          )
          .subscribe(responseData => {
            console.log(responseData);
          });
    }

    fetchPosts(){
       return this.http
      .get<{[key: string]: Post}>('https://shop-bridge-a260a.firebaseio.com/posts.json')
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key});
            }
          }
          return postsArray;
        })
      );
    }

}