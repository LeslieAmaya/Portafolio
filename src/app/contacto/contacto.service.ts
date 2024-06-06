import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  api = "https://apiportafolio-0v2l.onrender.com";

  constructor(private http: HttpClient) { }

  registrarOp(data:any): Observable<any> {
    return this.http.post<any>(this.api, data);
  }
}
