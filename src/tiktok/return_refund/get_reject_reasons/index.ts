import { GetRejectReasonsParamV202309, GetRejectReasonsResponseV202309, GetRejectReasonsV202309 } from "./v202309";

export class GetRejectReasons {
  static Latest = async (p: GetRejectReasonsParamV202309): Promise<GetRejectReasonsResponseV202309> => GetRejectReasonsV202309(p)
  static V202309 = async (p: GetRejectReasonsParamV202309): Promise<GetRejectReasonsResponseV202309> => GetRejectReasonsV202309(p)
}
