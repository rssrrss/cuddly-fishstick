import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

export interface GetSellerPermissionsResponseV202309 extends BaseResponse {
  data: {
    permissions: string[]
  }
}

export interface GetSellerPermissionsParamV202309 extends ParamWithCipher { }

export async function GetSellerPermissionsV202309(p: GetSellerPermissionsParamV202309): Promise<GetSellerPermissionsResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/event/202309/permissions`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
  }

  return await SendRequest(config)
}
