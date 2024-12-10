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
  private urlEndPointAntecedentesByIdDatosGeneralesNumber = "http://localhost:8000/api/antecedentesByIdDatosGeneralesInteger"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})
  constructor(private httpClient: HttpClient) { }

  getAntecedentes(): Observable<AntecedentesFyH[]>{
    return this.httpClient.get<AntecedentesFyH[]>(this.urlEndPoint);
  }

  getAntecedentesById(idDatosGenerales: number): Observable<AntecedentesFyH>{
    return this.httpClient.get<AntecedentesFyH>(this.urlEndPoint+'/'+idDatosGenerales);
  }

  getAntecedentesEdit(idDatosGenerales: number): Observable<AntecedentesFyH>{
    return this.httpClient.get<AntecedentesFyH>(this.urlEndPoint+'/'+idDatosGenerales+'/edit');
  }

  //Este admite un {idDatosGenerales:6}
  getAntecedentesByIdDatosGenerales(antecedentesFyH: AntecedentesFyH): Observable<AntecedentesFyH[]>{
    return this.httpClient.post<AntecedentesFyH[]>(this.urlEndPointAntecedentesByIdDatosGenerales, antecedentesFyH, {headers: this.httpHeaders})
  }

  postAntecedentes(antecedentesFyH: AntecedentesFyH): Observable<AntecedentesFyH>{
    return this.httpClient.post<AntecedentesFyH>(this.urlEndPoint, antecedentesFyH, {headers: this.httpHeaders})
  }

  updateAntecedentes(antecedentesFyH: AntecedentesFyH): Observable<AntecedentesFyH>{
    return this.httpClient.put<AntecedentesFyH>(this.urlEndPoint+'/'+antecedentesFyH.id, antecedentesFyH, {headers:this.httpHeaders})
  }
}
