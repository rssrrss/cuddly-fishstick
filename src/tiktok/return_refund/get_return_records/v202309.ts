import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface GetReturnRecordsResponseV202309 extends Response {
  data: {
    records: {
      event: 'ORDER_RETURN'
      role: 'BUYER' | 'SELLER' | 'SYSTEM'
      description: string
      reason_text: string
      note: string
      images: {
        url: string
        width: number
        height: number
      }[]
      videos: {
        url: string
        cover: string
        width: number
        height: number
        duration: number
      }[]
      create_time: number
    }
  }
}

export interface GetReturnRecordParamV202309 extends ParamWithCipher {
  return_id: string
  locale?: string
}

export async function GetReturnRecordsV202309(p: GetReturnRecordParamV202309): Promise<GetReturnRecordsResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/return_refund/202309/returns/${p.return_id}/records`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      locale: p.locale
    },
  }

  return await SendRequest(config)
}
