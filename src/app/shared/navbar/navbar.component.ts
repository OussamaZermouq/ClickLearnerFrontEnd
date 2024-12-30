import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  checked: boolean = true;
  
  toggleSwitchDarkMode(){
    const element = document.querySelector('html');
    if (element){
      element.classList.toggle('my-app-dark');
    }
  }
  //should be a better way to do this -_-
  ngOnInit(){
    const element = document.querySelector('html');
    if (element){
      element.classList.toggle('my-app-dark');
    }
  }

}
