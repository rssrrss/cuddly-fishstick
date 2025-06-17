import { GetBrandsParamV202309, GetBrandsResponseV202309, GetBrandsV202309 } from "./v202309";

export class GetBrands {
  static Latest = async (p: GetBrandsParamV202309): Promise<GetBrandsResponseV202309> => GetBrandsV202309(p)
  static V202309 = async (p: GetBrandsParamV202309): Promise<GetBrandsResponseV202309> => GetBrandsV202309(p)
}
