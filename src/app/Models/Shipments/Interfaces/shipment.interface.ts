import { shipmentDetail } from "./shipmentDetail.interface";

export interface Shipment {
    id?: number;
    created_at: Date;
    details: shipmentDetail
}