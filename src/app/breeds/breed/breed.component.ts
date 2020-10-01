import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss']
})
export class BreedComponent implements OnInit {

  id : string;
  breeds: any;

  constructor(public actRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id'];
    this.apiService.getAllCats().subscribe(breeds => {
      this.breeds  = breeds.find((item) => (item.id === this.id));
    })
  }

}
