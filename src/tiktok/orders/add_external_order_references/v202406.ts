import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

export interface AddExternalOrderReferencesResponseV202406 extends BaseResponse { }

export interface AddExternalOrderReferencesParamV202406 extends ParamWithCipher {
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

export async function AddExternalOrderReferencesV202406(p: AddExternalOrderReferencesParamV202406): Promise<AddExternalOrderReferencesResponseV202406> {
  const config: RequestParam = {
    method: "POST",
    path: `/order/202406/orders/external_orders`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      orders: p.orders
    }
  }

  return await SendRequest(config)
}
