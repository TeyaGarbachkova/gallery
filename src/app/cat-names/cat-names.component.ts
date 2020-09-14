import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cat-names',
  templateUrl: './cat-names.component.html',
  styleUrls: ['./cat-names.component.scss']
})
export class CatNamesComponent implements OnInit {

  catNames: any = [];
  catNamesGroup: any = [];
  alphabets: any = [];
  letter: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCatNames().subscribe(names => {
      this.catNames = names;
      
      for (let i = 65; i <= 90;i++) {
        this.alphabets.push(String.fromCharCode(i));

        let letterName = {
          letter: String.fromCharCode(i),
          names: { ...this.catNames.filter((name) => name.startsWith(String.fromCharCode(i)))}
        }

        this.catNamesGroup.push(letterName);
      }
    }) 
  }

  getLetter(letter) {
    this.letter = letter;
  }

  isEmptyObject(obj:any) {
    return (obj.length > 0);
  }
}
