import { Param, Response } from "../../type";
import { SendRequest, SendRequestParam } from "../../util/send_request";

export interface UpdatePriceResponse extends Response {
  response: {
    failure_list: {
      failed_reason?: string
    }[],
    success_list: {
      original_price?: number
    }[]
  }
}

export interface UpdatePriceParam extends Param {
  item_id: number,
  price_list: {
    model_id: number,
    original_price: number
  }[]
}

export async function UpdatePrice(p: UpdatePriceParam): Promise<UpdatePriceResponse> {
  const param: SendRequestParam = {
    method: "POST",
    path: "/api/v2/product/update_price",
    access_token: p.access_token,
    shop_id: p.shop_id,
    data: {
      item_id: p.item_id,
      price_list: p.price_list
    }
  }

  return await SendRequest(param)
}
