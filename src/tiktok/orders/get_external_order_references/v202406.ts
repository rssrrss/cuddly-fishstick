import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'
import { ExternalPlatform } from '../type'

export interface GetExternalOrderReferencesResponseV202406 extends BaseResponse {
  data: {
    external_orders: {
      id: string
      platform: ExternalPlatform
      line_items: {
        id: string
        origin_id: string
      }[]
    }[]
  }
}

export interface GetExternalOrderReferencesParamV202406 extends ParamWithCipher {
  order_id: string
  platform: ExternalPlatform
}

export async function GetExternalOrderReferencesV202406(p: GetExternalOrderReferencesParamV202406): Promise<GetExternalOrderReferencesResponseV202406> {
  const config: RequestParam = {
    method: "GET",
    path: `/order/202406/orders/${p.order_id}/external_orders`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      platform: p.platform
    }
  }

  return await SendRequest(config)
}
