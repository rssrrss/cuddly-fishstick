import { Lazada } from "../.."
import { SendRequest } from "../../util/send_request"

export interface UpdateSellableQuantityResponse {
  "code": string,
  "data": unknown
  "request_id": string
}

export interface UpdateSellableQuantityParam {
  access_token: string
  payload: unknown
}

export async function UpdateSellableQuantity(p: UpdateSellableQuantityParam): Promise<UpdateSellableQuantityResponse> {
  return await SendRequest({
    base_url: Lazada.Config.host,
    path: "/product/stock/sellable/update",
    method: "POST",
    access_token: p.access_token,
    payload: p.payload
  })
}
