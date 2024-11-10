import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-supplier-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './supplier-form.component.html',
  styleUrl: './supplier-form.component.css'
})
export class SupplierFormComponent {
    public supplierList:any=[];

    constructor(private http:HttpClient){
        this.loadSupplier();
    }
loadSupplier(){
  this.http.get("http://localhost:8080/get-supplier").subscribe(data=>{
  this.supplierList=data;
  })
}
}
