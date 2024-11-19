import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [RouterLink,HttpClientModule,FormsModule,CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit{
  productList:any=[];


 public btnAddProduct(){
    this.router.navigate(["./dash-board/add-product-form"])
  }

  constructor(private http:HttpClient,private router : Router){
      this.loadProduct();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  loadProduct(){
    this.http.get("http://localhost:8080/get-product").subscribe(data=>{
      this.productList=data
    })
  } 


  public seletedProduct:any={}

  selectedUpdateProduct(product:any){
    console.log(product); 
      this.seletedProduct=product;
  }

updateProduct(){
  this.http.put("http://localhost:8080/update-product",this.seletedProduct).subscribe(data=>{
    alert("product updated")
  })
}

  deleteProduct(id:any){
      this.http.delete(`http://localhost:8080/delete-product/${id}`).subscribe(data=>{
        alert("deleted!!!")
      this.loadProduct();
      })
      
  }
  
}
