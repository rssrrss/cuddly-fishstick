import { Lazada } from "../.."
import { SendRequest } from "../../util/send_request"

type CreateProductSku = {
  shop_sku: string
  seller_sku: string
  sku_id: string
}

export interface CreateProductResponse {
  code: string
  data: {
    item_id: string
    item_status: string
    sku_list: CreateProductSku[]
  }
  request_id: string
}

export interface CreateProductParam {
  access_token: string,
  payload: any
}

export async function CreateProduct(p: CreateProductParam): Promise<CreateProductResponse> {
  return await SendRequest({
    base_url: Lazada.Config.host,
    path: "/product/create",
    method: "POST",
    access_token: p.access_token,
    payload: p.payload
  })
}
