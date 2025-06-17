import {
  ActivateProductsParamV202309,
  ActivateProductsResponseV202309,
  ActivateProductsV202309
} from "./202309"

export class ActivateProducts {
  static Latest = async (p: ActivateProductsParamV202309): Promise<ActivateProductsResponseV202309> => ActivateProductsV202309(p)
  static V202309 = async (p: ActivateProductsParamV202309): Promise<ActivateProductsResponseV202309> => ActivateProductsV202309(p)
}
