import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-articles',
  templateUrl: './carousel-articles.component.html',
  styleUrls: ['./carousel-articles.component.scss']
})
export class CarouselArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    nav: false
  }

}
