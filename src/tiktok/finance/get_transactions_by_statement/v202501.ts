import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

export interface GetTransactionsByStatementResponseV202501 extends BaseResponse {
  data: {
    next_page_token: string
    id: string
    create_time: number
    status: string
    currency: string
    payable_amount: string
    total_reserve_amount: string
    total_settlement_breakdown: {}
    total_count: number
    transactions: {}[]
  }
}

export interface GetTransactionsByStatementParamV202501 extends ParamWithCipher {
  statement_id: string
  page_token?: string
  sort_field: string
  sort_order?: string
  page_size?: number
}

export async function GetTransactionsByStatementV202501(p: GetTransactionsByStatementParamV202501): Promise<GetTransactionsByStatementResponseV202501> {
  const config: RequestParam = {
    method: "GET",
    path: `/finance/202501/orders/${p.statement_id}/statement_transactions`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      page_token: p.page_token,
      sort_field: p.sort_field,
      sort_order: p.sort_order,
      page_size: p.page_size,
    },
  }

  return await SendRequest(config)
}

