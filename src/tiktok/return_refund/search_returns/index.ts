import { SearchReturnsParamV202309, SearchReturnsResponseV202309, SearchReturnsV202309 } from "./v202309"

export class SearchReturns {
  static Latest = async (param: SearchReturnsParamV202309): Promise<SearchReturnsResponseV202309> => SearchReturnsV202309(param)
  static V202309 = async (param: SearchReturnsParamV202309): Promise<SearchReturnsResponseV202309> => SearchReturnsV202309(param)
}
