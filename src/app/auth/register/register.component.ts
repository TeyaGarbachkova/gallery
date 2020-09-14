import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from '../../validator-directive/validator';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  users: any = [];
  length;

  constructor(fb: FormBuilder, private apiService: ApiService, private route: Router) { 
    this.registerForm = fb.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      photo: [''],
      email: ['', [Validators.required, Validators.email]],
      facebook: ['', [Validators.required]],
      instagram: ['', [Validators.required]],
      passwords: fb.group({
          password: ['', [Validators.required]],
          password_repeat: ['', [Validators.required]]
        }, {validators: [passwordMatch]}
      )
    });
  }

  ngOnInit() {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
      this.length = this.users.length;
      //console.log(this.users)
    })
  }

  onFormSubmit(registerForm) {
    //console.log(registerForm.value.passwords.password)
    //console.log(this.users.length)
    //console.log(this.password)
    if(registerForm.valid) {
      this.apiService.postUsers(registerForm.value.email, registerForm.value.facebook, registerForm.value.instagram, registerForm.value.name, registerForm.value.username, registerForm.value.photo, registerForm.value.passwords.password, this.users.length);
      this.route.navigate([{outlets: {primary: ['login'], sidebar: null}}]);
    }
  }
}
