import { GetStatementsParamV202309, GetStatementsResponseV202309, GetStatementsV202309 } from "./v202309"

export class GetStatements {
  static Latest = async (p: GetStatementsParamV202309): Promise<GetStatementsResponseV202309> => GetStatementsV202309(p)
  static V2302309 = async (p: GetStatementsParamV202309): Promise<GetStatementsResponseV202309> => GetStatementsV202309(p)
}
