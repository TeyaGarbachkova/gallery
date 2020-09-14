import { Component, OnInit } from '@angular/core';
import catsData from  '../../data/cats.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  Cats: any = catsData;

  constructor() { }

  ngOnInit() {
  }

}
