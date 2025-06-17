import {
  SearchProductsParamV202502,
  SearchProductsResponseV202502,
  SearchProductsV202502
} from './202502'

export class SearchProducts {
  static Latest = async (param: SearchProductsParamV202502): Promise<SearchProductsResponseV202502> => SearchProductsV202502(param)
  static V202502 = async (param: SearchProductsParamV202502): Promise<SearchProductsResponseV202502> => SearchProductsV202502(param)
}
