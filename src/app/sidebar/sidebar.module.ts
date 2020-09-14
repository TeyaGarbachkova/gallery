import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarProfileComponent } from './sidebar-profile/sidebar-profile.component';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [  
    SidebarProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [SidebarProfileComponent]
})
export class SidebarModule { }