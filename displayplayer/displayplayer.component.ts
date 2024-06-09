import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Bid } from '../model/bid';
import { OnInit } from '@angular/core';
import { Player } from '../model/player';
@Component({
  selector: 'app-displayplayer',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './displayplayer.component.html',
  styleUrl: './displayplayer.component.css'
})
export class DisplayplayerComponent {
  Users!:Player[];
  private apiUrl='http://localhost:8000';
  constructor(private http:HttpClient){}
  ngOnInit(): void {
          this.http.get<Player[]>(`${this.apiUrl}/addplayer`).subscribe((data:Player[])=>{

                this.Users=data;
          }) 
  }
}
