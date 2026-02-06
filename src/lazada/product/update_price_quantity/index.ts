import { Lazada } from "../..";
import { SendRequest } from "../../util/send_request";

export interface UpdatePriceQuantityResponse {
    code: string
    request_id: string
    data: unknown
}

export interface UpdatePriceQuantityParam {
    access_token: string,
    payload: unknown
}

export async function UpdatePriceQuantity(p: UpdatePriceQuantityParam): Promise<UpdatePriceQuantityResponse> {
    return await SendRequest({
        base_url: Lazada.Config.host,
        path: "/product/price_quantity/update",
        method: "POST",
        access_token: p.access_token,
        payload: p.payload
    })
}
