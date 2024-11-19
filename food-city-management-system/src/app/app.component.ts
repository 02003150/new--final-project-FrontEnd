import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashFormComponent } from './dash-form/dash-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { OderFormComponent } from './oder-form/oder-form.component';
import { ManageUsersFormComponent } from './manage-users-form/manage-users-form.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutPageComponent } from "./about-page/about-page.component";
import { CustomerFormComponent } from "./customer-form/customer-form.component";
import { HomePageFormComponent } from './home-page-form/home-page-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-city-management-system';
}
