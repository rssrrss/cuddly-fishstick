import { Lazada } from "../.."
import { SendRequest, SendRequestParam } from "../../util/send_request"

export interface RefreshAccessTokenResponse {
  access_token: string
  refresh_token: string
  account: string
  country: string
  country_user_info: {
    country: string
    user_id: string
    seller_id: string
    short_code: string
  }[],
  account_id: string
  account_platform: 'seller_center'
  expires_in: string
  refresh_expires_in: string
  code: string
  request_id: string
}

export interface RefreshAccessTokenParam {
  refresh_token: string
}

export async function RefreshAccessToken(p: RefreshAccessTokenParam): Promise<RefreshAccessTokenResponse> {
  const param: SendRequestParam = {
    method: "GET",
    base_url: Lazada.Config.auth_host,
    path: "/auth/token/refresh",
    params: {
      refresh_token: p.refresh_token
    }
  }

  return await SendRequest(param)
}
