import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Bid } from '../model/bid';
@Component({
  selector: 'app-buyer',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './buyer.component.html',
  styleUrl: './buyer.component.css'
})
export class BuyerComponent {
  bid:Bid=new Bid();
  private apiUrl='http://localhost:8000';
constructor(private http:HttpClient){}
submitBid(form:NgForm){
  if(form.valid){

    this.http.post<any>(`${this.apiUrl}/bidplayer`,this.bid).subscribe({
      next: (response)=>{
        console.log('bid added successively',response);
        alert(response.message);
        form.reset();

      },
      error:(error)=>{
        alert(error.message);
        console.error('fail',error.message )
        form.reset();
      }
    });
    form.reset();

  }



}



}




