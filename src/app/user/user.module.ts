import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [ListComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [ListComponent]
})
export class UserModule { }