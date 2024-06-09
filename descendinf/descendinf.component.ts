import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Bid } from '../model/bid';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-descendinf',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './descendinf.component.html',
  styleUrl: './descendinf.component.css'
})
export class DescendinfComponent {
  Users!:Bid[];
  private apiUrl='http://localhost:8000';
  constructor(private http:HttpClient){}
  ngOnInit(): void {
          this.http.get<Bid[]>(`${this.apiUrl}/desbidplayer`).subscribe((data:Bid[])=>{

                this.Users=data;
          }) 
  }
  
}
