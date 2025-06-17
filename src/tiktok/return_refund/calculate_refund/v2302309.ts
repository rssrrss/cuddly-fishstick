import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"
import { CancelOrderResponseV202309 } from "../cancel_order/v202309"

export interface CalculateRefundResponseV202309 extends Response {
  data: {
    order_refund_amount: {
      currency: string,
      refund_total: string,
      refund_subtotal: string,
      refund_shipping_fee: string,
      refund_tax: string,
      retail_delivery_fee: string
    }
  }
}

export interface CalculateRefundParamV202309 extends ParamWithCipher {
  order_id: string
  request_type: 'CANCEL' | 'REFUND' | 'RETURN_AND_REFUND'
  reason_name: string
  shipment_type?: string
  handover_method?: string
  orderLine_item_ids?: string[]
  skus?: {
    sku_id: string
    quantity: number
  }[]
}

export async function CalculateRefundV2302309(p: CalculateRefundParamV202309): Promise<CalculateRefundResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/return_refund/202309/refunds/calculate`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      order_id: p.order_id,
      request_type: p.request_type,
      shipment_type: p.shipment_type,
      handover_method: p.handover_method,
      reason_name: p.reason_name,
      order_line_item_ids: p.orderLine_item_ids,
      skus: p.skus
    }
  }

  return await SendRequest(config)
}
