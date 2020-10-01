import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-cats',
  templateUrl: './user-cats.component.html',
  styleUrls: ['./user-cats.component.scss']
})
export class UserCatsComponent implements OnInit {

  userID: string;
  user: any;
  cats: any;
  catsItems: any;
  ownCats: any;

  constructor(private apiService: ApiService) { 
    this.userID = sessionStorage.getItem("LoggedInUser");
    this.user = [];
    this.cats = [];
    this.catsItems = [];
    this.ownCats = [];
  }

  ngOnInit() {
    this.apiService.getUsersById(this.userID).subscribe(user => {
      this.user = user;

      if(this.user.own_cats) {
        this.ownCats = this.user.own_cats;

        for (let o_cI of this.ownCats) {
          this.apiService.getCatsById(o_cI.breed_id, o_cI.id).subscribe(cats => {
            this.cats = cats;
            this.catsItems.push(cats);
          })
        }
      }
    })
  }

}
