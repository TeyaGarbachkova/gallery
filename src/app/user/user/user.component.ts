import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;
  cats: any;
  catsItems: any;
  ownCats: any;
  hasCats: boolean;
  
  constructor(private ActivetedRoute: ActivatedRoute, private apiService: ApiService, private route: Router) {
    this.user = [];
    this.cats = [];
    this.catsItems = [];
    this.ownCats = [];
    this.hasCats = false;
  }

  ngOnInit() {
    this.apiService.getUsersById(this.ActivetedRoute.snapshot.params.id).subscribe(user =>{
      this.user = user;

      if(this.user.own_cats) {
        this.ownCats = this.user.own_cats;
        this.hasCats = true;

        for (let o_cI of this.ownCats) {
          this.apiService.getCatsById(o_cI.breed_id, o_cI.id).subscribe(cats => {
            this.cats = cats;
            this.catsItems.push(cats);
          })
        }
      }
    });
  }
}
