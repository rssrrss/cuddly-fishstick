import { Param, Response } from "../../type";
import { SendRequest, SendRequestParam } from "../../util/send_request";

export interface GetChannelListResponse extends Response {
  response: {
    logistics_channel_list: {
      logistics_channel_id: number,
      logistics_channel_name: string,
      enabled: boolean,
    }[]
  }
}

export interface GetChannelListParam extends Param { }

export async function GetChannelList(p: GetChannelListParam): Promise<GetChannelListResponse> {
  const param: SendRequestParam = {
    method: "GET",
    path: "/api/v2/logistics/get_channel_list",
    access_token: p.access_token,
    shop_id: p.shop_id,
  }

  return await SendRequest(param)
}
