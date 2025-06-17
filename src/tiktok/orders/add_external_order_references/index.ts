import { AddExternalOrderReferencesParamV202406, AddExternalOrderReferencesResponseV202406, AddExternalOrderReferencesV202406 } from "./v202406";

export class AddExternalOrderReferences {
  static Latest = async (p: AddExternalOrderReferencesParamV202406): Promise<AddExternalOrderReferencesResponseV202406> => AddExternalOrderReferencesV202406(p)
  static V202406 = async (p: AddExternalOrderReferencesParamV202406): Promise<AddExternalOrderReferencesResponseV202406> => AddExternalOrderReferencesV202406(p)
}
