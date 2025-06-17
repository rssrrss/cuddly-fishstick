import { Param, Response } from "../../type";
import { SendRequest, SendRequestParam } from "../../util/send_request";

export interface initTIerVariationResponse extends Response {
}

export interface InitTierVariationParam extends Param {
  item_id: number,
  tier_variation: {
    name: string,
    option_list: {
      option: string,
      image?: {
        image_id: string
      }
    }[]
  }[],
  model: {
    tier_index: number[],
    original_price: number,
    model_sku: string,
    seller_stock: {
      location_id?: string,
      stock: number
    }[],
    option?: string,
    size?: string
  }[]
}


export async function InitTierVariation(p: InitTierVariationParam): Promise<initTIerVariationResponse> {
  const param: SendRequestParam = {
    method: 'POST',
    path: '/api/v2/product/init_tier_variation',
    access_token: p.access_token,
    shop_id: p.shop_id,
    data: {
      item_id: p.item_id,
      tier_variation: p.tier_variation,
      model: p.model,
    }
  }

  return await SendRequest(param)
}
