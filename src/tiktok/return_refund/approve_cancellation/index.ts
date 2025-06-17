import { ApproveCancellationParamV202309, ApproveCancellationResponseV202309, ApproveCancellationV202309 } from "./v202309";

export class ApproveCancellation {
  static Latest = async (p: ApproveCancellationParamV202309): Promise<ApproveCancellationResponseV202309> => ApproveCancellationV202309(p)
  static V202309 = async (p: ApproveCancellationParamV202309): Promise<ApproveCancellationResponseV202309> => ApproveCancellationV202309(p)
}
