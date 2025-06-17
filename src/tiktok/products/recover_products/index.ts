import {
  RecoverProductsParamV202309,
  RecoverProductsResponseV202309,
  RecoverProductsV202309
} from "./202309"

export class RecoverProducts {
  static Latest = async (p: RecoverProductsParamV202309): Promise<RecoverProductsResponseV202309> => RecoverProductsV202309(p)
  static V202309 = async (p: RecoverProductsParamV202309): Promise<RecoverProductsResponseV202309> => RecoverProductsV202309(p)
}
