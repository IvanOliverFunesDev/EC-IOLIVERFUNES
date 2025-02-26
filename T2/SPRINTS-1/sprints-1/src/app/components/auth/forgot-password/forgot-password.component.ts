import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [NgIf, NgClass, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  message: string | null = null;
  success: boolean = false;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get emailControl() {
    return this.forgotPasswordForm.get('email');
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;

      setTimeout(() => {
        if (email === '4dA1Ts_2425@gmail.com') {
          this.success = true;
          this.message = 'Se ha enviado un enlace de recuperación a tu correo.';
          console.log('Enviando solicitud de recuperación para:', email);

        } else {
          this.success = false;
          this.message = 'El correo no está registrado.';

        }
      }, 1000);
    }
  }

  goToLogin() {
    console.log('Redirigiendo al inicio de sesión...');

  }
}
