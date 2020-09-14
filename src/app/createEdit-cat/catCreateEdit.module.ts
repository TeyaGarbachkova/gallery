import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { createEditCatComponents } from './index';
import { EditCatComponent } from './edit/edit-cat.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    createEditCatComponents,
    EditCatComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      AngularSvgIconModule.forRoot()
  ]
})
export class CatCreateEditModule {  };