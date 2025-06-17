import { ITEM_STATUS, Param, Response } from "../../type"
import { SendRequest, SendRequestParam } from "../../util/send_request"

export interface GetItemListResponse extends Response {
  response: {
    item: {
      item_id: number,
      item_status: ITEM_STATUS,
      update_time: number,
      tag: {
        kit: boolean
      }
    }[],
    total_count: number,
    has_next_page: boolean,
    next_offset: number,
    next: string
  }
}

export interface GetItemListParam extends Param {
  offset: number,
  page_size: number,
  item_status: ITEM_STATUS[],
  update_time_from?: number,
  update_time_to?: number,
}

export async function GetItemList(p: GetItemListParam): Promise<GetItemListResponse> {
  const param: SendRequestParam = {
    method: "GET",
    path: "/api/v2/product/get_item_list",
    access_token: p.access_token,
    shop_id: p.shop_id,
    params: {
      offset: p.offset,
      page_size: p.page_size,
      item_status: p.item_status,
      update_time_from: p.update_time_from,
      update_time_to: p.update_time_to
    }
  }

  return await SendRequest(param)
}
