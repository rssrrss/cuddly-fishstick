import {
  EditProductParamV202309,
  EditProductResponseV202309,
  EditProductV202309
} from "./202309"

export class EditProduct {
  static Latest = async (param: EditProductParamV202309): Promise<EditProductResponseV202309> => EditProductV202309(param)
  static V202309 = async (param: EditProductParamV202309): Promise<EditProductResponseV202309> => EditProductV202309(param)
}
