import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"
import { ListingPlatforms } from "../type"

export interface ActivateProductsResponseV202309 extends Response { }

export interface ActivateProductsParamV202309 extends ParamWithCipher {
  product_ids: string[]
  listing_platforms?: ListingPlatforms[]
}

export async function ActivateProductsV202309(p: ActivateProductsParamV202309): Promise<ActivateProductsResponseV202309> {
  const config: RequestParam = {
    method: 'POST',
    path: `/product/202309/products/activate`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      product_ids: p.product_ids,
      listing_platforms: p.listing_platforms
    }
  }

  return await SendRequest(config)
}
