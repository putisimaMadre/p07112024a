import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AntecedentesFyH } from '../models/antecedentes-fy-h';

@Injectable({
  providedIn: 'root'
})
export class AntecedentesFyHService {

  private urlEndPoint = "http://localhost:8000/api/antecedentesFyH"
  private urlEndPointAntecedentesByIdDatosGenerales = "http://localhost:8000/api/antecedentesByIdDatosGenerales"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})
  constructor(private httpClient: HttpClient) { }

  getAntecedentes(): Observable<AntecedentesFyH[]>{
    return this.httpClient.get<AntecedentesFyH[]>(this.urlEndPoint);
  }

  getAntecedentesById(idDatosGenerales: number): Observable<AntecedentesFyH>{
    return this.httpClient.get<AntecedentesFyH>(this.urlEndPoint+'/'+idDatosGenerales);
  }

  getAntecedentesByIdDatosGenerales(antecedentesFyH: AntecedentesFyH): Observable<AntecedentesFyH[]>{
    return this.httpClient.post<AntecedentesFyH[]>(this.urlEndPointAntecedentesByIdDatosGenerales, antecedentesFyH, {headers: this.httpHeaders})
  }

  postAntecedentes(antecedentesFyH: AntecedentesFyH): Observable<AntecedentesFyH>{
    return this.httpClient.post<AntecedentesFyH>(this.urlEndPoint, antecedentesFyH, {headers: this.httpHeaders})
  }
}
