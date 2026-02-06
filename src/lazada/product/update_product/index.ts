import { Lazada } from "../.."
import { SendRequest } from "../../util/send_request"

export interface UpdateProductResponse {
  "code": string,
  "data": unknown
  "request_id": string
}

export interface UpdateProductParam {
  access_token: string
  payload: unknown
}

export async function UpdateProduct(p: UpdateProductParam): Promise<UpdateProductResponse> {
  return await SendRequest({
    base_url: Lazada.Config.host,
    path: "/product/update",
    method: "POST",
    access_token: p.access_token,
    payload: p.payload
  })
}
