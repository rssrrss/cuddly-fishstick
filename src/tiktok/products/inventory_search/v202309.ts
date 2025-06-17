import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface InventorySearchResponseV202309 extends Response {

}

export interface InventorySearchParamV202309 extends ParamWithCipher {
  product_ids?: string[]
  sku_ids?: string[]
}

export async function InventorySearchV202309(p: InventorySearchParamV202309): Promise<InventorySearchResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/product/202309/brands`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    }
  }

  return await SendRequest(config)
}
