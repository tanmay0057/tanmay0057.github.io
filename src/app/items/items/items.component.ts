import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/post.model'
import { PostsService } from 'src/app/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  loadedPosts: Post[] = [];
  isFetching = false;
  id: number;

  removeBtnClicked: boolean = false;

  constructor(private http: HttpClient, private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe( posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.name, postData.description, postData.price, postData.imagePath);
    setTimeout(() => {
      this.onFetchPosts();
    }, 1000);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe( posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  removeItem(id: string){
    
    this.removeBtnClicked = true;

    this.http.delete('https://shop-bridge-a260a.firebaseio.com/posts/' + id + '.json').subscribe(() => {
      //this.loadedPosts = [];
      alert('Successful');
      this.removeBtnClicked = false;
      this.onFetchPosts();
    });
  }

  onClickItem(data){
    if(!this.removeBtnClicked){
      this.postsService.tempData = data;
      this.router.navigate(['/info']);
    }
  }

}
