import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
//import { User } from '../shared/user.model';
//import { UserService } from '../shared/user.service';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  user: any;
  constructor(private http: HttpClient){
  }
  UserCreate(user:  {"name": string,"email": string,"password": string } ) {
   console.log(user)
   this.http.post (environment.apiBaseUrl+'api/users/signup',user).subscribe((res) => {
   
   });
   }
 
  ngOnInit(): void {
  }
}
