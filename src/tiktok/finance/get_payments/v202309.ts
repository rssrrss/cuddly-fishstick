import { Response as BaseResponse } from '../../type/response'
import { ParamWithToken } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

export interface GetPaymentsResponseV202309 extends BaseResponse {
  data: {
    next_page_token: string
    payments: {
      create_time: number
      id: string
      status: 'PAID' | 'FAILED' | 'PROCESSING'
      amount: {
        value: string
        currency: string
      }
      settlement_amount: {
        value: string
        currency: string
      }
      reserve_amount: {
        value: string
        currency: string
      }
      payment_amount_before_exhange: {
        value: string
        currency: string
      }
      exchange_rate: string
      paid_time: number
      bank_account: string
    }[]
  }
}

export interface GetPaymentsParamV202309 extends ParamWithToken {
  sort_field: 'statement_time'
  page_size?: number
  page_token?: string
  sort_order?: 'ASC' | 'DESC'
  create_time_lt?: number
  create_time_ge?: number
}

export async function GetPaymentsV202309(p: GetPaymentsParamV202309): Promise<GetPaymentsResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/finance/202309/payments`,
    accessToken: p.accessToken,
    params: {
      sort_field: p.sort_field,
      page_size: p.page_size,
      page_token: p.page_token,
      sort_order: p.sort_order,
      create_time_lt: p.create_time_lt,
      create_time_ge: p.create_time_ge
    },
  }

  return await SendRequest(config)
}
