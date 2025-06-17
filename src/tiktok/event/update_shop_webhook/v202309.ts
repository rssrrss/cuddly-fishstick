import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'
import { EventType } from '../type'

export interface UpdateShopWebhookResponseV202309 extends BaseResponse { }

export interface UpdateShopWebhookParamV202309 extends ParamWithCipher {
  address: string
  event_type: EventType
}

export async function UpdateShopWebhookV202309(p: UpdateShopWebhookParamV202309): Promise<UpdateShopWebhookResponseV202309> {
  const config: RequestParam = {
    method: "PUT",
    path: `/event/202309/webhooks`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      address: p.address,
      event_type: p.event_type
    }
  }

  return await SendRequest(config)
}
