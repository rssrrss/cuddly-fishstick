import { GetExternalOrderReferencesParamV202406, GetExternalOrderReferencesResponseV202406, GetExternalOrderReferencesV202406 } from "./v202406";

export class GetExternalOrderReferences {
  static Latest = async (p: GetExternalOrderReferencesParamV202406): Promise<GetExternalOrderReferencesResponseV202406> => GetExternalOrderReferencesV202406(p)
  static V202406 = async (p: GetExternalOrderReferencesParamV202406): Promise<GetExternalOrderReferencesResponseV202406> => GetExternalOrderReferencesV202406(p)
}
