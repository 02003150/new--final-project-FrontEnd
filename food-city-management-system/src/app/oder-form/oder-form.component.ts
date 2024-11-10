import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-oder-form',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './oder-form.component.html',
  styleUrl: './oder-form.component.css'
})
export class OderFormComponent {
    oderList:any=[];
    constructor(private http:HttpClient){

    }
    loadOder(){
      this.http.get("").subscribe(data=>{
      this.oderList=data;
      })
    }
}
