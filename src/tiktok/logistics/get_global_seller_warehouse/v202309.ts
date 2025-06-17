import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

export interface GetGlobalSellerWarehouseResponseV202309 extends BaseResponse {
  data: {
    global_warehouses: {
      id: string
      name: string
      ownership: string
    }[]
  }
}

export interface GetGlobalSellerWarehouseParamV202309 extends ParamWithCipher {
}

export async function GetGlobalSellerWarehouseV202309(p: GetGlobalSellerWarehouseParamV202309): Promise<GetGlobalSellerWarehouseResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/logistics/202309/global_warehouses`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
  }

  return await SendRequest(config)
}
