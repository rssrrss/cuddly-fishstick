import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export type ReturnType = 'REFUND' | 'RETURN_AND_REFUND' | 'REPLACEMENT'
export type ReturnStatus = 'RETURN_OR_REFUND_REQUEST_PENDING' | 'REFUND_RETURN_REQUEST_REJECT' | 'AWAITING_BUYER_SHIP' | 'BUYER_SHIPPED_ITEM' | 'REJECT_RECEIVE_PACKAGE' | 'RETURN_OR_REFUND_REQUEST_SUCCESS' | 'RETURN_OR_REFUND_REQUEST_CANCEL' | 'RETURN_OR_REFUND_REQUEST_COMPLETE' | 'AWAITING_BUYER_RESPONSE'
export type SellerProposedReturnType = 'PARTIAL_REFUND'
export type ArbitrationStatus = 'IN_PROGRESS' | 'SUPPORT_BUYER' | 'SUPPORT_SELLER' | 'CLOSED'

export interface CancelOrderResponseV202309 extends Response {
  data: {
    cancel_id: string
    cancel_status: 'CANCELLATION_REQUEST_PENDING' | 'CANCELLATION_REQUEST_SUCCESS' | 'CANCELLATION_REQUEST_CANCEL' | 'CANCELLATION_REQUEST_COMPLETE'
  }
}

export interface CancelOrderParamV202309 extends ParamWithCipher {
  order_id: string
  cancel_reason: string
  order_line_item_ids?: string[]
  skus?: {
    sku_id: string
    quantity: string
  }[]
}

export async function CancelOrderV202309(p: CancelOrderParamV202309): Promise<CancelOrderResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/return_refund/202309/cancellations`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      order_id: p.order_id,
      cancel_reason: p.cancel_reason,
      order_line_item_ids: p.order_line_item_ids,
      skus: p.skus,
    }
  }

  return await SendRequest(config)
}
