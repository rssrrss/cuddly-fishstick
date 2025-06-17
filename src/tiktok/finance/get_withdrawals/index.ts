import { GetWithdrawalsParamV202309, GetWithdrawalsResponseV202309, GetWithdrawalsV202309 } from "./v202309";

export class GetWithdrawals {
  static Latest = async (p: GetWithdrawalsParamV202309): Promise<GetWithdrawalsResponseV202309> => GetWithdrawalsV202309(p)
  static V202309 = async (p: GetWithdrawalsParamV202309): Promise<GetWithdrawalsResponseV202309> => GetWithdrawalsV202309(p)
}
