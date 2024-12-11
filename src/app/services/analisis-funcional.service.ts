import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalisisFuncional } from '../models/analisis-funcional';

@Injectable({
  providedIn: 'root'
})
export class AnalisisFuncionalService {
  private urlEndPoint = "http://localhost:8000/api/analisisFuncional"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})

  constructor(private httpClient: HttpClient) { }

  getAnalisisFuncional(): Observable<AnalisisFuncional[]>{
    return this.httpClient.get<AnalisisFuncional[]>(this.urlEndPoint);
  }

  getAnalisisFuncionalById(idDatosGenerales: number): Observable<AnalisisFuncional>{
    return this.httpClient.get<AnalisisFuncional>(this.urlEndPoint+'/'+idDatosGenerales);
  }

  getAnalisisFuncionalEdit(idDatosGenerales: number): Observable<AnalisisFuncional>{
    return this.httpClient.get<AnalisisFuncional>(this.urlEndPoint+'/'+idDatosGenerales+'/edit');
  }

  postAnalisisFuncional(analisisFuncional: AnalisisFuncional): Observable<AnalisisFuncional>{
    return this.httpClient.post<AnalisisFuncional>(this.urlEndPoint, analisisFuncional, {headers: this.httpHeaders})
  }

  updateAnalisisFuncional(analisisFuncional: AnalisisFuncional): Observable<AnalisisFuncional>{
    return this.httpClient.put<AnalisisFuncional>(this.urlEndPoint+'/'+analisisFuncional.id, analisisFuncional, {headers:this.httpHeaders})
  }
}
