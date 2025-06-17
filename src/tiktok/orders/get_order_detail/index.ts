import {
  GetOrderDetailParamV202309,
  GetOrderDetailResponseV2302309,
  GetOrderDetailV202309
} from "./v202309"

export class GetOrderDetail {
  static Latest = async (p: GetOrderDetailParamV202309): Promise<GetOrderDetailResponseV2302309> => GetOrderDetailV202309(p)
  static V2302309 = async (p: GetOrderDetailParamV202309): Promise<GetOrderDetailResponseV2302309> => GetOrderDetailV202309(p)
}
