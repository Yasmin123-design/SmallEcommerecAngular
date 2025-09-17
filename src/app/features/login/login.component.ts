import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import {InputFieldComponent} from '../../components/input-field/input-field.component'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , FormsModule ,ButtonComponent,InputFieldComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(){
  this.authService.login(this.email, this.password)
  .subscribe(
    response => {
      this.router.navigate(['/products']);
    },
    error => {
      this.error = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
    }
  );
}


}
