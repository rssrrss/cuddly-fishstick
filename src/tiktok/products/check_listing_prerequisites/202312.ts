import { Response as BaseResponse } from '../../type/response'
import { ParamWithToken } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

type CheckItem =
  'SHOP_STATUS' | 'SHOP_TAX' | 'PICKUP_WAREHOUSE' | 'RETURN_WAREHOUSE' |
  'DELIVERY_OPTION' | 'SHIPPING_TEMPLATE' | 'PRODUCT_QUANTITY_LIMIT' |
  'EXTENDED_PRODUCER_RESPOSIBILITY' | 'BANK_ACCOUNT' | 'CONTACT_INFO'

interface CheckResult {
  check_item: CheckItem,
  is_failed: boolean,
  fail_reasons: string[]
}

export interface CheckListingPrerequisitesResponseV202312 extends BaseResponse {
  data: {
    check_results: CheckResult[]
  }
}

export interface CheckListingPrerequisitesParamV202312 extends ParamWithToken {
  shopCipher: string
}

export async function CheckListingPrerequisitesV202312(p: CheckListingPrerequisitesParamV202312): Promise<CheckListingPrerequisitesResponseV202312> {
  const config: RequestParam = {
    method: 'GET',
    path: `/product/202312/prerequisites`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shopCipher,
    },
  }

  return await SendRequest(config)
}
