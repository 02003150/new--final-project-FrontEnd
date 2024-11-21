import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { DashFormComponent } from '../dash-form/dash-form.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email: any;
  password: any;
  
  constructor(private router : Router){}

  btnLogInOnActoin() {
    this.validate()
  }

  validate(){
    fetch(`http://localhost:8080/validate?email=${this.email}&password=${this.password}`)
    .then(res=>{
      if(!res.ok){
        alert("user not found...!")
      }
      return res.json()
    })
    .then(data=>{
      if (data.length==1) {
        this.router.navigate(['/dash-board'])
      }else{
        alert("Incorrect Username and password...!")
      }
    })
  }

}
