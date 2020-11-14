import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit{

  posts;

  constructor(private pService: PostsService) {      
   }

  ngOnInit(): void {
    this.posts = this.pService.tempData;
    }

}
