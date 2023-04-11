import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Shipment } from '../Interfaces/shipment.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  
  private _baseUrl = `${environment.baseUrl}/shipments`;

  constructor(private http: HttpClient) { }

  GetAllShipments(): Observable<Shipment[]>  {
    const url = `${this._baseUrl}/all`;

    return this.http.get<Shipment[]>(url);
  }
  CreateShipment(body: Shipment): Observable<Shipment> {
    const url = `${this._baseUrl}/add`;

    return this.http.post<Shipment>(url, body);
  }
  EditShipment(body: Shipment): Observable<Shipment> {
    const url = `${this._baseUrl}/edit`;

    return this.http.put<Shipment>(url, body);
  }
  DeleteShipment(body: any): Observable<boolean>{
    const url = `${this._baseUrl}/delete`;

    return this.http.post<boolean>(url, body);
  }
  DeleteAllShipments(): Observable<boolean>{
    const url = `${this._baseUrl}/delete-all`;

    return this.http.post<boolean>(url, {});
  }
}
