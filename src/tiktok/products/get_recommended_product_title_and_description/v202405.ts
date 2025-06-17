import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface GetRecommendedProductTitleAndDescriptionResponseV202405 extends Response {
  data: {
    id: string
    suggestions: {
      field: string
      items: {
        text: string
      }[]
    }[]
  }
}

export interface GetRecommendedProductTitleAndDescriptionParamV202405 extends ParamWithCipher {
  product_ids: string[]
}

export async function GetRecommendedProductTitleAndDescriptionV202405(p: GetRecommendedProductTitleAndDescriptionParamV202405): Promise<GetRecommendedProductTitleAndDescriptionResponseV202405> {
  const config: RequestParam = {
    method: "GET",
    path: `/product/202405/products/suggestions`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    }
  }

  return await SendRequest(config)
}
