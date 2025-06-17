import { CalculateRefundParamV202309, CalculateRefundResponseV202309, CalculateRefundV2302309 } from "./v2302309";

export class CalculateRefund {
  static Latest = async (p: CalculateRefundParamV202309): Promise<CalculateRefundResponseV202309> => CalculateRefundV2302309(p)
  static V202309 = async (p: CalculateRefundParamV202309): Promise<CalculateRefundResponseV202309> => CalculateRefundV2302309(p)
}
