import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-cat-profile',
  templateUrl: './cat-profile.component.html',
  styleUrls: ['./cat-profile.component.scss']
})
export class CatProfileComponent implements OnInit {

  cat: any = [];
  cats: any = [];
  albumCats: any = [];
  breedName: string;
  user: any = [];
  userID = sessionStorage.getItem("LoggedInUser");
  hasBtnEdit: boolean = false;
  hasGallery: boolean = false;

  constructor(private ActivetedRoute: ActivatedRoute,
  private apiService: ApiService,
  private route: Router,
  private lightbox: Lightbox) { }

  open(cat: any): void {
    // popup images
    let allImages = cat.img.concat(cat.main_img);
       for (let img of allImages) {
          const album = {
            src: img
          };
        this.albumCats.push(album);       
      }

    // open lightbox
    this.lightbox.open(this.albumCats);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

  ngOnInit() {
    this.apiService.getCatsById(this.ActivetedRoute.snapshot.params.breed_id,this.ActivetedRoute.snapshot.params.id).subscribe(cat => {
      this.cat = cat;

      if(this.cat.img.length) {
        this.hasGallery = true;
      }

      if(this.cat.user_id == this.userID) {
        this.hasBtnEdit = true;
      }

      this.apiService.getUsersById(this.cat.user_id).subscribe(user => {
        this.user = user;

        this.cat.username = this.user.username
        this.cat.user_img = this.user.img
      }) 

      this.apiService.getAllCats().subscribe(cats => {
        this.cats = cats;

        for(let key in this.cats) {
          this.breedName = this.cats[this.cat.id_breed].breeds_name;
        }
      })
    })
  }

  countLikes(count: any) {
    return count > 0;
  }

  checkSex(sex: string) {
    return sex == 'Male' ? true : false;
  }
}
