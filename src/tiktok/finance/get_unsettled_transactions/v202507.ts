import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

export interface GetUnsettledTransactionsResponseV202507 extends BaseResponse {
  data: {
    next_page_token: string
    total_count: number
    sum_est_settlement_amount: string
    sum_est_revenue_amount: string
    sum_est_adjustment_amount: string
    sum_est_fee_amount: string
    transactions: {}[]
  }
}

export interface GetUnsettledTransactionsParamV202507 extends ParamWithCipher {
  page_token?: string
  page_size?: number
  sort_field: string
  sort_order?: 'order_creattime'
  search_time_ge?: number
  search_time_lt?: number
}

export async function GetUnsettledTransactionsV202507(p: GetUnsettledTransactionsParamV202507): Promise<GetUnsettledTransactionsResponseV202507> {
  const config: RequestParam = {
    method: "GET",
    path: `/finance/202501/orders/`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      page_token: p.page_token,
      page_size: p.page_size,
      sort_field: p.sort_field,
      sort_order: p.sort_order,
      search_time_ge: p.search_time_ge,
      search_time_lt: p.search_time_lt
    },
  }

  return await SendRequest(config)
}

