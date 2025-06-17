import {
  CreateProductParamV202309,
  CreateProductResponseV202309,
  CreateProductV202309
} from "./v202309"

export class CreateProduct {
  static Latest = async (p: CreateProductParamV202309): Promise<CreateProductResponseV202309> => CreateProductV202309(p)
  static V202309 = async (p: CreateProductParamV202309): Promise<CreateProductResponseV202309> => CreateProductV202309(p)
}
