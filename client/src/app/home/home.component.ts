import { Component,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface userData {
  success : boolean;
  message : string;
    data : {
      username : string;
      email : string;
      mobile : string
    }
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    username :string = ""
    email : string = ""
    mobile:string = ""

    constructor (private http : HttpClient) {}

    ngOnInit(): void {
      this.getUserData()
    }

    getUserData() {
      try {
        console.log("called")
        const id = localStorage.getItem("id")
        this.http.get<userData>(`http://localhost:3000/home/${id}`).subscribe({next : (response) => {
          console.log(response,"hahaha")
          this.username = response.data.username
          this.email = response.data.email
          this.mobile = response.data.mobile
        }})
      } catch (error) {
        console.error("Login request failed:", error);
      }
    }
   
}
