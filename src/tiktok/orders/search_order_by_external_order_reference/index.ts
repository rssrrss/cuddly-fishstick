import { SearchOrderByExternalOrderReferenceParamV202406, SearchOrderByExternalOrderReferenceResponseV202406, SearchOrderByExternalOrderReferenceV202406 } from "./v202406";

export class SearchOrderByExternalOrderReference {
  static Latest = async (p: SearchOrderByExternalOrderReferenceParamV202406): Promise<SearchOrderByExternalOrderReferenceResponseV202406> => SearchOrderByExternalOrderReferenceV202406(p)
  static V202309 = async (p: SearchOrderByExternalOrderReferenceParamV202406): Promise<SearchOrderByExternalOrderReferenceResponseV202406> => SearchOrderByExternalOrderReferenceV202406(p)
}
