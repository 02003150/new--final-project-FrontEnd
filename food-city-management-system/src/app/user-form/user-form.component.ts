import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { DashFormComponent } from '../dash-form/dash-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManageUsersFormComponent } from '../manage-users-form/manage-users-form.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {

  btnManageUserForm() {
    this.router.navigate(['dash-board/manage-users-form'])
  }

constructor(private http:HttpClient, private router : Router){
  this.loadUsers();
}
ngOnInit(): void {
   this.loadUsers()
}
  userList:any=[];

loadUsers(){
    this.http.get("http://localhost:8080/get-user").subscribe(data=>{
      this.userList=data;
      
    })
}

}
