import { Response as BaseResponse } from '../../type/response'
import { ParamWithToken } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

export interface GetWithdrawalsResponseV202309 extends BaseResponse {
  data: {
    next_page_token: string
    total_count: number
    withdrawals: {
      id: string
      type: 'SETTLE' | 'TRANSFER' | 'REVERSE'
      amount: string
      currency: string
      status: 'PROCESSING' | 'SUCCESS' | 'FAILED'
      create_time: number
    }[]
  }
}

export type WithdrawalsType = 'WITHDRAW' | 'SETTLE' | 'TRANSFER' | 'REVERSE'

export interface GetWithdrawalsParamV202309 extends ParamWithToken {
  create_time_lt?: number
  types: WithdrawalsType[],
  page_size?: number,
  page_token?: string,
  create_time_ge?: number,
}

export async function GetWithdrawalsV202309(p: GetWithdrawalsParamV202309): Promise<GetWithdrawalsResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/finance/202309/withdrawals`,
    accessToken: p.accessToken,
    params: {
      create_time_lt: p.create_time_lt,
      types: p.types,
      page_size: p.page_size,
      page_token: p.page_token,
      create_time_ge: p.create_time_ge
    },
  }

  return await SendRequest(config)
}

