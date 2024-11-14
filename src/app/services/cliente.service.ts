import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint = "http://localhost:8000/api/cliente"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})
  constructor(private httpClient: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.urlEndPoint);
  }

  postCliente(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
  }
}
