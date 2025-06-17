import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"
import { ListingPlatforms } from "../type"

export interface DeactivateProductsResponseV202309 extends Response { }

export interface DeactivateProductsParamV202309 extends ParamWithCipher {
  product_ids: string[]
  listing_platforms?: ListingPlatforms[]
}

export async function DeactivateProductsV202309(p: DeactivateProductsParamV202309): Promise<DeactivateProductsResponseV202309> {
  const config: RequestParam = {
    method: 'POST',
    path: `/product/202309/products/deactivate`,
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
