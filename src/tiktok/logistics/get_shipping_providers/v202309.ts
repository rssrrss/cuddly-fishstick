import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

export interface GetShippingProvidersResponseV202309 extends BaseResponse {
  data: {
    shipping_provicers: {
      id: string
      name: string
    }[]
  }
}

export interface GetShippingProvidersParamV202309 extends ParamWithCipher {
  delivery_option_id: string
}

export async function GetShippingProvidersV202309(p: GetShippingProvidersParamV202309): Promise<GetShippingProvidersResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/logistics/202309/delivery_options/${p.delivery_option_id}/shipping_providers`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
  }

  return await SendRequest(config)
}
