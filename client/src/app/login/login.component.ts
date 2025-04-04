import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface loginREsponse {
  success : boolean;
  message : string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email : string = "";
  password : string = ""
  errorMsg : string = ""

  constructor(private http : HttpClient , private router: Router) {}


  login(){
    try {
      console.log("enetered")
      if (!this.email || !this.password) {
        this.errorMsg = "All fields are required!";
        return;
       }
       
       this.http.post<loginREsponse>("http://localhost:3000/login",{email : this.email ,password : this.password}).subscribe({
        next : (response) =>{
          console.log(response)
          if(response.success) {
            this.router.navigate(['/home'])
          }else{
            this.errorMsg = response.message
          }
        }
       })
    } catch (error) {
      console.error("Login request failed:", error);
      this.errorMsg = "Something went wrong. Please try again."; 
    }
  }

}
