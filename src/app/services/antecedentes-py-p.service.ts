import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AntecedentesPyP } from '../models/antecedentes-py-p';

@Injectable({
  providedIn: 'root'
})
export class AntecedentesPyPService {

  private urlEndPoint = "http://localhost:8000/api/antecedentesPyP"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})
  constructor(private httpClient: HttpClient) {}

  getAntecedentesPyP(): Observable<AntecedentesPyP[]>{
    return this.httpClient.get<AntecedentesPyP[]>(this.urlEndPoint);
  }

  postAntecedentePyP(AntecedentesPyP: AntecedentesPyP): Observable<AntecedentesPyP>{
    return this.httpClient.post<AntecedentesPyP>(this.urlEndPoint, AntecedentesPyP, {headers: this.httpHeaders})
  }
}
