import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvaluacionClinica } from '../models/evaluacion-clinica';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionClinicaService {
  private urlEndPoint = "http://localhost:8000/api/evaluacionClinica"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})

  constructor(private httpClient: HttpClient) { }

  getEvaluacionClinica(): Observable<EvaluacionClinica[]>{
    return this.httpClient.get<EvaluacionClinica[]>(this.urlEndPoint);
  }

  postEvaluacionClinica(evaluacionClinica: EvaluacionClinica): Observable<EvaluacionClinica>{
    return this.httpClient.post<EvaluacionClinica>(this.urlEndPoint, evaluacionClinica, {headers: this.httpHeaders})
  }
}
