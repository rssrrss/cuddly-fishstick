import { Lazada } from "../..";
import { SendRequest } from "../../util/send_request";

export interface RemoveProductResponse {

}

export interface RemoveProductParam {
  access_token: string,
  sku_id_list?: string,
  seller_sku_list?: string
}

export async function RemoveProduct(p: RemoveProductParam): Promise<RemoveProductResponse> {
  const params: Record<string, string> = {}
  if (p.seller_sku_list) {
    params.seller_sku_list = p.seller_sku_list
  }

  if (p.sku_id_list) {
    params.sku_id_list = p.sku_id_list
  }

  return await SendRequest({
    base_url: Lazada.Config.host,
    path: "/product/remove",
    method: "POST",
    access_token: p.access_token,
    params: params,
  })
}
