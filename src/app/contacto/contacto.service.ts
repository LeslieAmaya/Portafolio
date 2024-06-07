import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  api = "localhost:3000";

  constructor(private http: HttpClient) { }

  registrarOp(data: any): void {
    this.http.post<any>(this.api, data).subscribe(response => {
        // Maneja la respuesta aquí
        console.log(response.data);
    }, error => {
        // Maneja el error aquí
    });
}

}
