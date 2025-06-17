import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface GetRejectReasonsResponseV202309 extends Response {
  data: {
    reasons: {
      name: string,
      text: string
    }[]
  }
}

export interface GetRejectReasonsParamV202309 extends ParamWithCipher {
  return_or_cancel_id: string
  locale?: string
}

export async function GetRejectReasonsV202309(p: GetRejectReasonsParamV202309): Promise<GetRejectReasonsResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/return_refund/202309/reject_reasons`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      return_or_cancel_id: p.return_or_cancel_id,
      locale: p.locale
    },
  }

  return await SendRequest(config)
}
