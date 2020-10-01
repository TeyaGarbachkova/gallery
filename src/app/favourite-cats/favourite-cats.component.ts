import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-favourite-cats',
  templateUrl: './favourite-cats.component.html',
  styleUrls: ['./favourite-cats.component.scss']
})
export class FavouriteCatsComponent implements OnInit {

  user: any;
  userID: string;
  cats: any;
  catsItems: any;
  catsLikes: any;

  constructor(private apiService: ApiService) {
    this.userID = sessionStorage.getItem("LoggedInUser");
    this.user = [];
    this.cats = [];
    this.catsItems = [];
    this.catsLikes = [];
  }

  ngOnInit() {
    this.apiService.getUsersById(this.userID).subscribe(user => {
      this.user = user;

      if(this.user.cats_like) {
        this.catsLikes = this.user.cats_like;

        for (let c_l of this.catsLikes) {

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
