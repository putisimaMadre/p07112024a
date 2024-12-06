import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PadecimientosA } from '../models/padecimientos-a';

@Injectable({
  providedIn: 'root'
})
export class PadecimientosAService {

  private urlEndPoint = "http://localhost:8000/api/padecimientosActuales"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})
  constructor(private httpClient: HttpClient) { }

  getPadecimientos(): Observable<PadecimientosA[]>{
    return this.httpClient.get<PadecimientosA[]>(this.urlEndPoint);
  }

  getPadecimientosById(idDatosGenerales: number): Observable<PadecimientosA>{
    return this.httpClient.get<PadecimientosA>(this.urlEndPoint+'/'+idDatosGenerales);
  }

  getPadecimientosEdit(idDatosGenerales: number): Observable<PadecimientosA>{
    return this.httpClient.get<PadecimientosA>(this.urlEndPoint+'/'+idDatosGenerales+'/edit');
  }

  postPadecimientos(padecimientosA: PadecimientosA): Observable<PadecimientosA>{
    return this.httpClient.post<PadecimientosA>(this.urlEndPoint, padecimientosA, {headers: this.httpHeaders})
  }
}
