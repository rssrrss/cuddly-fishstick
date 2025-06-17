import { GetPaymentsParamV202309, GetPaymentsResponseV202309, GetPaymentsV202309 } from "./v202309"

export class GetPayments {
  static Latest = async (p: GetPaymentsParamV202309): Promise<GetPaymentsResponseV202309> => GetPaymentsV202309(p)
  static V202309 = async (p: GetPaymentsParamV202309): Promise<GetPaymentsResponseV202309> => GetPaymentsV202309(p)
}
