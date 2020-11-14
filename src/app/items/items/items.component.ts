import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/post.model'
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  loadedPosts: Post[] = [];
  isFetching = false;
  id: number;

  constructor(private http: HttpClient, private postsService: PostsService) { }

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
    this.http.delete('https://shop-bridge-a260a.firebaseio.com/posts/' + id + '.json').subscribe(() => {
      //this.loadedPosts = [];
      alert('Successful');
      this.onFetchPosts();
    });
  }

  onClickItem(data){
    this.postsService.tempData = data;
  }

}
