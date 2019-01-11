import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { AllUserDetailComponent } from './admin/all-user-detail/all-user-detail.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AuthGuard } from './guards/authgard';
import { RegisterComponent } from './auth/register/register.component';
import { CreateMeetingComponent } from './meeting-ops/create-meeting/create-meeting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AddTaskComponent } from './meeting-ops/add-task/add-task.component';
import { EditMeetingComponent } from './meeting-ops/edit-meeting/edit-meeting.component';
import { AuthedGuard } from './guards/authedgaurd';
import { AdminGaurd } from './guards/admingaurd';
import { ManagerGaurd } from './guards/managergaurd';

const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[AuthedGuard]},
  {path:'register',component:RegisterComponent,canActivate:[AuthedGuard]},
  {path:'admin/create-user',component:CreateUserComponent,canActivate:[AuthGuard,AdminGaurd]},
  {path:'admin/all-user',component:AllUserDetailComponent,canActivate:[AuthGuard,AdminGaurd]},
  {path:'admin/edit-user',component:EditUserComponent,canActivate:[AuthGuard,AdminGaurd]},
  {path:'manager/create-meeting',component:CreateMeetingComponent,canActivate:[AuthGuard,ManagerGaurd]},
  {path:'',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'manager/add-task',component:AddTaskComponent,canActivate:[AuthGuard,ManagerGaurd]},
  {path:'manager/edit-meeting',component:EditMeetingComponent,canActivate:[AuthGuard,ManagerGaurd]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
