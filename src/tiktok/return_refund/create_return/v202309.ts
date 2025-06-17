import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface CreateReturnResponseV202309 extends Response {
  data: {
    return_id: string
    return_status: 'RETURN_OR_REFUND_REQUEST_PENDING' | 'REFUND_OR_RETURN_REQUEST_REJECT' | 'AWAITING_BUYER_SHIP' | 'BUYER_SHIPPED_ITEM' | 'REJECT_RECEIVE_PACKAGE' | 'RETURN_OR_REFUND_REQUEST_SUCCESS' | 'RETURN_OR_REFUND_REQUEST_CANCEL' | 'RETURN_OR_REFUND_REQUEST_COMPLETE'
  }
}

export interface CreateReturnParamV202309 extends ParamWithCipher {
  order_id: string
  return_reason: string
  return_type: 'REFUND' | 'RETURN_AND_REFUND'
  idempotency_key?: string
  skus?: {
    sku_id: string,
    quantity: string
  }[]
  order_line_item_ids: string[]
  refund_total: string
  currency: string
  shipment_type: 'PLATFORM' | 'BUYER_ARRANGE'
  handover_method: 'DROP_OFF' | 'PICKUP'
}

export async function CreateReturnV202309(p: CreateReturnParamV202309): Promise<CreateReturnResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/return_refund/202309/returns`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      idempotency_key: p.idempotency_key,
    },
    data: {
      order_id: p.order_id,
      skus: p.skus,
      order_line_item_ids: p.order_line_item_ids,
      return_reason: p.return_reason,
      return_type: p.return_type,
      refund_total: p.refund_total,
      currency: p.currency,
      shipment_type: p.shipment_type,
      handover_method: p.handover_method
    }
  }

  return await SendRequest(config)
}
