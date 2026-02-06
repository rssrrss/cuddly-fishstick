import { Lazada } from "../.."
import { SendRequest, SendRequestParam } from "../../util/send_request"

export interface GenerateAccessTokenResponse {
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

export interface GenerateAccessTokenParam {
  code: string
}

export async function GenerateAccessToken(p: GenerateAccessTokenParam): Promise<GenerateAccessTokenResponse> {
  const param: SendRequestParam = {
    method: "GET",
    base_url: Lazada.Config.auth_host,
    path: "/auth/token/create",
    params: {
      code: p.code
    }
  }

  return await SendRequest(param)
}
