import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from 'src/data-type';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  
  constructor(private user:UserService) { }

  ngOnInit(): void {
  }

  Register(data:Register):void{
    
    this.user.userRegister(data)
  }
  

}
