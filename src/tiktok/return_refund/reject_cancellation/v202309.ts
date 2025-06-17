import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface RejectCancellationResponseV202309 extends Response { }

export interface RejectCancellationParamV202309 extends ParamWithCipher {
  cancel_id: string
  reject_reason: string
  idempotency_key?: string
  comment?: string
  images?: {
    image_id: string,
    mime_type?: string,
    height?: number,
    width?: number
  }[]
}

export async function RejectCancellationV202309(p: RejectCancellationParamV202309): Promise<RejectCancellationResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/return_refund/202309/cancellations/${p.cancel_id}/reject`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      idempotency_key: p.idempotency_key
    },
    data: {
      reject_reason: p.reject_reason,
      comment: p.comment,
      images: p.images
    }
  }

  return await SendRequest(config)
}
