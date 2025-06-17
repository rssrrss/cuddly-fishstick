import { Response as BaseResponse } from '../../type/response'
import { ParamWithToken } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

export interface GetStatementsResponseV202309 extends BaseResponse {
  data: {
    next_page_token: string
    statements: {
      id: string
      statement_time: number
      settlement_amount: string
      currency: string
      revenue_amount: string
      fee_amount: string
      adjustment_amount: string
      payment_status: 'PAID' | 'FAILED' | 'PROCESSING'
      payment_id: string
      net_sales_amount: string
      shipping_cost_amount: string
    }[]
  }
}

export interface GetStatementsParamV202309 extends ParamWithToken {
  sort_field: 'statement_time'
  statement_time_lt?: number
  payment_status?: 'PAID' | 'FAILED' | 'PROCESSING'
  page_size?: number
  page_token?: string
  sort_order?: 'ASC' | 'DESC'
  statement_time_ge: number
}

export async function GetStatementsV202309(p: GetStatementsParamV202309): Promise<GetStatementsResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/finance/202309/statements`,
    accessToken: p.accessToken,
    params: {
      sort_field: p.sort_field,
      statement_time_lt: p.statement_time_lt,
      statement_time_ge: p.statement_time_ge,
      payment_status: p.payment_status,
      page_size: p.page_size,
      page_token: p.page_token,
      sort_order: p.sort_order,
    },
  }

  return await SendRequest(config)
}

