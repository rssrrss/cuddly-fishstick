import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface RejectReturnResponseV202309 extends Response { }

export interface RejectReturnParamV202309 extends ParamWithCipher {
  return_id: string
  decision: 'APPROVE_REFUND' | 'APPROVE_RETURN' | 'APPROVE_RECEIVE_PACKAGE' | 'APPROVE_REPLACEMENT' | 'ISSUE_REPLACEMENT_REFUND' | 'OFFER_PARTIAL_REFUND'
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

export async function RejectReturnV202309(p: RejectReturnParamV202309): Promise<RejectReturnResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/return_refund/202309/returns/${p.return_id}/reject`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      idempotency_key: p.idempotency_key
    },
    data: {
      decision: p.decision,
      reject_reason: p.reject_reason,
      comment: p.comment,
      images: p.images
    }
  }

  return await SendRequest(config)
}
