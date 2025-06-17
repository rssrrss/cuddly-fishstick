import { Shopee } from "../.."
import { Response } from "../type"
import { SendRequest, SendRequestParam } from "../util/send_request"

export interface RefreshAccessTokenParam {
    refresh_token: string,
    shop_id: string
}

export interface RefreshAccessTokenResponse extends Response { }

export async function RefreshAccessToken(p: RefreshAccessTokenParam): Promise<RefreshAccessTokenResponse> {
    const param: SendRequestParam = {
        method: "POST",
        path: "/api/v2/auth/access_token/get",
        data: {
            partner_id: Shopee.V2.config.partner_id,
            refresh_token: p.refresh_token
        }
    }

    return await SendRequest(param)
}
