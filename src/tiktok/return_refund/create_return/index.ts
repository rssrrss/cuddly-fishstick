import { CreateReturnParamV202309, CreateReturnResponseV202309, CreateReturnV202309 } from "./v202309";

export class CreateReturn {
  static Latest = async (p: CreateReturnParamV202309): Promise<CreateReturnResponseV202309> => CreateReturnV202309(p)
  static V202309 = async (p: CreateReturnParamV202309): Promise<CreateReturnResponseV202309> => CreateReturnV202309(p)
}
