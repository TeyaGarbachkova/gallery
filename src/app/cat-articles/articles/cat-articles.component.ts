import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-articles',
  templateUrl: './cat-articles.component.html',
  styleUrls: ['./cat-articles.component.scss']
})
export class CatArticlesComponent implements OnInit {

  //kind: any;
  articleFirst: boolean = false;
  articleSecond: boolean = false;
  articleThird: boolean = false;
  constructor(private activeRoutedService: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoutedService.data.subscribe(data => {
      // this.kind = Object.values(data);
      // console.log(this.kind)

      switch (data.kind) {
        case "1": { 
           //statements; 
           this.articleFirst = !this.articleFirst;
           break; 
        } 
        case "2": { 
           //statements;
           this.articleSecond = !this.articleSecond; 
           break; 
        }
        case "3": { 
           //statements;
           this.articleThird = !this.articleThird; 
           break; 
        } 
        default: { 
           //statements; 
           break; 
        } 
      }
    })
  }

}
