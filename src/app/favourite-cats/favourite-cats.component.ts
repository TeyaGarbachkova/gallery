import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-favourite-cats',
  templateUrl: './favourite-cats.component.html',
  styleUrls: ['./favourite-cats.component.scss']
})
export class FavouriteCatsComponent implements OnInit {

  user: any = [];
  userID = sessionStorage.getItem("LoggedInUser");
  cats_likes;
  cats: any = [];
  catsItems: any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsersById(this.userID).subscribe(user => {
      this.user = user;

      if(this.user.cats_like) {
        this.cats_likes = this.user.cats_like;

        for (let c_l of this.cats_likes) {
          if(c_l) {
            this.apiService.getCatsById(c_l.breed_id, c_l.id).subscribe(cats => {
              this.cats = cats;
              this.catsItems.push(cats);
            })
          }
        }
      }
    })
  }

}
