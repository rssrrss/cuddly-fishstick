import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface ApproveReturnResponseV202309 extends Response { }

export interface ApproveReturnParamV202309 extends ParamWithCipher {
  return_id: string
  decision: 'APPROVE_REFUND' | 'APPROVE_RETURN' | 'APPROVE_RECEIVE_PACKAGE' | 'APPROVE_REPLACEMENT' | 'ISSUE_REPLACEMENT_REFUND' | 'OFFER_PARTIAL_REFUND'
  idempotency_key?: string
  buyer_keep_item?: boolean
  partial_refund?: {
    currency: string
    amount: string
  }
}

export async function ApproveReturnV202309(p: ApproveReturnParamV202309): Promise<ApproveReturnResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/return_refund/202309/returns/${p.return_id}/approve`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      idempotency_key: p.idempotency_key
    },
    data: {
      decision: p.decision,
      buyer_keep_item: p.buyer_keep_item,
      partial_refund: p.partial_refund
    }
  }

  return await SendRequest(config)
}
