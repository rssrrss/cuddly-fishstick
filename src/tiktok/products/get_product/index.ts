import {
  GetProductParamV202309,
  GetProductResponseV202309,
  GetProductV202309
} from './202309'

export class GetProduct {
  static Latest = async (param: GetProductParamV202309): Promise<GetProductResponseV202309> => GetProductV202309(param)
  static V202309 = async (param: GetProductParamV202309): Promise<GetProductResponseV202309> => GetProductV202309(param)
}
