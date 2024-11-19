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
  openNav(): void {
    const sidebar = document.getElementById("mySidebar") as HTMLElement;
    const mainContent = document.getElementById("main") as HTMLElement;
  
    if (sidebar && mainContent) {
      sidebar.style.width = "250px";
      mainContent.style.marginLeft = "250px";
    }
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
   closeNav(): void {
    const sidebar = document.getElementById("mySidebar") as HTMLElement;
    const mainContent = document.getElementById("main") as HTMLElement;
  
    if (sidebar && mainContent) {
      sidebar.style.width = "0";
      mainContent.style.marginLeft = "0";
    }
  }
}