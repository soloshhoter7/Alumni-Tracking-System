import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MessageFeedComponent } from '../app/dashboard/messaging/message-feed/feed.component';
import { MessageComponent } from '../app/dashboard/messaging/message/message.component';
import { UserItemComponent } from '../app/dashboard/messaging/user-item/user-item.component';
import { UserListComponent } from '../app/dashboard/messaging/user-list/user-list.component';
import { ChatroomComponent } from '../app/dashboard/messaging/chatroom/chatroom.component';
import { ChatFormComponent } from '../app/dashboard/messaging/chat-form/chat-form.component';

import { NavBarComponent } from './dashboard/nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MessagingComponent } from './dashboard/messaging/messaging.component';
import { FeedComponent } from './dashboard/feed/feed.component';
import { ConnectComponent } from './dashboard/connect/connect.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './dashboard/feed/post/post.component';
import { ProfileRequestComponent } from './dashboard/connect/profile-request/profile-request.component';
import { InvitationRequestComponent } from './dashboard/connect/invitation-request/invitation-request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { AlertsComponent } from '../app/dashboard/alerts/alerts.component';
import { CollegePortalComponent } from './college-portal/college-portal.component';

export const appRoutes: Routes= [
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'collegeportal',component:CollegePortalComponent},
  {path:'dashboard',component:DashboardComponent,
  children: [
    { path: '', redirectTo: 'feed', pathMatch: 'full' },
    { path: 'feed', component: FeedComponent },
    { path: 'connect', component:ConnectComponent },
    { path: 'messaging',component:MessagingComponent},
    { path: 'profile',component:ProfileComponent}
  ]},
  {path:'',redirectTo:'/login',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    MessageFeedComponent,
    MessageComponent,
    UserItemComponent,
    UserListComponent,
    ChatroomComponent,
    ChatFormComponent,
    LoginComponent,
    SignUpComponent,
    MessagingComponent,
    FeedComponent,
    ConnectComponent,
    ProfileComponent,
    PostComponent,
    ProfileRequestComponent,
    InvitationRequestComponent,
    AlertsComponent,
    CollegePortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MatNativeDateModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
