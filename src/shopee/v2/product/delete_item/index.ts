import { Param, Response } from "../../type";
import { SendRequest, SendRequestParam } from "../../util/send_request";

export interface DeleteItemResponse extends Response { }

export interface DeleteItemParam extends Param { 
  item_id: number
}

export async function DeleteItem(p: DeleteItemParam): Promise<DeleteItemResponse> {
  const param: SendRequestParam = {
    method: 'POST',
    path: '/api/v2/product/delete_item',
    access_token: p.access_token,
    shop_id: p.shop_id,
    data: {
      item_id: p.item_id
    }
  }

  return await SendRequest(param)
}
