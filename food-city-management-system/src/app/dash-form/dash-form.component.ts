import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { OderFormComponent } from '../oder-form/oder-form.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dash-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dash-form.component.html',
  styleUrl: './dash-form.component.css'
})
export class DashFormComponent {

}