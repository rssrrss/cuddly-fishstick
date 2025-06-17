import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'
import { EventType } from '../type'

export interface GetShopWebhooksResponseV202309 extends BaseResponse {
  data: {
    total_count: number
    webhooks: {
      event_type: EventType
      address: string
      create_time: number
      update_time: number
    }[]
  }
}

export interface GetShopWebhooksParamV202309 extends ParamWithCipher { }

export async function GetShopWebhooksV202309(p: GetShopWebhooksParamV202309): Promise<GetShopWebhooksResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/event/202309/webhooks`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
  }

  return await SendRequest(config)
}
