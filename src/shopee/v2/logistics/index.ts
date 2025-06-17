import { GetChannelList, GetChannelListParam, GetChannelListResponse } from "./get_channel_list";

export class Logistics {
  static GetChannelList = (p: GetChannelListParam): Promise<GetChannelListResponse> => GetChannelList(p)
}
