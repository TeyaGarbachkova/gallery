import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cat-names',
  templateUrl: './cat-names.component.html',
  styleUrls: ['./cat-names.component.scss']
})
export class CatNamesComponent implements OnInit {

  alphabets: Array<string>;
  catNames: string[];
  catNamesGroup: Array<{}>;
  letter: string;

  constructor(private apiService: ApiService) { 
    this.catNamesGroup = [];
    this.alphabets = [];
  }

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

  getLetter(letter: string) {
    this.letter = letter;
  }

  isEmptyObject(obj: Array<[]>) {
    return (obj.length > 0);
  }
}
