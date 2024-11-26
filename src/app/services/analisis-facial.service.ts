import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalisisFacial } from '../models/analisis-facial';

@Injectable({
  providedIn: 'root'
})
export class AnalisisFacialService {
  private urlEndPoint = "http://localhost:8000/api/analisisFacial"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})
  
  constructor(private httpClient: HttpClient) { }

  getAnalisisFacial(): Observable<AnalisisFacial[]>{
    return this.httpClient.get<AnalisisFacial[]>(this.urlEndPoint);
  }

  postAnalisisFacial(analisisFacial: AnalisisFacial): Observable<AnalisisFacial>{
    return this.httpClient.post<AnalisisFacial>(this.urlEndPoint, analisisFacial, {headers: this.httpHeaders})
  }
}
