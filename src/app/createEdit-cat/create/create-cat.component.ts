import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.scss']
})
export class CreateCatComponent implements OnInit {

  userID = sessionStorage.getItem("LoggedInUser");
  user;
  own_cats: any = [];
  cats: any = [];
  catsItems: any = [];
  breedID;
  breeds: any = [];
  inputsImg: any= [''];
  isRemoveInput: boolean = true; 
  images: any = [];
  hasMainImg: boolean = false;
  newMainImg;
  newImg: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
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
      this.own_cats = this.user.own_cats;
    })
    
  }

  inputImgChange(src: string) {
    src ? this.hasMainImg = true : "";
    this.newMainImg = src;
  }

  inputImgsChange(src: string) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');
    if(pattern.test(src)) {
      this.newImg.push(src);
    }
  }

  addComponent() {
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

  addCatHandler(addCatForm) {
    for (var prop in addCatForm.value){
      if (prop.includes("image")){
        this.images.push(addCatForm.value[prop])
      }
    }
    
    if(this.cats[addCatForm.value.breed].cats) {
      this.apiService.postCats(this.userID, addCatForm.value.breed, this.cats[addCatForm.value.breed].cats.length, addCatForm.value.age, addCatForm.value.sex, addCatForm.value.name, addCatForm.value.mainImg, this.images, this.own_cats.length)
    } else {
      this.apiService.postCats(this.userID, addCatForm.value.breed, 0, addCatForm.value.age, addCatForm.value.sex, addCatForm.value.name, addCatForm.value.mainImg, this.images, this.own_cats.length)
    }
  }

} 
