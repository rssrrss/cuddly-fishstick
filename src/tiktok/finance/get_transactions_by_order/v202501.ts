import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

export interface GetTransactionsByOrderResponseV202501 extends BaseResponse {
  data: {
    order_id: string
    order_create_time: number
    currency: string
    revenue_amount: string
    fee_and_tax_amount: string
    settlement_amount: string
    sku_transactions: {}[]
    total_count: number
  }
}

export interface GetTransactionsByOrderParamV202501 extends ParamWithCipher {
  order_id: string
}

export async function GetTransactionsByOrderV202501(p: GetTransactionsByOrderParamV202501): Promise<GetTransactionsByOrderResponseV202501> {
  const config: RequestParam = {
    method: "GET",
    path: `/finance/202501/orders/${p.order_id}/statement_transactions`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher
    },
  }

  return await SendRequest(config)
}

