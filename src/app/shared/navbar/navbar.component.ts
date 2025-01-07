import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MegaMenuItem } from 'primeng/api';
import { Router } from '@angular/router';

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
  constructor(private router:Router){

  }
  //should be a better way to do this -_-
  ngOnInit(){
    const element = document.querySelector('html');
    if (element){
      element.classList.toggle('my-app-dark');
    }
  }

}
