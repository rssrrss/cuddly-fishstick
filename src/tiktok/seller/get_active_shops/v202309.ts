import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

export interface GetActiveShopsResponseV202309 extends BaseResponse {
  data: {
    shops: {
      id: string
      region: string
    }[]
  }
}

export interface GetActiveShopsParamv202309 extends ParamWithCipher { }

export async function GetActiveShopsV202309(p: GetActiveShopsParamv202309): Promise<GetActiveShopsResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/seller/202309/shops`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
  }

  return await SendRequest(config)
}
