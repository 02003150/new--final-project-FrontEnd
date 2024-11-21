import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-acconut',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-acconut.component.html',
  styleUrl: './create-acconut.component.css'
})
export class CreateAcconutComponent {

constructor(private http:HttpClient){}

 userDetails:any={
    name:"",
    email:"",
    password:"",
    address:"",

}

btnAddUserDetail() {
this.http.post("http://localhost:8080/add-details",this.userDetails).subscribe(data=>{
  alert("details added")
})
}

}
