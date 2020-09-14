import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { authComponents } from './index';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
      authComponents
  ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule
  ],
  providers: [AuthService]
})
export class AuthModule {  };