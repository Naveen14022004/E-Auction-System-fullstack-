import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AdminComponent } from './admin/admin.component';
import { DisplaystatusComponent } from './displaystatus/displaystatus.component';
import { DisplayplayerComponent } from './displayplayer/displayplayer.component';
import { DescendinfComponent } from './descendinf/descendinf.component';
import { ResultComponent } from './result/result.component';



export const routes: Routes = [
    {path:'',redirectTo:'/signup',pathMatch:'full',title:'E-Auction'},
    {path:'login',component:LoginComponent,title:'login-page'},
    {path:'signup',component:SignupComponent,title:'signup-page'},
    {path:'home',component:HomeComponent,title:'home-page'},
    {path:'addplayer',component:AddplayerComponent,title:'addplayer-page'},
    {path:'buyer',component:BuyerComponent,title:'buyer-page'},
    {path:'admin',component:AdminComponent,title:'admin-page'},
    {path:'displaystatus',component:DisplaystatusComponent},
    {path:'displayplayer',component:DisplayplayerComponent},
    {path:'descendinf',component:DescendinfComponent},
    {path:'result',component:ResultComponent}
    
];

