import {
  GetAuthorizedResponseV202309,
  GetAuthorizedShopParamV202309,
  GetAuthorizedShopV202309
} from './202309'

export class GetAuthorizedShops {
  static Latest = async (param: GetAuthorizedShopParamV202309): Promise<GetAuthorizedResponseV202309> => GetAuthorizedShopV202309(param)
  static V202309 = async (param: GetAuthorizedShopParamV202309): Promise<GetAuthorizedResponseV202309> => GetAuthorizedShopV202309(param)
}
