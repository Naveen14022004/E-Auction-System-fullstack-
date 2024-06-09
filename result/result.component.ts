import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Bid } from '../model/bid';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  Users!: Bid;
  private apiUrl = 'http://localhost:8000';
  n: number = 0;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<Bid>(`${this.apiUrl}/resultbidplayer`).subscribe((data: Bid) => {
      this.Users = data;
      alert("Result Displayed");
      console.log(this.Users);
      this.delete();
    });
  }
  delete(): void {
    console.log(this.Users);
    this.http.post<Bid>(`${this.apiUrl}/deletebidplayer`, this.Users).subscribe((response) => {
      console.log(response);
      
    })
  }
}
