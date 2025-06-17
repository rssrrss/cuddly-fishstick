import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'
import { EventType } from '../type'

export interface DeleteShopWebhookResponseV202309 extends BaseResponse { }

export interface DeleteShopWebhookParamV202309 extends ParamWithCipher {
  event_type: EventType
}

export async function DeleteShopWebhookV202309(p: DeleteShopWebhookParamV202309): Promise<DeleteShopWebhookResponseV202309> {
  const config: RequestParam = {
    method: "PUT",
    path: `/event/202309/webhooks`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      event_type: p.event_type
    }
  }

  return await SendRequest(config)
}
