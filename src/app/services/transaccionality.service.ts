import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

import { Observable } from 'rxjs';
import { transactionalityRequest } from '../interfaces/transactionalityRequest';
import { transactionalityResponse } from '../interfaces/transactionalityResponse';

const Transaccionality=environment.API_TABLA_TRANSACCIONALIDAD_MANTENEDOR

@Injectable({
  providedIn: 'root'
})
export class TransaccionalityService {

  constructor(private http:HttpClient) {}

  transaccionalityData(trandata:transactionalityRequest):Observable<transactionalityResponse>{

    console.log("Datos transaccionalidad")
    return this.http.post<transactionalityResponse>(Transaccionality, trandata)

  }


}
