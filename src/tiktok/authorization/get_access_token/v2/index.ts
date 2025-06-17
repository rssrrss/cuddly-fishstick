import { Response as BaseResponse } from '../../../type/response'
import { BaseParam } from '../../../type/param'
import { RequestParam, SendRequest } from '../../../helper/send_request'
import { AuthURL } from '../../../type/var'

type GrandType = "authorized_code"

export interface GetAccessTokenResponseV2 extends BaseResponse {
  data: {
    access_token: string
    access_token_expire_in: number
    refresh_token: string
    refresh_token_expire_in: number
    open_id: string
    seller_name: string
    seller_base_region: string
    user_type: number
    granted_scopes: string[]
  }
}

export interface GetAccessTokenParamV2 extends BaseParam {
  authCode: string,
  grantType: GrandType
}

export async function GetAccessTokenV2(p: GetAccessTokenParamV2): Promise<GetAccessTokenResponseV2> {
  const config: RequestParam = {
    method: "GET",
    path: "/api/v2/token/get",
    isSigned: false,
    params: {
      auth_code: p.authCode,
      grant_type: p.grantType,
    },
    host: AuthURL
  }

  console.log(config)

  return await SendRequest(config)
}
