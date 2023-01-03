import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/data-type';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  authError: string = '';
  userName: any;
  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void { }

  Login(data: Login) {
    console.log(data);

    let val = Object.values(data);
    let key = Object.keys(data);
    if (
      key[0] == 'userName' &&
      key[1] == 'password' &&
      val[0] == 'admin' &&
      val[1] == 'admin'
    ) {
      console.log('Admin enter');
      this.router.navigate(['admin-page']);
    } else {
      this.authError = '';
      this.user.userLogin(data);
      this.user.isLoginError.subscribe((isError) => {
        if (isError) {
          this.authError = 'Name or password is not correct';
        }
      });
    }

   
  }

}
