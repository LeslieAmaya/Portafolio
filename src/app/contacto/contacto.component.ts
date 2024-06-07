import { Component, Inject, inject } from '@angular/core';
import { ContactoService } from './contacto.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  edad: number | null = null;
  email: string = '';
  opinion: string = '';

  contactoService = inject(ContactoService);
  constructor(private http: HttpClient) {

  }

  registrarOp() {
    console.log("hola c:")
    const regOp = {
      nombre: this.nombre,
      edad: this.edad,
      email: this.email,
      opinion: this.opinion
    };
    this.http.post('https://apiportafolio-k678.onrender.com/api', regOp)
      .subscribe(response => {
        console.log('Opinion registrada', response)
      });
  }
}


