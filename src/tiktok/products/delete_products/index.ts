import {
  DeleteProductsParamV202309,
  DeleteProductsResponseV202309,
  DeleteProductsV202309
} from "./v202309"

export class DeleteProducts {
  static Latest = async (p: DeleteProductsParamV202309): Promise<DeleteProductsResponseV202309> => DeleteProductsV202309(p)
  static V202309 = async (p: DeleteProductsParamV202309): Promise<DeleteProductsResponseV202309> => DeleteProductsV202309(p)
}
