import { GetOrderListParamV202309, GetOrderListResponseV202309, GetOrderListV202309 } from "./v202309";

export class GetOrderList {
  static Latest = async (p: GetOrderListParamV202309): Promise<GetOrderListResponseV202309> => GetOrderListV202309(p)
  static V202309 = async (p: GetOrderListParamV202309): Promise<GetOrderListResponseV202309> => GetOrderListV202309(p)
}
