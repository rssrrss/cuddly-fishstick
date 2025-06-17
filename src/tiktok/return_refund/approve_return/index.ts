import { ApproveReturnParamV202309, ApproveReturnResponseV202309, ApproveReturnV202309 } from "./v202309";

export class ApproveReturn {
  static Latest = async (p: ApproveReturnParamV202309): Promise<ApproveReturnResponseV202309> => ApproveReturnV202309(p)
  static V202309 = async (p: ApproveReturnParamV202309): Promise<ApproveReturnResponseV202309> => ApproveReturnV202309(p)
}
