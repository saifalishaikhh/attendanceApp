import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-home-attendance-page',
  templateUrl: './home-attendance-page.component.html',
  styleUrls: ['./home-attendance-page.component.css']
})
export class HomeAttendancePageComponent implements OnInit {

  public now: Date = new Date();
  date:any;
  time:any
   dateToday=Date
  
  userName:string="";
  email:string="";
  password:string="";
  data={
    "userName":this.userName,
    // "login":this.date
  }
  constructor(private user:UserService) { setInterval(() => {
    this.now = new Date();
  }, 1);}

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      let user=localStorage.getItem('user');
      let userData=user &&  JSON.parse(user);
      this.userName=userData.userName;
      this.email=userData.email;
      this.password=userData.password;

      this.attandance();
    console.log(this.userName);
    console.log(this.email);
    console.log(this.password);
    }
   
  }
  
  attandance(){
      this.user.loginAttendance().subscribe(result=>{
        console.log(result)
      })
  }
  


}

