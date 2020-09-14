import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: any = [];
  constructor(
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
