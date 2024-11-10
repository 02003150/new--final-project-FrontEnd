import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductFormComponent } from '../product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.css'
})
export class AddProductFormComponent {
  constructor(private http:HttpClient){}

public product:any={
  productId:"",
  productName:"",
  price:"",
  qty:"",
  productAdddate:"",
  description:""
}



addProduct(){  
  this.http.post("http://localhost:8080/add-product",this.product).subscribe(data=>{
          alert("Product added success !!!")
 })
}
deleteProduct(id:any){
  this.http.delete(`http://localhost:8080/delete-product/${id}`).subscribe(data=>{
          alert("deleted")
  })
}

public searchProducts:any={}


searchProduct(productId:any){
    this.http.get(`http://localhost:8080/search-by-id/104`).subscribe((data:any)=>{
          // this.searchProducts=data;
        this.searchProducts = data[0];
        console.log(productId);
        
         console.log(data[0]);
         console.log("a ",this.searchProducts);
         
    })
}
}
