import { Response } from "../../type/response"
import { ParamWithCipher } from "../../type/param"
import { RequestParam, SendRequest } from "../../helper/send_request"

export interface GetOrderDetailResponseV202309LineItems extends ParamWithCipher {
  id: string,
  sku_id: string,
  combined_listing_skus: {
    sku_id: string,
    sku_count: number,
    product_id: string,
    seller_sku: string
  }[],
  product_id: string,
  product_name: string,
  sku_name: string,
  sku_image: string,
  original_price: string,
  sale_price: string,
  platform_discount: string,
  display_status: string,
  cancel_user: string,
  sku_type: string,
  seller_sku: string,
  shipping_provider_id: string,
  seller_discount: string,
  currency: string,
  package_id: string,
  rts_time: number,
  item_tax: {}[],
  package_status: string,
  shipping_provider_name: string,
  is_gift: boolean,
  cancel_reason: string,
  small_order_fee: string,
  retail_delivery_fee: string,
  tracking_number: string,
  buyer_service_fee: string,
  handling_duration_type: string,
  is_dangerous_good: boolean,
  needs_prescription: boolean,
}

export interface GetOrderDetailResponseV2302309 extends Response {
  data: {
    orders: {
      id: string,
      cancellation_initiator: "SELLER" | "BUYER" | "SYSTEM",
      shipping_provider: string,
      user_id: string,
      status: "UNPAID" | "ON_HOLD" | "AWAITING_SHIPMENT" | "PARTIALLY_SHIPPING" | "AWAITING_COLLECTION" | "IN_TRANSIT" | "DELIVERED" | "COMPLETED" | "CANCELLEDK"
      rts_time: number,
      payment: {
        buyer_service_fee: string,
        currency: string,
        original_shipping_fee: string,
        original_total_product_price: string,
        platform_discount: string,
        seller_discount: string,
        shipping_fee: string,
        shipping_fee_cofunded_discount: string,
        shipping_fee_platform_discount: string,
        shipping_fee_seller_discount: string,
        sub_total: string,
        tax: string,
        total_amount: string
      },
      recipient_address: {},
      buyer_message: string,
      create_time: number,
      tracking_number: string,
      cancel_reason: string,
      rts_sla_time: number,
      paid_time: number,
      fulfillment_type: "FULFILLMENT_BY_SELLER" | "FULFILLMENT_BY_TIKTOK" | "FULFILLMENT_BY_DILAYANI_TOKOPEDIA"
      seller_note: string,
      tts_sla_time: number,
      cancel_order_sla_time: number,
      update_time: number,
      packages: {
        id: string
      }[],
      delivery_type: "HOME_DELIVERY" | "COLLECTION_POINT",
      is_sample_order: boolean,
      warehouse_id: string,
      split_or_combine_tag: "COMBINED" | "SPLIT",
      has_updated_recipient_address: boolean,
      cpf: string,
      delivery_option_id: string,
      delivery_sla_time: number,
      payment_method_name: string,
      shipping_due_time: number,
      line_items: GetOrderDetailResponseV202309LineItems[],
      shipping_type: "TIKTOK" | "SELLER",
      buyer_email: string,
      delivery_time: number,
      need_upload_invoice: "UNKOWN" | "NEED_INVOICE" | "NO_NEED" | "INVOICE_UPLOADED"
      is_cod: boolean,
      request_cancel_time: number,
      delivery_option_required_delivery_timej: number
      delivery_option_name: string,
      is_buyer_request_cancel: boolean,
      delivery_due_time: number,
      collection_time: number,
      is_on_hold_time: number,
      cancel_time: number,
      is_replacement_order: boolean,
      replace_order_id: string,
      collection_due_time: number,
      pick_up_cut_off_time: number,
      fast_dispatch_sla_time: number,
      commerce_platform: string,
      order_type: string,
      release_date: number,
      handling_duration: {},
      auto_combine_group_id: string,
      cpf_name: string,
      is_exchange_order: boolean,
      exchange_source_order_id: string,
      consultation_id: string,
      fast_delivery_program: string
    }[]
  }
}

export interface GetOrderDetailParamV202309 extends ParamWithCipher {
  ids: string[]
}

export async function GetOrderDetailV202309(p: GetOrderDetailParamV202309): Promise<GetOrderDetailResponseV2302309> {
  const config: RequestParam = {
    method: "GET",
    path: `/order/202309/orders`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      ids: p.ids.join(',')
    }
  }

  return await SendRequest(config)
}
