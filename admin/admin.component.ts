import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
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
