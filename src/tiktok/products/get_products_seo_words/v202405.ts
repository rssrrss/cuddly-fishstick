import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface GetProductsSeoWordsResponseV202405 extends Response {
  data: {
    products: {
      id: string
      seo_words: {
        text: string
      }[]
    }
  }
}

export interface GetProductsSeoWordsParamV202405 extends ParamWithCipher {
  product_ids: string[]
}

export async function GetProductsSeoWordsV202405(p: GetProductsSeoWordsParamV202405): Promise<GetProductsSeoWordsResponseV202405> {
  const config: RequestParam = {
    method: "GET",
    path: `/product/202405/products/seo_words`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    }
  }

  return await SendRequest(config)
}
