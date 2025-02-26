import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  onLogin(): void {
    const { email, password } = this.loginForm.value;
    if (this.authService.validateCredentials(email, password)) {
      Swal.fire('Inicio de sesión exitoso', 'Bienvenido al panel principal', 'success');
      this.router.navigate(['/home']);
    } else {
      Swal.fire('Error', 'Credenciales inválidas. Por favor, inténtalo de nuevo.', 'error');
    }
  }

}
