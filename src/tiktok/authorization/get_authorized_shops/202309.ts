import { Response as BaseResponse } from '../../type/response'
import { ParamWithToken } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

interface Shop {
  id: string
  name: string
  region: string
  seller_type: string
  cipher: string
  code: string
}

export interface GetAuthorizedResponseV202309 extends BaseResponse {
  data: {
    shops: Shop[]
  }
}

export interface GetAuthorizedShopParamV202309 extends ParamWithToken {
}

export async function GetAuthorizedShopV202309(p: GetAuthorizedShopParamV202309): Promise<GetAuthorizedResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/authorization/202309/shops`,
    accessToken: p.accessToken,
  }

  return await SendRequest(config)
}
