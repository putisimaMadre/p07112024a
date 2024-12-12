import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { DatosGenerales } from '../models/datos-generales';

@Injectable({
  providedIn: 'root'
})
export class DatosGeneralesService {
  private urlEndPoint = "http://localhost:8000/api/datosGenerales"
  private httpHeaders = new HttpHeaders({"Content-type":"Application/json"})

  private _refreshrequired = new Subject<void>();
  get RequiredRefresh(){
    return this._refreshrequired;
  }

  constructor(private httpClient: HttpClient) { }

  getDatosGenerales(): Observable<DatosGenerales[]>{
    return this.httpClient.get<DatosGenerales[]>(this.urlEndPoint);
  }

  getDatosGeneralesById(id: number): Observable<DatosGenerales>{
    return this.httpClient.get<DatosGenerales>(this.urlEndPoint+'/'+id);
  }

  getDatosGeneralesEdit(id: number): Observable<DatosGenerales>{
    return this.httpClient.get<DatosGenerales>(this.urlEndPoint+'/'+id+'/edit');
  }

  postDatosGenerales(datosGenerales: DatosGenerales): Observable<DatosGenerales>{
    return this.httpClient.post<DatosGenerales>(this.urlEndPoint, datosGenerales, {headers: this.httpHeaders})
  }

  updateDatosGenerales(datosGenerales: DatosGenerales): Observable<DatosGenerales>{
    return this.httpClient.put<DatosGenerales>(this.urlEndPoint+'/'+datosGenerales.id, datosGenerales, {headers:this.httpHeaders})
  }

  deleteDatosGenerales(id: any): Observable<DatosGenerales>{
    return this.httpClient.delete<DatosGenerales>(this.urlEndPoint+'/'+id)
    .pipe(
      tap(()=>{
        this.RequiredRefresh.next();
      })
    );
  }
}
