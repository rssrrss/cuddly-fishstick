import { GetPayments } from "./get_payments";
import { GetStatements } from "./get_statements";
import { GetTransactionsByOrder } from "./get_transactions_by_order";
import { GetTransactionsByStatement } from "./get_transactions_by_statement";
import { GetUnsettledTransactions } from "./get_unsettled_transactions";
import { GetWithdrawals } from "./get_withdrawals";

export class Finance {
  static GetStatements = GetStatements
  static GetPayments = GetPayments
  static GetWithdrawals = GetWithdrawals
  static GetTransactionsByOrder = GetTransactionsByOrder
  static GetTransactionsByStatement = GetTransactionsByStatement
  static GetUnsettledTransactions = GetUnsettledTransactions
}
