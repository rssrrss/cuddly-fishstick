import { ITEM_STATUS, Param, Response } from "../../type"
import { SendRequest, SendRequestParam } from "../../util/send_request"

export interface GetModelListResponse extends Response {
  response: {
    tier_variation: {
      option_list: {
        option: string,
        image: {
          image_id: string,
          image_url: string
        }
      }[],
      name: string
    }[],
    model: {
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
      model_id: number,
      tier_index: number[],
      promotion_id: number,
      model_sku: string,
      model_status: string,
      preorder: {
        is_pre_order: boolean,
        days_to_ship: number
      },
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
      gtin_code: string,
      weight: string,
      dimension: {
        package_height: number,
        package_length: number,
        package_width: number,
      },
      is_fulfillment_by_shopee: boolean
    }[],
    standardise_tier_variation: {
      variation_id: number,
      variant_name: string,
      variantion_group_id: number,
      variation_option_list: {
        varition_option_id: number,
        varition_option_name: string,
        image_id: string,
        image_url: string
      }[]
    }[]
  }
}

export interface GetModelListParam extends Param {
  item_id: number
}

export async function GetModelList(p: GetModelListParam): Promise<GetModelListResponse> {
  const param: SendRequestParam = {
    method: "GET",
    path: "/api/v2/product/get_model_list",
    access_token: p.access_token,
    shop_id: p.shop_id,
    params: {
      item_id: p.item_id
    }
  }

  return await SendRequest(param)
}
