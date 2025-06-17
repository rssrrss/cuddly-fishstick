import {
  GetCategoriesParamV202309,
  GetCategoriesResponseV202309,
  GetCategoriesV202309,
} from './202309'

export class GetCategories {
  static Latest = async (param: GetCategoriesParamV202309): Promise<GetCategoriesResponseV202309> => GetCategoriesV202309(param)
  static V202309 = async (param: GetCategoriesParamV202309): Promise<GetCategoriesResponseV202309> => GetCategoriesV202309(param)
}
