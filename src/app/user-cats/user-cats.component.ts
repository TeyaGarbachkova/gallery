import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-cats',
  templateUrl: './user-cats.component.html',
  styleUrls: ['./user-cats.component.scss']
})
export class UserCatsComponent implements OnInit {

  user: any = [];
  userID = sessionStorage.getItem("LoggedInUser");
  own_cats;
  cats: any = [];
  catsItems: any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUsersById(this.userID).subscribe(user => {
      this.user = user;

      if(this.user.own_cats) {
        this.own_cats = this.user.own_cats;

        for (let o_cI of this.own_cats) {
          this.apiService.getCatsById(o_cI.breed_id, o_cI.id).subscribe(cats => {
            this.cats = cats;
            this.catsItems.push(cats);
          })
        }
      }
    })
  }

}
