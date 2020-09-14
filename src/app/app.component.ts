import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'gallery';
  showCarousel: boolean;
 
  constructor(private router: Router) { 
    this.showCarousel = true;
  }

  ngOnInit() {
    this.router.events.subscribe( e => {
      if(e instanceof NavigationStart){
        if (e.url.indexOf("cat-articles/article") > -1) {
          this.showCarousel = false;
        } else {
          this.showCarousel = true;
        }
      }
    })
  }

}
