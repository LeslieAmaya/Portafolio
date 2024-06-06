import { Component, Inject, inject } from '@angular/core';
import { ContactoService } from './contacto.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  nombre: string = '';
  edad: number = 0;
  email: string = '';
  opinion: string = '';
  form: FormGroup

  contactoService = inject(ContactoService);
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre:[''],
      edad: [''],
      email: [''],
      opinion: ['']
    })
  }

  registrarOp() {
    this.contactoService.registrarOp(this.form.value);
  }
}


