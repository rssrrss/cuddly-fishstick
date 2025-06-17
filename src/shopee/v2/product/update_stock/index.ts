import { Param, Response } from "../../type";
import { SendRequest, SendRequestParam } from "../../util/send_request";

export interface UpdateStockResponse extends Response {
  response: {
    failure_list: {
      failed_reason?: string
    }[],
    success_list: {
      model_id?: number,
      location_id?: string,
      stock?: number
    }[]
  }
}

export interface UpdateStockParam extends Param {
  item_id: number,
  stock_list: {
    model_id: number,
    stock_list: {
      location_id?: string,
      stock: number
    }
  }[]
}

export async function UpdateStock(p: UpdateStockParam): Promise<UpdateStockResponse> {
  const param: SendRequestParam = {
    method: "POST",
    path: "/api/v2/product/update_stock",
    access_token: p.access_token,
    shop_id: p.shop_id,
    data: {
      item_id: p.item_id,
      stock_list: p.stock_list
    }
  }

  return await SendRequest(param)
}
