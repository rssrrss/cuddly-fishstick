import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface GetAftersaleEligibilityResponseV202309 extends Response {
  data: {
    sku_eligibility: {
      sku_id: string
      line_item_eligibility: {
        request_type: string,
        order_line_items_ids: string[],
        eligible: boolean,
        ineligible_code: number,
        ineligible_reason: string
      }[]
    }[]
  }
}

export interface GetAftersaleEligibilityParamV202309 extends ParamWithCipher {
  order_id: string,
  initiate_aftersale_user?: 'SELLER' | 'BUYER'
}

export async function GetAftersaleEligibilityV202309(p: GetAftersaleEligibilityParamV202309): Promise<GetAftersaleEligibilityResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/return_refund/202309/orders/${p.order_id}/aftersale_eligibility`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      initiate_aftersale_user: p.initiate_aftersale_user
    },
  }

  return await SendRequest(config)
}
