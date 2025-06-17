import {
  GetPriceDetailParamV202407,
  GetPriceDetailResponseV202407,
  GetPriceDetailV202407
} from "./v202407"

export class GetPriceDetail {
  Latest = async (p: GetPriceDetailParamV202407): Promise<GetPriceDetailResponseV202407> => GetPriceDetailV202407(p)
  V202407 = async (p: GetPriceDetailParamV202407): Promise<GetPriceDetailResponseV202407> => GetPriceDetailV202407(p)
}
