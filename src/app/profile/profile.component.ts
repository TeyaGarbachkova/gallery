import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from '../validator-directive/validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userID;
  user;
  editProfileForm: FormGroup;

  constructor(fb: FormBuilder, private apiService: ApiService) {
    this.userID = JSON.parse(sessionStorage.getItem("LoggedInUser"));
 
    this.editProfileForm = fb.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      passwords: fb.group({
          password: ['', [Validators.required]],
          password_repeat: ['', [Validators.required]]
        }, {validators: [passwordMatch]}
      ),
      facebook: ['', [Validators.required]],
      instagram: ['', [Validators.required]],
      img: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.apiService.getUsersById(this.userID).subscribe(user => {
      this.user = user;
      console.log(this.user)

      this.editProfileForm.patchValue({
        username: this.user.username,
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        facebook: this.user.facebook,
        instagram: this.user.instagram,
        img: this.user.img
      });
      // this.username = user.username;
      // this.userImg = user.img;
    })
  }

  onFormSubmit(editProfileForm) {
    console.log(editProfileForm.value.name)

    this.apiService.postUsers(editProfileForm.value.email, editProfileForm.value.facebook, editProfileForm.value.instagram, editProfileForm.value.name, editProfileForm.value.username, editProfileForm.value.image, editProfileForm.value.passwords.password, this.userID);
  }

}
