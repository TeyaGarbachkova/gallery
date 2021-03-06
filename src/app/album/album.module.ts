import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './filterPipe/filter.pipe';
import { AlbumFilterComponent } from '../album-filter/album-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FilterBestPipe } from './filterPipe/filter-best.pipe';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FilterBestTopPipe } from './filterPipe/filter-best-top.pipe';

@NgModule({
  declarations: [ListComponent, FilterPipe, AlbumFilterComponent, FilterBestPipe, FilterBestTopPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    IconSpriteModule,
    CarouselModule
  ],
  exports: [ListComponent]
})
export class AlbumModule { }