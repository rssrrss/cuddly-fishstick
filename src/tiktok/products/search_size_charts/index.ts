import { SearchSizeChartsParamV202407, SearchSizeChartsResponseV202407, SearchSizeChartsV202407 } from "./v202407";

export class SearchSizeCharts {
  static Latest = async (p: SearchSizeChartsParamV202407): Promise<SearchSizeChartsResponseV202407> => SearchSizeChartsV202407(p)
  static V202407 = async (p: SearchSizeChartsParamV202407): Promise<SearchSizeChartsResponseV202407> => SearchSizeChartsV202407(p)
}
