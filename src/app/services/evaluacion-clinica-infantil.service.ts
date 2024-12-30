import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EvaluacionClinicaInfantil } from '../models/evaluacion-clinica-infantil';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionClinicaInfantilService {
  private urlEndPoint = "http://localhost:8000/api/evaluacionClinicaInfantil"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})

  constructor(private httpClient: HttpClient) { }

  getEvaluacionClinicaInfantil(): Observable<EvaluacionClinicaInfantil[]>{
    return this.httpClient.get<EvaluacionClinicaInfantil[]>(this.urlEndPoint);
  }

  getAnalisisFuncionalById(idDatosGenerales: number): Observable<EvaluacionClinicaInfantil>{
    return this.httpClient.get<EvaluacionClinicaInfantil>(this.urlEndPoint+'/'+idDatosGenerales);
  }
  
  getAnalisisFuncionalEdit(idDatosGenerales: number): Observable<EvaluacionClinicaInfantil>{
    return this.httpClient.get<EvaluacionClinicaInfantil>(this.urlEndPoint+'/'+idDatosGenerales+'/edit');
  }

  postEvaluacionClinicaInfantil(evaluacionClinicaInfantil: EvaluacionClinicaInfantil): Observable<EvaluacionClinicaInfantil>{
    return this.httpClient.post<EvaluacionClinicaInfantil>(this.urlEndPoint, evaluacionClinicaInfantil, {headers: this.httpHeaders})
  }

  updateEvaluacionClinicaInfantil(evaluacionClinicaInfantil: EvaluacionClinicaInfantil): Observable<EvaluacionClinicaInfantil>{
    return this.httpClient.put<EvaluacionClinicaInfantil>(this.urlEndPoint+'/'+evaluacionClinicaInfantil.id, evaluacionClinicaInfantil, {headers:this.httpHeaders})
  }
}
