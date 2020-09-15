import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './filterPipe/filter.pipe';
import { AlbumFilterComponent } from '../album-filter/album-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FilterBestPipe } from './filterPipe/filter-best.pipe';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@NgModule({
  declarations: [ListComponent, FilterPipe, AlbumFilterComponent, FilterBestPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    IconSpriteModule
  ],
  exports: [ListComponent]
})
export class AlbumModule { }