import { SearchCancellationsParamV202309, SearchCancellationsResponseV202309, SearchCancellationsV202309 } from "./v202309"

export class SearchCancellations {
  static Latest = async (param: SearchCancellationsParamV202309): Promise<SearchCancellationsResponseV202309> => SearchCancellationsV202309(param)
  static V202309 = async (param: SearchCancellationsParamV202309): Promise<SearchCancellationsResponseV202309> => SearchCancellationsV202309(param)
}
