import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosGenerales } from '../models/datos-generales';
import { Observable } from 'rxjs';
import { ConsentimientoInformado } from '../models/consentimiento-informado';

@Injectable({
  providedIn: 'root'
})
export class ConsentimientoInformadoService {

  private urlEndPoint = "http://localhost:8000/api/consentimientoInformado"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})
  constructor(private httpClient: HttpClient) { }

  getConsentimientoInformado(): Observable<ConsentimientoInformado[]>{
    return this.httpClient.get<ConsentimientoInformado[]>(this.urlEndPoint);
  }

  postConsentimientoInformado(consentimientoInformado: ConsentimientoInformado): Observable<ConsentimientoInformado>{
    return this.httpClient.post<ConsentimientoInformado>(this.urlEndPoint, consentimientoInformado, {headers: this.httpHeaders})
  }
}
