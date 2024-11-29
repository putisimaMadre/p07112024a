import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagos } from '../models/pagos';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  private urlEndPoint = "http://localhost:8000/api/pagos"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})

  constructor(private httpClient: HttpClient) { }

  getPago(): Observable<Pagos[]>{
    return this.httpClient.get<Pagos[]>(this.urlEndPoint);
  }

  postPagos(pagos: Pagos): Observable<Pagos>{
    return this.httpClient.post<Pagos>(this.urlEndPoint, pagos, {headers: this.httpHeaders})
  }
}
