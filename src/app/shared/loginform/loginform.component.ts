import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  standalone: false,
  
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe((data)=>{
      if (data){
        localStorage.setItem("userId", data.toString());
        this.router.navigate(['/home']);
      }
    })
  }

  constructor(private authService:AuthService, private router:Router) { 
    
  }
}
