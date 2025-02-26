import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewpostbuttonComponent } from "../../home/newpostbutton/newpostbutton.component";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NewpostbuttonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
