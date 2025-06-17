import { Param, Response } from "../../type";
import { SendRequest, SendRequestParam } from "../../util/send_request";

export interface GetCategoryResponse extends Response { 
  response: {
    category_list: {
      category_id: number,
      parent_category_id: number,
      original_category_name: string,
      display_category_name: string,
      has_children: boolean,
      debug_message?: any,
    }[]
  }
}

export interface GetCategoryParam extends Param { }

export async function GetCategory(p: GetCategoryParam): Promise<GetCategoryResponse> {
  const param: SendRequestParam = {
    method: "GET",
    path: "/api/v2/product/get_category",
    access_token: p.access_token,
    shop_id: p.shop_id,
  }

  return await SendRequest(param)
}
