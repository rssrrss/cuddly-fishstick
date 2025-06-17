import { GetActiveShopsParamv202309, GetActiveShopsResponseV202309, GetActiveShopsV202309 } from "./v202309";

export class GetActiveShops {
  static Latest = async (p: GetActiveShopsParamv202309): Promise<GetActiveShopsResponseV202309> => GetActiveShopsV202309(p)
  static V202309 = async (p: GetActiveShopsParamv202309): Promise<GetActiveShopsResponseV202309> => GetActiveShopsV202309(p)
}
