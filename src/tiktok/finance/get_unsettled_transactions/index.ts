import { GetUnsettledTransactionsParamV202507, GetUnsettledTransactionsResponseV202507, GetUnsettledTransactionsV202507 } from "./v202507";

export class GetUnsettledTransactions {
  static Latest = async (p: GetUnsettledTransactionsParamV202507): Promise<GetUnsettledTransactionsResponseV202507> => GetUnsettledTransactionsV202507(p)
  static V202507 = async (p: GetUnsettledTransactionsParamV202507): Promise<GetUnsettledTransactionsResponseV202507> => GetUnsettledTransactionsV202507(p)
}
