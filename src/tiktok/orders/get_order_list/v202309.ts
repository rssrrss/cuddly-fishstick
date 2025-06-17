import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher, SortOrder } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'
import { CommercePlatform, DeliveryOption, FulfillmentType, NeedUploadInvoice, OrderStatus, Role, ShippingType } from '../type'

export interface GetOrderListResponseV202309 extends BaseResponse {
  data: {
    next_page_token: string
    total_count: number
    orders: {
      id: string
      buyer_message: string
      cancellation_initiator: Role
      shipping_provider_id: string
      create_Time: number
      shipping_provider: string
      packages: {
        id: string
      }[]
      payment: {
        currency: string
        sub_total: string
        shipping_time: string
        seller_discount: string
        platform_discount: string
        total_amount: string
        original_total_product_price: string
        original_shipping_fee: string
        shipping_fee_seller_discount: string
        shipping_fee_platform_discount: string
        shipping_fee_cofueded_discount: string
        tax: string
        small_order_fee: string
        shipping_fee_tax: string
        product_tax: string
        retail_delivery_fee: string
        buyer_service_fee: string
        handling_fee: string
        shipping_insurance_fee: string
        item_insurance_fee: string
      }
      recipient_address: {
        full_address: string
        phone_number: string
        name: string
        first_name: string
        last_name: string
        first_name_local_script: string
        last_name_local_script: string
        address_detail: string
        address_line1: string
        address_line2: string
        address_line3: string
        address_line4: string
        district_info: {
          address_level_name: string
          address_name: string
          address_level: string
        }[]
        delivery_preferences: {
          drop_off_locoation: string
        }
        postal_code: string
        region_code: string
        post_town: string
      }
      status: OrderStatus
      fullfillment_type: FulfillmentType
      paid_time: number
      rts_sla_time: number
      tts_sla_time: number
      cancel_reason: string
      update_Time: number
      payment_method_name: string
      rts_time: number
      tracking_number: string
      split_or_combine_tage: string
      has_updated_recipient_address: boolean
      cancel_order_sla_time: number
      warehouse_id: string
      request_cancel_time: number
      shipping_type: ShippingType
      user_id: string
      seller_note: string
      delivery_sla_time: number
      is_cod: boolean
      delivery_option_id: string
      cancel_time: number
      need_upload_invoice: NeedUploadInvoice
      delivery_option_name: DeliveryOption
      cpf: string
      line_items: {}[]
      buyer_email: string
      delivery_due_time: number
      is_sample_order: boolean
      shipping_due_time: number
      collection_due_time: number
      delivery_option_required_delivery_time: number
      is_on_hold_order: boolean
      delivery_time: number
      is_replacement_order: boolean
      collection_time: number
      replaced_order_id: string
      is_buyer_request_cancel: boolean
      pick_up_cut_off_time: number
      fast_dispatcvh_sla_time: number
      commerce_platform: CommercePlatform
      order_type: string
      release_date: number
      handling_duration: {}
      auto_combine_group__id: string
      cpf_time: string
      is_exchange_order: boolean
      exchange_source_order_id: string
      consullation_id: string
      fast_delivery_program: string
      fulfillment_priority_level: number
      recommended_shipping_time: number
    }[]
  }
}

export interface GetOrderListParamV202309 extends ParamWithCipher {
  page_size: number
  sort_order?: SortOrder
  page_token?: string
  sort_field?: string
  order_status?: string
  create_time_ge?: number
  create_time_lt?: number
  update_time_ge?: number
  update_time_lt?: number
  shipping_type: string
  buyer_user_id: string
  is_buyer_request_cancel: boolean
  warehouse_ids: string[]
}

export async function GetOrderListV202309(p: GetOrderListParamV202309): Promise<GetOrderListResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/order/202309/orders/search`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      page_size: p.page_size,
      sort_order: p.sort_order,
      page_token: p.page_token,
      sort_field: p.sort_field
    },
    data: {
      order_status: p.order_status,
      create_time_ge: p.create_time_ge,
      create_time_lt: p.create_time_lt,
      update_time_ge: p.update_time_ge,
      update_time_lt: p.update_time_lt,
      shipping_type: p.shipping_type,
      buyer_user_id: p.buyer_user_id,
      is_buyer_request_cancel: p.is_buyer_request_cancel,
      warehouse_ids: p.warehouse_ids
    }
  }

  return await SendRequest(config)
}
