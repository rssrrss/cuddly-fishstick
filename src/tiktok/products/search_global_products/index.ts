import {
  SearchGlobalProductsParamV202312,
  SearchGlobalProductsResponseV202312,
  SearchGlobalProductsV202312
} from './202312'


export class SearchGlobalProducts {
  static Latest = async (p: SearchGlobalProductsParamV202312): Promise<SearchGlobalProductsResponseV202312> => SearchGlobalProductsV202312(p)
  static V202312 = async (p: SearchGlobalProductsParamV202312): Promise<SearchGlobalProductsResponseV202312> => SearchGlobalProductsV202312(p)
}
