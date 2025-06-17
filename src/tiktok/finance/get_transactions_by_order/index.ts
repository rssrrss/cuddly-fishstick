import { GetTransactionsByOrderParamV202501, GetTransactionsByOrderResponseV202501, GetTransactionsByOrderV202501 } from "./v202501";

export class GetTransactionsByOrder {
  static Latest = async (p: GetTransactionsByOrderParamV202501): Promise<GetTransactionsByOrderResponseV202501> => GetTransactionsByOrderV202501(p)
  static V202501 = async (p: GetTransactionsByOrderParamV202501): Promise<GetTransactionsByOrderResponseV202501> => GetTransactionsByOrderV202501(p)
}
