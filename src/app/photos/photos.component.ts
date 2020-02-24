import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Photo } from '../photos.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public photos: Photo[] = []; // казваме от какъв тип е и какво ще съдържа - Photo[]
  
  constructor(private apiService: ApiService) {
    // this.photos = []; // давам стойност
  }

  ngOnInit() {
    this.apiService.getPhotos().subscribe((data)=>{
      for (let i = 0; i < 100; i++) {
        this.photos.push(data[i]);
      }
      console.log(this.photos);

    })   
  }
}
