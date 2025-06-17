import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export type ReturnType = 'REFUND' | 'RETURN_AND_REFUND' | 'REPLACEMENT'
export type ReturnStatus = 'RETURN_OR_REFUND_REQUEST_PENDING' | 'REFUND_RETURN_REQUEST_REJECT' | 'AWAITING_BUYER_SHIP' | 'BUYER_SHIPPED_ITEM' | 'REJECT_RECEIVE_PACKAGE' | 'RETURN_OR_REFUND_REQUEST_SUCCESS' | 'RETURN_OR_REFUND_REQUEST_CANCEL' | 'RETURN_OR_REFUND_REQUEST_COMPLETE' | 'AWAITING_BUYER_RESPONSE'
export type SellerProposedReturnType = 'PARTIAL_REFUND'
export type ArbitrationStatus = 'IN_PROGRESS' | 'SUPPORT_BUYER' | 'SUPPORT_SELLER' | 'CLOSED'

export interface SearchReturnsResponseV202309 extends Response {
  data: {
    return_orders: {
      order_id: string,
      return_id: string,
      return_type: ReturnType,
      return_status: ReturnStatus,
      arbitration_status: ArbitrationStatus,
      role: string,
      return_reason: string,
      return_reason_text: string,
      shipment_type: string,
      handover_method: string,
      return_tracking_number: string,
      return_provider_name: string,
      pre_return_id: string,
      next_return_id: string,
      can_buyer_keep_item: boolean,
      seller_next_action_response: {
        action: string,
        deadline: number
      }[],
      create_time: number,
      return_line_items: {
        return_line_item_id: string,
        order_line_item_id: string,
        sku_id: string,
        sku_name: string,
        product_name: string,
        seller_sku: string,
        product_image: {
          url: string,
          width: number,
          height: number
        },
        refund_amount: {
          currency: string,
          refund_total: string,
          refund_subtotal: string,
          refund_shipping_fee: string,
          refund_tax: string,
          retail_delivery_fee: string,
          buyer_service_fee: string
        },
      }[],
      discount_amount: {
        currency: string,
        product_seller_discount: string,
        shipping_fee_platform_discount: string,
        product_platform_discount: string
      }[],
      shipping_fee_amount: {
        currency: string,
        seller_paid_return_shipping_fee: string,
        platform_paid_return_shipping_fee: string,
        buyer_paid_return_shipping_fee: string
      }[],
      refund_amount: {
        currency: string,
        refund_total: string,
        refund_subtotal: string,
        refund_shipping_fee: string,
        refund_tax: string,
        retail_delivery_fee: string,
        buyer_service_fee: string
      },
      return_shipping_document_type: string,
      return_method: string,
      is_combined_return: boolean,
      combined_return_id: string,
      seller_proposed_return_type: string,
      partial_refund: {
        currency: string,
        amount: string
      },
      buyer_rejected_partial_refund: boolean,
      return_warehouse_address: {
        full_address: string
      },
      total_count_number: number,
      next_page_Token: string
    }[],
    total_count: number,
    next_page_token: string
  }
}

export interface SearchReturnsParamV202309 extends ParamWithCipher {
  sort_field?: 'create_time' | 'update_time'
  sort_order?: 'ASC' | 'DESC'
  page_size?: string
  page_token?: string
  return_ids?: string[]
  order_ids?: string[]
  buyer_user_ids?: string[]
  return_types?: ReturnType[]
  return_status?: ReturnStatus[],
  seller_proposed_return_type?: SellerProposedReturnType
  create_time_ge?: number
  arbitration_status?: ArbitrationStatus[]
  update_time_ge?: number
  update_time_lt?: number
  locale?: string
  create_time_lt?: number
}

export async function SearchReturnsV202309(p: SearchReturnsParamV202309): Promise<SearchReturnsResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/return_refund/202309/returns/search`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      sort_field: p.sort_field,
      sort_order: p.sort_order,
      page_size: p.page_size,
      page_token: p.page_token
    },
    data: {
      return_ids: p.return_ids,
      order_ids: p.order_ids,
      buyer_user_ids: p.buyer_user_ids,
      return_types: p.return_types,
      return_status: p.return_status,
      seller_proposed_return_type: p.seller_proposed_return_type,
      create_time_ge: p.create_time_ge,
      arbitration_status: p.arbitration_status,
      update_time_ge: p.update_time_ge,
      update_time_lt: p.update_time_lt,
      locale: p.locale,
      create_time_lt: p.create_time_lt
    }
  }

  return await SendRequest(config)
}
