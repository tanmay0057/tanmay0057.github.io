import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  itemSelected: boolean;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    
  }

}
