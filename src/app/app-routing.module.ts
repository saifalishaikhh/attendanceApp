import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomeAttendancePageComponent } from './home-attendance-page/home-attendance-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserAttendanceReportComponent } from './user-attendance-report/user-attendance-report.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'register-page',component:RegisterPageComponent},
  {path:'home-attendance-page',component:HomeAttendancePageComponent},
  {path:'user-attendance-report',component:UserAttendanceReportComponent},
  {path:'admin-page',component:AdminPageComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
