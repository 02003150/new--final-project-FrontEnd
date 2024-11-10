import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent {
customerList:any=[];

constructor(private http:HttpClient){
    this.loadCustomer();
}
loadCustomer(){
  this.http.get("http://localhost:8080/get-customer").subscribe(data=>{
    this.customerList=data;
  })
}
}
