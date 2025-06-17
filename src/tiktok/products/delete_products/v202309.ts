import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface DeleteProductsResponseV202309 extends Response {
}

export interface DeleteProductsParamV202309 extends ParamWithCipher {
  product_ids: string[]
}

export async function DeleteProductsV202309(p: DeleteProductsParamV202309): Promise<DeleteProductsResponseV202309> {
  const config: RequestParam = {
    method: "DELETE",
    path: `/product/202309/products`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      product_ids: p.product_ids
    }
  }

  return await SendRequest(config)
}
