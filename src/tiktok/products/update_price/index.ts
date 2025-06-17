import {
  UpdatePriceParamV202309,
  UpdatePriceResponseV202309,
  UpdatePriceV202309
} from "./202309"

export class UpdatePrice {
  static Latest = async (param: UpdatePriceParamV202309): Promise<UpdatePriceResponseV202309> => UpdatePriceV202309(param)
  static V202309 = async (param: UpdatePriceParamV202309): Promise<UpdatePriceResponseV202309> => UpdatePriceV202309(param)
}
