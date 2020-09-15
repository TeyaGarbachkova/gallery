import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@NgModule({
  declarations: [ListComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconSpriteModule
  ],
  exports: [ListComponent]
})
export class UserModule { }