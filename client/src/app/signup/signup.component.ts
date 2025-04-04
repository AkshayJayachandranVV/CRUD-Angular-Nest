import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface SignupResponse {
  success: boolean;
  message?: string; 
}


@Component({
  selector: 'app-signup',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    mobile : string = "";
    username: string = "";
    email: string = ""
    password: string = ""
    errorMsg :string | undefined = ""
    

    constructor(private http : HttpClient,private router : Router) {}

      signup() {
        try {
          
        if (!this.username || !this.email || !this.mobile || !this.password) {
          this.errorMsg = "All fields are required!";
          return;
         }

      console.log("got data",this.username)
       this.http.post<SignupResponse>("http://localhost:3000/signup",{username: this.username,email:this.email,mobile:this.mobile,password:this.password})
       .subscribe({next : (response)=>{
        console.log(response)
        if(response.success == true){
          this.router.navigate(['/login']);
        }else{
          this.errorMsg = response.message
        }
       }})
        } catch (error) {
          console.log(error)
          this.errorMsg = "Something went wrong. Please try again."; 
        }
    }
}

