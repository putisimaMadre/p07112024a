import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AntecedentesPnoP } from '../models/antecedentes-pno-p';

@Injectable({
  providedIn: 'root'
})
export class AntecedentesPNoPService {

  private urlEndPoint = "http://localhost:8000/api/antecedentesPnoP"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})
  constructor(private httpClient: HttpClient) { }

  getAntecedentes(): Observable<AntecedentesPnoP[]>{
    return this.httpClient.get<AntecedentesPnoP[]>(this.urlEndPoint);
  }

  postAntecedentes(antecedentesPnoP: AntecedentesPnoP): Observable<AntecedentesPnoP>{
    return this.httpClient.post<AntecedentesPnoP>(this.urlEndPoint, antecedentesPnoP, {headers: this.httpHeaders})
  }
}
