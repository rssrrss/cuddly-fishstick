import { CancelOrderParamV202309, CancelOrderResponseV202309, CancelOrderV202309 } from "./v202309";

export class CancelOrder {
  static Latest = async (p: CancelOrderParamV202309): Promise<CancelOrderResponseV202309> => CancelOrderV202309(p)
  static V202309 = async (p: CancelOrderParamV202309): Promise<CancelOrderResponseV202309> => CancelOrderV202309(p)
}
