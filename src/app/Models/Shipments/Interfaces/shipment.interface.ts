import { shipmentDetail } from "./shipmentDetail.interface";

export interface Shipment {
    id?: number;
    createdAt: Date;
    detail: shipmentDetail
}