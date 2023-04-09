import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Shipment } from '../Interfaces/shipment.interface';
import { ShipmentResponse } from '../Interfaces/shipmentResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  
  private _baseUrl = `${environment.baseUrl}/shipments`;

  constructor(private http: HttpClient) { }

  getShipments(): Observable<Shipment[]>  {
    const url = `${this._baseUrl}/all`;

    return this.http.get<Shipment[]>(url);
  }
}
