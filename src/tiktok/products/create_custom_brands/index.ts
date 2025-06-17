import { CreateCustomBrandsParamV202309, CreateCustomBrandsResponseV202309, CreateCustomBrandsV202309 } from "./v202309";

export class CreateCustomBrands {
  static Latest = async (p: CreateCustomBrandsParamV202309): Promise<CreateCustomBrandsResponseV202309> => CreateCustomBrandsV202309(p)
  static V202309 = async (p: CreateCustomBrandsParamV202309): Promise<CreateCustomBrandsResponseV202309> => CreateCustomBrandsV202309(p)
}
