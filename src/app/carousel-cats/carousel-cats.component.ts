import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../api.service.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-cats',
  templateUrl: './carousel-cats.component.html',
  styleUrls: ['./carousel-cats.component.scss']
})
export class CarouselCatsComponent implements OnInit {

  cats: any = [];
  catsItems: any = [];
  mostLiked: any = [];
  topLiked: any = [];
  
  constructor(private apiService: ApiService,
  private router: Router,) { }

  ngOnInit() {
    this.apiService.getAllCats().subscribe(cats => {
      this.cats = cats;

      for (let cat of this.cats) {
        if (cat.cats) {
          for (let c of cat.cats) {
            this.catsItems.push(c);           
          }
        }
      }

      this.mostLiked = this.catsItems;

      this.mostLiked.sort(function(a,b) {
          return (b.countLikes - a.countLikes);
      });

      this.topLiked = this.mostLiked.slice(0,3);
    })
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
}
