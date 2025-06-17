import { RejectCancellationParamV202309, RejectCancellationResponseV202309, RejectCancellationV202309 } from "./v202309";

export class RejectCancellation {
  static Latest = async (p: RejectCancellationParamV202309): Promise<RejectCancellationResponseV202309> => RejectCancellationV202309(p)
  static V202309 = async (p: RejectCancellationParamV202309): Promise<RejectCancellationResponseV202309> => RejectCancellationV202309(p)
}
