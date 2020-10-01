import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-filter',
  templateUrl: './album-filter.component.html',
  styleUrls: ['./album-filter.component.scss']
})
export class AlbumFilterComponent implements OnInit {

  @Input() catsBreed: any = [];
  @Output() breedId = new EventEmitter();
  @Output() bestId = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectCatHandler(selectCatForm: any) {
    this.breedId.emit(selectCatForm.value.breed);
  }

  selectBestHandler(selectBestForm: any) {
    this.bestId.emit(selectBestForm.value.filterBest);
  }
}
