import {
  DeactivateProductsParamV202309,
  DeactivateProductsResponseV202309,
  DeactivateProductsV202309
} from "./v202309"

export class DeactivateProducts {
  static Latest = async (p: DeactivateProductsParamV202309): Promise<DeactivateProductsResponseV202309> => DeactivateProductsV202309(p)
  static V202309 = async (p: DeactivateProductsParamV202309): Promise<DeactivateProductsResponseV202309> => DeactivateProductsV202309(p)
}
