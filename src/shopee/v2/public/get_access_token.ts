import { Shopee } from "../.."
import { Response } from "../type"
import { SendRequest, SendRequestParam } from "../util/send_request"

export interface GetAccessTokenParam {
    code: string,
    shop_id: string
}

export interface GetAccessTokenResponse extends Response { 
    shop_id_list: string[],
    access_token: string,
    refresh_token: string,
    expire_in: number
}

export async function GetAccessToken(p: GetAccessTokenParam): Promise<GetAccessTokenResponse> {
    const param: SendRequestParam = {
        method: "POST",
        path: "/api/v2/auth/token/get",
        data: {
            partner_id: Shopee.V2.config.partner_id,
            code: p.code
        }
    }

    return await SendRequest(param)
}
