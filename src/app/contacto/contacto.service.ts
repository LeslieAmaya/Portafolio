import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  api = "https://apiportafolio-k678.onrender.com/api";

  constructor(private http: HttpClient) { }

  registrarOp(data: any): void {
    console.log(data);
    this.http.post<any>(this.api, data).subscribe(response => {
        // Maneja la respuesta aquí
        console.log(response.data);
    }, error => {
        // Maneja el error aquí
    });
}

}
