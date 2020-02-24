import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  photos = 'photos';

  constructor(private httpClient: HttpClient) { }

  public getPhotos(){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/${this.photos}`);
  }

  // getPhotos(): Observable<any> {
  //   return this.httpClient.get(`https://jsonplaceholder.typicode.com/${this.photos}`)
  //   //.map((res:any) => res.photos.photo);
  //   .pipe(
  //     map((e:Response)=> e.json()),
  //     catchError((e:Response)=> throwError(e))
  //   );
  // }

  // public getPhotos(){
  //   return this.httpClient.get(`https://jsonplaceholder.typicode.com/${this.photos}`)
  //   .pipe(
  //     map( data => {
  //       (data:any) => data.Photos
  //       //let articles : Article[] = [];
  //   } )
  //   );
  // }
  
}
