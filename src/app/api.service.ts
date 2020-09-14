import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // link = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) { }

  public getUsers(){
    //return this.httpClient.get<any[] | any>(`${this.link}users${id ? `/${id}` : ''}`);
    return this.httpClient.get<any[] | any>(`https://cats-99c7b.firebaseio.com/users.json`);
  }

  public getUsersById(id?: any){
    return this.httpClient.get<any[] | any>(`https://cats-99c7b.firebaseio.com/users/${id}.json`);
  }

  public postUsers(email, fb, insta, name, username, img, password, id) {
    this.httpClient.patch<any[] | any>(`https://cats-99c7b.firebaseio.com/users/${id}.json`, {
      'email': email,       
      'facebook': fb,       
      'instagram': insta,       
      'name': name,
      'username': username,       
      'img': img,
      'password' : password,
      'id' : id
    }).subscribe()
  }

  public getAllCats(){
    return this.httpClient.get<any[] | any>("https://cats-99c7b.firebaseio.com/cats.json");
  }

  public getCatsById(id_breed, id?: number){
    return this.httpClient.get<any[] | any>(`https://cats-99c7b.firebaseio.com/cats/${id_breed}/cats/${id}.json`);
  }

  public postCats(user_id, id_breed, id, age, sex, name, mainImg, img, length) {
    this.httpClient.put<any[] | any>(`https://cats-99c7b.firebaseio.com/cats/${id_breed}/cats/${id}.json`, {
      'id_breed': id_breed,       
      'id': id,
      'age': age,       
      'sex': sex,       
      'name': name,
      'main_img': mainImg,
      'img' : img,
      'user_id' : user_id
    }).subscribe()

    this.httpClient.put<any[] | any>(`https://cats-99c7b.firebaseio.com/users/${user_id}/own_cats/${length}.json`, {
      'breed_id': id_breed,       
      'id': id,
    })
    .subscribe()
  }

  public editCats(user_id, id_breed, id, age, sex, name, mainImg, img, length) {
    this.httpClient.patch<any[] | any>(`https://cats-99c7b.firebaseio.com/cats/${id_breed}/cats/${id}.json`, {
      'id_breed': id_breed,       
      'id': id,
      'age': age,       
      'sex': sex,       
      'name': name,
      'main_img': mainImg,
      'img' : img,
      'user_id' : user_id
    }).subscribe()
  }

  public delUserLikeCats(id_user, id_breed, cat_id, countLikes, id?: number) {
    this.httpClient.delete<any[] | any>(`https://cats-99c7b.firebaseio.com/users/${id_user}/cats_like/${id}.json`, {
      // 'isLike': isLike      
    })
    .subscribe()

    this.httpClient.patch<any[] | any>(`https://cats-99c7b.firebaseio.com/cats/${id_breed}/cats/${cat_id}.json`, {
      'countLikes': countLikes
    }).subscribe()
  }

  public postUserLikeCats(id_user, id_breed, length, countLikes, id?: number) {
    this.httpClient.put<any[] | any>(`https://cats-99c7b.firebaseio.com/users/${id_user}/cats_like/${length}.json`, {   
      'breed_id': id_breed,       
      'id': id      
    })
    .subscribe()

    this.httpClient.patch<any[] | any>(`https://cats-99c7b.firebaseio.com/cats/${id_breed}/cats/${id}.json`, {
      'countLikes': countLikes
    }).subscribe()

  }

  public getCatNames(){
    return this.httpClient.get<any[] | any>(`https://cats-99c7b.firebaseio.com/cats_name.json`);
  }

}
