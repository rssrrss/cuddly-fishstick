import { Lazada } from "../.."
import { SendRequest } from "../../util/send_request"

export interface AdjustSellableQuantityResponse {
  "code": string,
  "data": unknown
  "request_id": string
}

export interface AdjustSellableQuantityParam {
  access_token: string
  payload: unknown
}

export async function AdjustSellableQuantity(p: AdjustSellableQuantityParam): Promise<AdjustSellableQuantityResponse> {
  return await SendRequest({
    base_url: Lazada.Config.host,
    path: "/product/stock/sellable/adjust",
    method: "POST",
    access_token: p.access_token,
    payload: p.payload
  })
}
