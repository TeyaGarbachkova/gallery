import { Component, OnInit } from '@angular/core';
import catsData from  '../../data/cats.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent implements OnInit {

  id: any;
  cats: any;

  constructor(public actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id'];
    this.cats  = catsData.find((item) => (item.id === this.id));
  }

}
