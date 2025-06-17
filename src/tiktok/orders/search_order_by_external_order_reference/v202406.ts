import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'
import { ExternalPlatform } from '../type'

export interface SearchOrderByExternalOrderReferenceResponseV202406 extends BaseResponse {
  data: {
    orders: {
      id: string
      external_order: {
        id: string
        platform: string
        line_items: {
          id: string
          origin_id: string
        }[]
      }
    }[]
  }
}

export interface SearchOrderByExternalOrderReferenceParamV202406 extends ParamWithCipher {
  external_order_id: string
  platform: ExternalPlatform
}

export async function SearchOrderByExternalOrderReferenceV202406(p: SearchOrderByExternalOrderReferenceParamV202406): Promise<SearchOrderByExternalOrderReferenceResponseV202406> {
  const config: RequestParam = {
    method: "GET",
    path: `/order/v202406/orders/external_order_search`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      platform: p.platform,
      external_order_id: p.external_order_id
    },
  }

  return await SendRequest(config)
}
