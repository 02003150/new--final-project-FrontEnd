import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form.component';
import { DashFormComponent } from '../dash-form/dash-form.component';
import { HomePageComponent } from "../home-page/home-page.component";
import { ManageUsersFormComponent } from '../manage-users-form/manage-users-form.component';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [RouterOutlet, DashFormComponent, HomePageComponent,UserFormComponent],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

}
