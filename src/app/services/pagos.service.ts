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
  RequiredRefresh: any;

  constructor(private httpClient: HttpClient) { }

  getPago(): Observable<Pagos[]>{
    return this.httpClient.get<Pagos[]>(this.urlEndPoint);
  }

  getPagoById(idDatosGenerales: number): Observable<Pagos>{
    return this.httpClient.get<Pagos>(this.urlEndPoint+'/'+idDatosGenerales);
  }
  
  getPagoEdit(idDatosGenerales: number): Observable<Pagos>{
    return this.httpClient.get<Pagos>(this.urlEndPoint+'/'+idDatosGenerales+'/edit');
  }

  postPagos(pagos: Pagos): Observable<Pagos>{
    return this.httpClient.post<Pagos>(this.urlEndPoint, pagos, {headers: this.httpHeaders})
  }

  updateEvaluacionClinica(evaluacionClinica: Pagos): Observable<Pagos>{
    return this.httpClient.put<Pagos>(this.urlEndPoint+'/'+evaluacionClinica.id, evaluacionClinica, {headers:this.httpHeaders})
  }
}
