import { Component, OnInit } from '@angular/core';
import { HttpClientModule , HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: any;
  log: any;
  constructor(private http: HttpClient){
  }

  login(user:  {"email": string,"password": string } ) {
    console.log(user)
    this.http.post (environment.apiBaseUrl+'api/users/login',user).subscribe((res) => {
     if (res.toString()==""){
     this.log=true;
     }else{
      this.log=false;
      console.log(res)
      let email=Object.values(res)[0].email
      var name=Object.values(res)[0].name
      console.log(email)
      console.log(name)


     }
    });
  }

  ngOnInit(): void {
  }

}
