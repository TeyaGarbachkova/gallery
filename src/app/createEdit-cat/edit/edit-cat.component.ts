import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.scss']
})
export class EditCatComponent implements OnInit {

  userID: string;
  user: any;
  cat: any;
  cats: any;
  ownCats: any;
  breedID: string;
  breeds: any;
  breedModel: any;
  inputsImg: any;
  images: any;
  isRemoveInput: boolean;
  hasMainImg: boolean;
  newMainImg: string;
  newImg: any;

  constructor(private ActivetedRoute: ActivatedRoute,
  private apiService: ApiService,
  private route: Router) { 
    this.userID = sessionStorage.getItem("LoggedInUser");
    this.user = [];
    this.cat = [];
    this.cats = [];
    this.ownCats = [];
    this.breeds = [];

    this.images = [];
    this.inputsImg = [''];
    this.newImg = [];
    this.isRemoveInput = true;
    this.hasMainImg = false;
  }

  ngOnInit() {
    this.apiService.getCatsById(this.ActivetedRoute.snapshot.params.breed_id,this.ActivetedRoute.snapshot.params.id).subscribe(cat => {
      this.cat = cat;
      this.inputsImg = this.cat.img;
      this.breedModel = this.cat.id_breed;
    })

    this.apiService.getAllCats().subscribe(cats => {
      this.cats = cats;

      for(let key in this.cats) {
        this.breedID = key;
       
        let breed = {
          breed_id : this.breedID,
          name : this.cats[key].breeds_name
        }
        
        this.breeds.push(breed);
      }

    })

    this.apiService.getUsersById(this.userID).subscribe(user => {
      this.user = user;
      this.ownCats = this.user.own_cats;
    })
  }

  inputImgChange(src: string) {
    this.cat.main_img = src;
  }

  inputImgsChange(src: string, i) {
    if(!(this.inputsImg.indexOf(src) > -1)) {
      this.inputsImg[i] = src;
    } else {
      this.inputsImg[i] = "This image already exist!";
    }
  }

  addComponent(img) {
    this.inputsImg = [...this.inputsImg, ""];
    this.isRemoveInput = true;
  }

  delComponent(el,index, input) {
    this.inputsImg.splice(index, 1);
    input.remove();

    if((this.inputsImg.length - 1) == 0) {
      this.isRemoveInput = false;
    }
  }

  editCatHandler(editCatForm) {
    for (var prop in editCatForm.value){
      if (prop.includes("image")){
        this.images.push(editCatForm.value[prop])
      }
    }

    let differenceImages = Object.keys(this.inputsImg).filter(
      k => this.images[k] == this.inputsImg[k]
    );


    let diff = Object.keys(differenceImages).filter(
      k => differenceImages[k] == this.images[k]
    );

    //this.apiService.editCats(this.userID, editCatForm.value.breed, this.cat.id, editCatForm.value.age, editCatForm.value.sex, editCatForm.value.name, editCatForm.value.mainImg, this.images, this.cat.id)
    this.route.navigate([{outlets: {primary: ['cat-profile', this.cat.id_breed, this.cat.id], sidebar: ['sidebar-profile']}}]);
  }

}
