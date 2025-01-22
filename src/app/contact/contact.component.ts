import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = this.fb.group({
    name: [''],
    email: ['', Validators.required],
    message: ['', Validators.required],
  });

  message = '';

  constructor(private fb: FormBuilder) {}

  addMessage() {
    console.log("Add implementaion to store messages.");
  }
}
