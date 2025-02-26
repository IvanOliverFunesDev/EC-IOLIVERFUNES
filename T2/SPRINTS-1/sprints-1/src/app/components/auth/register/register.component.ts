import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
        ],
      ],
      confirmPassword: ['', Validators.required],
    }, {
      validators: this.passwordsMatchValidator
    });
  }

  private passwordsMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const { username, email } = this.registerForm.value;

      // Simular un error de duplicidad o éxito
      const isDuplicate = username === 'existingUser' || email === 'existing@email.com';
      if (isDuplicate) {
        Swal.fire('Error', 'El usuario o correo ya existe. Intenta con otro.', 'error');
      } else {
        Swal.fire('Registro Exitoso', 'Tu cuenta ha sido creada. Ahora inicia sesión.', 'success');
        this.router.navigate(['']);
      }
    } else {
      Swal.fire('Error', 'Por favor, completa el formulario correctamente.', 'error');
    }
  }
}
