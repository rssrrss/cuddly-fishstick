import { Param, Response } from "../../type"
import { SendRequest, SendRequestParam } from "../../util/send_request"

export interface GetItemBaseInfoResponse extends Response {
  response: {
    item_list: {
      item_id: number,
      category_id: number,
      item_name: string,
      description: string,
      item_sku: string,
      create_time: number,
      update_time: number,
      attribute_list: {
        attribute_id: number
        original_attribute_name: string
        is_mandatory: boolean
        attribute_value_list: {
          value_id: number,
          original_value_name: string,
          value_unit: string
        }[]
      }[],
      price_info: {
        currency: string,
        current_price: number,
        original_price: number,
        inflated_price_of_original_price: number,
        inflated_price_of_current_price: number,
        sip_item_price: number,
        sip_item_price_source: number,
        sip_item_price_currency: number,
      }[],
      stock_info_v2: {
        summary_info: {
          total_reserved_stock: number,
          total_available_stock: number
        },
        seller_stock: {
          location_id: number,
          stock: number,
          if_saleable: boolean
        }[],
        shopee_stock: {
          location_id: number,
          stock: number
        }[],
        advance_stock: {
          sellable_advance_stock: number,
          in_transit_advance_stock: number
        }
      }
      image: {
        image_id_list: string[],
        image_url_list: string[],
        image_ratio: string
      },
      weight: string,
      dimension: {
        package_length: number,
        package_width: number,
        package_height: number
      },
      logistic_info: {
        logistic_id: number,
        logistic_name: string,
        enabled: boolean,
        size_id: number,
        is_free: boolean
      }[],
      pre_order: {
        is_pre_order: boolean,
        days_to_ship: number,
      },
      condition: string,
      size_chart: string,
      item_status: string,
      has_model: boolean,
      promotion_id: number,
      video_info: {
        video_url: string,
        thumbnail_url: string,
        duration: number
      }[]
      brand: {
        brand_id: number,
        original_brand_name: string,
      },
      item_dangerous: number,
      description_type: string,
      size_chart_id: number,
      promotion_image: {
        image_id_list: string[],
        image_url_list: string[]
      },
      deboost: string,
      compability_info: {},
      authorized_brand_id: number,
      is_fulfillment_by_shopee: boolean,
      tag: {
        kit: boolean
      }
    }[]
  }
}

export interface GetItemBaseInfoParam extends Param {
  item_id_list: number[],
  need_tax_info?: boolean,
  need_complain_policy?: boolean,
}

export async function GetItemBaseInfo(p: GetItemBaseInfoParam): Promise<GetItemBaseInfoResponse> {
  const param: SendRequestParam = {
    method: "GET",
    path: "/api/v2/product/get_item_base_info",
    access_token: p.access_token,
    shop_id: p.shop_id,
    params: {
      item_id_list: p.item_id_list,
      need_tax_info: p.need_tax_info,
      need_complain_policy: p.need_complain_policy
    }
  }

  return await SendRequest(param)
}
