import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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

  constructor(private http : HttpClient , ) {}


  login(){
    try {
      console.log("enetered")
      if (!this.email || !this.password) {
        this.errorMsg = "All fields are required!";
        return;
       }
       
       
 

    } catch (error) {
      
    }
  }

}
