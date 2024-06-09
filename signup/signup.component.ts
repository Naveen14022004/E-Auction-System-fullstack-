import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [HttpClient, HttpClientModule]
})
export class SignupComponent {
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private apiService:ApiService,private router:Router){
    this.signupForm = this.formBuilder.group({
      usrname: ['', [Validators.required,]],
      num: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmpass: ['',[Validators.required]]
    });
  }
  
  insertData()
  {
    console.log("Loosu")
    console.log(this.signupForm.value);
    if(this.signupForm.valid) {
      this.apiService.insertData(this.signupForm.value).subscribe(
        response => {
          if(response.message == "User already exists"){
            alert(response.message);
          }
          else{
          alert("Data Inserted successfully");
          this.router.navigateByUrl('/login')
          this.signupForm.reset();
          }
        },
        error => {
          this.signupForm.reset();
        }
      )
    }
    else{
      alert("Please check all fields")
    }
    console.log("It works");
  }
}
