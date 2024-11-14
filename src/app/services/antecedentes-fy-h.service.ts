import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  postAntecedentes(antecedentesFyH: AntecedentesFyHService): Observable<AntecedentesFyHService>{
    return this.httpClient.post<AntecedentesFyHService>(this.urlEndPoint, antecedentesFyH, {headers: this.httpHeaders})
  }
}
