import { Lazada } from "../..";
import { SendRequest } from "../../util/send_request";

export interface RemoveSkuResponse {
  code: string
  request_id: string
  data: unknown
}

export interface RemoveSkuParam {
  access_token: string
  payload: unknown
}

export async function RemoveSku(p: RemoveSkuParam): Promise<RemoveSkuResponse> {
  return await SendRequest({
    base_url: Lazada.Config.host,
    path: "/product/sku/remove",
    method: "POST",
    access_token: p.access_token,
    payload: p.payload
  })
}
