// import { Component } from '@angular/core';
import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HttpClient, HttpClientModule]
})
export class HomeComponent {

  user: string = '';
  posts:any[]=[];
  balance:number=0;
  msg:string="";
  constructor(private router: Router) {
    let u: any = localStorage.getItem('user');
    this.user = u;
    if (u == null || u == '') {
      this.router.navigateByUrl('login');
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }

}
