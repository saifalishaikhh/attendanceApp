import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-attendance-report',
  templateUrl: './user-attendance-report.component.html',
  styleUrls: ['./user-attendance-report.component.css']
})
export class UserAttendanceReportComponent implements OnInit {

  constructor() { setInterval(() => {
    this.now = new Date();
  }, 1);}

  ngOnInit(): void {
  }

  public now: Date = new Date();
  
}
