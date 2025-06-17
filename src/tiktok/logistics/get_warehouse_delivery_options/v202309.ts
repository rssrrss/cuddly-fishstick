import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'
import { CommercePlatform } from '../../orders/type'

export interface GetWarehouseDeliveryOptionsResponseV202309 extends BaseResponse {
  data: {
    delivery_options: {
      id: string
      name: string
      type: 'STANDARD' | 'EXPRESS' | 'ECONOMY' | 'SEND_BY_SELLER'
      description: string
      dimension_limit: {
        max_height: number
        max_length: number
        max_width: number
        unit: 'CM' | 'INCH'
      },
      weight_limit: {
        max_weight: number
        min_weight: number
        unit: 'GRAM' | 'POUND'
      },
      platform: CommercePlatform
    }[]
  }
}

export interface GetWarehouseDeliveryOptionsParamV202309 extends ParamWithCipher {
  warehouse_id: string
}

export async function GetWarehouseDeliveryOptionsV202309(p: GetWarehouseDeliveryOptionsParamV202309): Promise<GetWarehouseDeliveryOptionsResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/logistics/202309/warehouses/${p.warehouse_id}/delivery_options`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
  }

  return await SendRequest(config)
}
