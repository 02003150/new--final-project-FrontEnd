import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-supplier-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './supplier-form.component.html',
  styleUrl: './supplier-form.component.css'
})
export class SupplierFormComponent implements OnInit{

 constructor(private http:HttpClient,private router : Router){
        this.loadSupplier();
    }

ngOnInit(): void {
    this.loadSupplier();
  }
  

  
btnManageSupplier() {
this.router.navigate(["./dash-board/manage-suplier"]);
}

    public supplierList:any=[];
    public selectedSupplier:any={};

btnUpdateSelectedSupplier(supplier: any){
this.selectedSupplier=supplier;
}

btnDeleteSupplier(id: any) {
this.http.delete(`http://localhost:8080/delete-supplier/${id}`).subscribe(data=>{
  alert("delete");
  this.loadSupplier();
})
}

btnUpdateSupplier() {
  this.http.put(`http://localhost:8080/update-supplier`,this.selectedSupplier).subscribe(data=>{
    alert("updated");
    
  }) 
  }

loadSupplier(){
  this.http.get("http://localhost:8080/get-supplier").subscribe(data=>{
  this.supplierList=data;
  })
}

}
