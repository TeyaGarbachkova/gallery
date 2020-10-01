import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  breeds: Array<[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllCats().subscribe(breeds => {
      this.breeds = breeds;
    })
  }

}
