import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { createEditCatComponents } from './index';
import { EditCatComponent } from './edit/edit-cat.component';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

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
      IconSpriteModule
  ]
})
export class CatCreateEditModule {  };