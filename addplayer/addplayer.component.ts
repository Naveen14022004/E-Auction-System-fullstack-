import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Player } from '../model/player';
@Component({
  selector: 'app-addplayer',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './addplayer.component.html',
  styleUrl: './addplayer.component.css'
})
export class AddplayerComponent {
private apiUrl='http://localhost:8000';
  AddplayerForm: any;
constructor(private http:HttpClient,formBuilder: FormBuilder){}
player:Player=new Player();
onSubmit(form:NgForm):void{
  if(form.valid){

    this.http.post<Player>(`${this.apiUrl}/addplayer`,this.player).subscribe({
      next: (response)=>{
        console.log('player added successively',response);
        alert('player added successively');
        form.reset();

      },
      error:(error)=>{
        alert('player is already exist');
        console.error('fail',error)
        form.reset();
      }
    });


  }



}


}
