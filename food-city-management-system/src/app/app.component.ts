import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashFormComponent } from './dash-form/dash-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { OderFormComponent } from './oder-form/oder-form.component';
import { ManageUsersFormComponent } from './manage-users-form/manage-users-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomePageComponent,LoginFormComponent,DashFormComponent,UserFormComponent,OderFormComponent,ManageUsersFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-city-management-system';
}
