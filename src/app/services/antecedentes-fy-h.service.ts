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
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})
  constructor(private httpClient: HttpClient) { }

  getAntecedentes(): Observable<AntecedentesFyHService[]>{
    return this.httpClient.get<AntecedentesFyHService[]>(this.urlEndPoint);
  }

  postAntecedentes(antecedentesFyH: AntecedentesFyH): Observable<AntecedentesFyH>{
    return this.httpClient.post<AntecedentesFyH>(this.urlEndPoint, antecedentesFyH, {headers: this.httpHeaders})
  }

  /*postA1(antecedentesFyH: Map<string, FormGroup<any>>): Observable<Map<string, FormGroup<any>>>{
    return this.httpClient.post<Map<string, FormGroup<any>>>(this.urlEndPoint, antecedentesFyH, {headers: this.httpHeaders})
  }*/
}
