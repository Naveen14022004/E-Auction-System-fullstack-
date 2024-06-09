import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Bid } from '../model/bid';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-displaystatus',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './displaystatus.component.html',
  styleUrl: './displaystatus.component.css'
})
export class DisplaystatusComponent implements OnInit {
  
  Users!:Bid[];
  private apiUrl='http://localhost:8000';
  constructor(private http:HttpClient){}
  ngOnInit(): void {
          this.http.get<Bid[]>(`${this.apiUrl}/bidplayer`).subscribe((data:Bid[])=>{

                this.Users=data;
          }) 
  }
  


}
