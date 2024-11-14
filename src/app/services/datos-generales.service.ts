import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosGenerales } from '../models/datos-generales';

@Injectable({
  providedIn: 'root'
})
export class DatosGeneralesService {
  private urlEndPoint = "http://localhost:8000/api/datosGenerales"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})

  constructor(private httpClient: HttpClient) { }

  getDatosGenerales(): Observable<DatosGenerales[]>{
    return this.httpClient.get<DatosGenerales[]>(this.urlEndPoint);
  }

  postDatosGenerales(datosGenerales: DatosGenerales): Observable<DatosGenerales>{
    return this.httpClient.post<DatosGenerales>(this.urlEndPoint, datosGenerales, {headers: this.httpHeaders})
  }
}
