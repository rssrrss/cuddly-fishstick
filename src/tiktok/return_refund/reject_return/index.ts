import { RejectReturnParamV202309, RejectReturnResponseV202309, RejectReturnV202309 } from "./v202309";

export class RejectReturn {
  static Latest = async (p: RejectReturnParamV202309): Promise<RejectReturnResponseV202309> => RejectReturnV202309(p)
  static V202309 = async (p: RejectReturnParamV202309): Promise<RejectReturnResponseV202309> => RejectReturnV202309(p)
}
