import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface SearchCancellationsResponseV202309 extends Response {
  data: {
    cancellations: {
      order_id: string
      cancel_type: string
      cancel_status: string
      role: string
      cancel_reason: string
      cancel_reason_text: string
      create_time: number
      update_time: number
      seller_next_action_response: {
        action: string
        deadline: number
      }[]
      refund_amount: {
        currency: string
        refund_total: string
        refund_subtotal: string
        refund_shipping_fee: string
        refund_tax: string
        retail_delivery_fee: string
        buyer_service_fee: string
      }
      cancel_line_items: {
        cancel_line_item_id: string
        order_line_item_id: string
        sku_name: string
        product_image: {
          url: string
          width: number
          height: number
        }
        product_name: string
        seller_sku: string
        refund_amount: {
          currency: string
          refund_total: string
          refund_subtotal: string
          refund_shipping_fee: string
          refund_tax: string
          retail_delivery_fee: string
          buyer_service_fee: string
        }
      }[]
      cancel_id: string
    }[]
    total_count: number
    next_page_token: string
  }
}

export type CANCEL_TYPES = 'CANCEL' | 'BUYER_CANCEL'
export type CANCEL_STATUS = 'CANCELLATION_REQUEST_PENDING' | 'CANCELLATION_REQUEST_SUCCESS' | 'CANCELLATION_REQUEST_CANCEL' | 'CANCELLATION_REQUEST_COMPLETE'

export interface SearchCancellationsParamV202309 extends ParamWithCipher {
  cancel_ids?: string[]
  order_ids?: string[]
  buyer_user_ids?: string[]
  cancel_types?: CANCEL_TYPES[]
  cancel_status?: CANCEL_STATUS[]
  sort_field?: string
  sort_order?: string
  page_size?: string
  page_token?: string
  create_time_ge?: number
  create_time_lt?: number
  locale?: string
}

export async function SearchCancellationsV202309(p: SearchCancellationsParamV202309): Promise<SearchCancellationsResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/return_refund/202309/cancellations/search`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      sort_field: p.sort_field,
      sort_order: p.sort_order,
      page_size: p.page_size,
      page_token: p.page_token
    },
    data: {
      cancel_ids: p.cancel_ids,
      order_ids: p.order_ids,
      buyer_user_ids: p.order_ids,
      cancel_types: p.cancel_types,
      cancel_status: p.cancel_status,
      create_time_ge: p.create_time_ge,
      create_time_le: p.create_time_lt,
      locale: p.locale
    }
  }

  return await SendRequest(config)
}
