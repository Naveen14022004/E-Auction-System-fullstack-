// import { Component } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { Router, RouterOutlet } from '@angular/router';
// import { AppComponent } from '../app.component';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [AppComponent, RouterOutlet],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// // export class LoginComponent {
// //   constructor(private router: Router){

// //   }
// //   navigate(){
// //     this.router.navigateByUrl("/signup");
// //   }
   
// // }




// // import { Component } from '@angular/core';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { Router } from '@angular/router';
// // import { AuthService } from '../auth.service'; // Import your authentication service

// import { Component } from '@angular/core';
// import { Router,RouterOutlet } from '@angular/router';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { ApiService } from '../api.service';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;

//   constructor(
//     private formBuilder: FormBuilder,
//     private authService: AuthService, // Inject your authentication service
//     private router: Router
//   ) {
//     this.loginForm = this.formBuilder.group({
//       email: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   login() {
//     if (this.loginForm.invalid) {
//       return;
//     }

//     const email = this.loginForm.value.email;
//     const password = this.loginForm.value.password;

//     // Call your authentication service to check credentials
//     this.authService.login(email, password).subscribe(
//       response => {
//         // If login successful, navigate to the next page
//         this.router.navigateByUrl('/dashboard');
//       },
//       error => {
//         // If login fails, handle the error (e.g., display an error message)
//         console.error('Login failed:', error);
//       }
//     );
//   }

//   navigate() {
//     this.router.navigateByUrl('/signup');
//   }
// }








// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ApiService } from '../api.service';

// import { Component } from '@angular/core';
// import { FormBuilder ,FormGroup, Validators} from '@angular/forms';
// import { Router, RouterOutlet } from '@angular/router';
// import { AppComponent } from '../app.component';
// import { ApiService } from '../api.service';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [AppComponent, RouterOutlet,FormGroup],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })

import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [HttpClient, HttpClientModule]
})
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
export class LoginComponent {
  loginForm: FormGroup;

  constructor(

    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    // console.log("Hiiii")
    // console.log(this.loginForm.value)
    if (this.loginForm.invalid) {
      console.log("Login Form Error")
    }

    // const email = this.loginForm.value.email;
    // const password = this.loginForm.value.password;

    // Call your API service to check credentials
    this.apiService.login(this.loginForm.value).subscribe(

      (response) => {
        if(response.user.email=="naveensivamurugan@gmail.com"){
          alert("Admin Login Success")
          localStorage.setItem('user', "naveensivamurugan@gmail.com");
          console.log('Login response:', response);
          this.router.navigateByUrl('/admin');
          // alert("After res")
        }
        // If login successful, navigate to the dashboard page
        else{
          alert("Login Success")
          localStorage.setItem('user',response.user.email );
        console.log('Login response:', response);
        this.router.navigateByUrl('/home');
        }
      },
      (error) => {
        // If login fails, handle the error (e.g., display an error message)
        alert("Login Failed")
        console.error('Login failed:', error);
        // Optionally, you can display an error message to the user
      }
    );
  }
}
