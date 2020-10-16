import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { ApiService } from '../../api.service.js';
import { Router, ActivatedRoute } from '@angular/router';
// import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  breedId: string;
  bestId: string;
  bestIdTop: string;
  cats: any;
  catsBreed: any;
  catsItems: any;
  albumCats: any;
  catsLikes: any;
  isLike: boolean;
  user: any;
  userID: string;
  count: number;
  idLike: number;
  showCatList: boolean;

  constructor(
    private lightbox: Lightbox,
    private apiService: ApiService,
    private router: Router,
    private ActivetedRoute: ActivatedRoute) {
      this.cats = [];
      this.catsBreed = [];
      this.catsItems = [];
      this.albumCats = [];
      this.userID = sessionStorage.getItem("LoggedInUser");
      this.count = 0;
    }

  open(cat: any) {
    // popup images
    this.albumCats = [];
    let allImages = cat.img.concat(cat.main_img);
       for (let img of allImages) {

        const album = {
          src: img,
          caption: cat.name
        };

        this.albumCats.push(album);
      }

    // open lightbox
    this.lightbox.open(this.albumCats, cat.id, { centerVertically: true });
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

  ngOnInit() {
    this.apiService.getAllCats().subscribe(cats => {
      this.cats = cats;

      for (let cat of this.cats) {
        this.catsBreed.push(cat.breeds_name);

        if (cat.cats) {
          for (let c of cat.cats) {
            c.isLike = false;
            c.likeId = null;

            this.apiService.getUsersById(c.user_id).subscribe(user => {
              this.user = user;

              c.username = this.user.username
              c.user_img = this.user.img
            })
            this.catsItems.push(c);     
          }
        }
      }

      if(this.userID) {
        this.apiService.getUsersById(this.userID).subscribe(user => {
          this.user = user;

          if(this.user.cats_like) {
            this.catsLikes = this.user.cats_like;

            for (let c_l in this.catsLikes) {

              if(this.catsLikes[c_l]) {
                this.idLike = Number(c_l);

                this.apiService.getCatsById(this.catsLikes[c_l].breed_id, this.catsLikes[c_l].id).subscribe(cats => {
                  this.cats = cats;

                  for (let catIt of this.catsItems) {
                    if(cats.id_breed == catIt.id_breed && cats.id == catIt.id) {
                      catIt.isLike = true;
                      catIt.likeId = Number(c_l);
                      this.showCatList = true;
                    }

                  }
                })
              }
            }
          } else {
            this.catsLikes = [];
            this.catsLikes.length = 0;
            this.showCatList = true;
          }
        })
      } else {
        this.showCatList = true;
      }

      //console.log(this.catsItems)
      
    })
  }
  
  change(cat) {
    if(cat.isLike) {
      this.count = cat.countLikes - 1;
      this.apiService.delUserLikeCats(this.userID, cat.id_breed, cat.id, this.count, cat.likeId);
    } else { 
      this.idLike +=1;
      cat.likeId = this.idLike

      this.count = cat.countLikes + 1;
      this.apiService.postUserLikeCats(this.userID, cat.id_breed, this.idLike, this.count, cat.id);
    }

    cat.isLike = !cat.isLike;
  }


  displayBreedId(id: string) {
    this.breedId = id;
  }

  displayBestId(id: string) {
    this.bestId = id;
  }

  displayBestIdTop(id: string) {
    //console.log(id);
    //this.bestIdTop = id;
    this.bestIdTop = id;
    
  }
}
