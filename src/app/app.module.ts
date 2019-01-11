import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import  {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMeetingComponent } from './meeting-ops/create-meeting/create-meeting.component';
import { AddTaskComponent } from './meeting-ops/add-task/add-task.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './admin/home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { AllUserDetailComponent } from './admin/all-user-detail/all-user-detail.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './services/notification.service';
import { AdminService } from './services/admin.service';
import { AuthService } from './services/auth.service';
import { UserDetailComponent } from './admin/user-detail/user-detail.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { AuthGuard } from './guards/authgard';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { CheckPasswordDirective } from './validators/check-password.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MeetingService } from './services/meeting.service';
import { AllMeetingsComponent } from './all-meetings/all-meetings.component';
import { ListMeetingsComponent } from './list-meetings/list-meetings.component';
import { SharedService } from './services/shared.service';
import { Data } from './providers/data';
import { EditMeetingComponent } from './meeting-ops/edit-meeting/edit-meeting.component';
import { AuthedGuard } from './guards/authedgaurd';
import { AdminGaurd } from './guards/admingaurd';
import { ManagerGaurd } from './guards/managergaurd';
import { MeetingFilterPipe } from './meeting-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CreateMeetingComponent,
    AddTaskComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    CreateUserComponent,
    AllUserDetailComponent,
    NotificationComponent,
    UserDetailComponent,
    EditUserComponent,
    HeaderComponent,
    RegisterComponent,
    CheckPasswordDirective,
    DashboardComponent,
    ProfileComponent,
    AllMeetingsComponent,
    ListMeetingsComponent,
    EditMeetingComponent,
    MeetingFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CKEditorModule,
  ],
  providers: [
    NotificationService,
    AdminService,
    AuthService,
    AuthGuard,
    MeetingService,
    SharedService,
    Data,
    AuthedGuard,
    AdminGaurd,
    ManagerGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
