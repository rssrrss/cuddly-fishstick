import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"
import { RequestParam, SendRequest } from "../../helper/send_request"

export interface RecoverProductsResponseV202309 extends Response { }

export interface RecoverProductsParamV202309 extends ParamWithCipher {
  product_ids: string[]
}

export async function RecoverProductsV202309(p: RecoverProductsParamV202309): Promise<RecoverProductsResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/product/202309/products/recover`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      product_ids: p.product_ids
    },
  }

  return await SendRequest(config)
}
