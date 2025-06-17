import { BaseParam } from '../../../type/param'
import { Response as BaseResponse } from '../../../type/response'
import { RequestParam, SendRequest } from '../../../helper/send_request'
import { AuthURL } from '../../../type/var'

export interface RefreshTokenResponseV2 extends BaseResponse {
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

export interface RefreshTokenParamV2 extends BaseParam {
  refreshToken: string,
  grantType: string, // refresh_token
}

export async function RefreshTokenV2(p: RefreshTokenParamV2): Promise<RefreshTokenResponseV2> {
  const config: RequestParam = {
    method: "GET",
    path: `/api/v2/token/refresh`,
    isSigned: false,
    params: {
      refresh_token: p.refreshToken,
      grant_type: p.grantType
    },
    host: AuthURL
  }

  return await SendRequest(config)
}
