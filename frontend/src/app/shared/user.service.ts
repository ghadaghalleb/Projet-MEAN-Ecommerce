//   //c pour consomme le node 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser : User = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/',user);
  }



}
