import { GetTransactionsByStatementParamV202501, GetTransactionsByStatementResponseV202501, GetTransactionsByStatementV202501 } from "./v202501";

export class GetTransactionsByStatement {
  static Latest = async (p: GetTransactionsByStatementParamV202501): Promise<GetTransactionsByStatementResponseV202501> => GetTransactionsByStatementV202501(p)
  static V202501 = async (p: GetTransactionsByStatementParamV202501): Promise<GetTransactionsByStatementResponseV202501> => GetTransactionsByStatementV202501(p)
}
