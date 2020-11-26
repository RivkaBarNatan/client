import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GeoCode } from '../Models/geo-code-result';

@Injectable({
  providedIn: 'root'
})
export class CoordinationService {

  constructor(private http: HttpClient) { }

  getCoordination(address):Observable<GeoCode>
  {
    return this.http.get<GeoCode>("http://localhost:8080/GetGeocode?address="+ address);
  }

  addToDB(data)
  {
    this.http.post("http://localhost:8080/PostGeoCode?data=", data);
  }
}
