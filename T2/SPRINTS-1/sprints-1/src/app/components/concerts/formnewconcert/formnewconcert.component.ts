import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formnewconcert',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './formnewconcert.component.html',
  styleUrls: ['./formnewconcert.component.css']
})
export class FormnewconcertComponent {
  concertForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.concertForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', Validators.required],
      location: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    if (this.concertForm.valid) {
      console.log('Form Data:', this.concertForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}