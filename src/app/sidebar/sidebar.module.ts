import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarProfileComponent } from './sidebar-profile/sidebar-profile.component';
import { RouterModule } from '@angular/router';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@NgModule({
  declarations: [  
    SidebarProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconSpriteModule
  ],
  exports: [SidebarProfileComponent]
})
export class SidebarModule { }