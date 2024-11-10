import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashFormComponent } from '../dash-form/dash-form.component';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

}
