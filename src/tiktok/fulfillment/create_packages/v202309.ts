import { ParamWithCipher } from "../../type/param"
import { RequestParam, SendRequest } from "../../helper/send_request"

export interface CreatePackagesResponseV202309 extends Response {
  data: {
    order_id: string,
    order_list_item_ids: string[],
    dimension: {
      length: string,
      width: string,
      height: string,
      unit: string
    },
    shipping_service_info: {
      id: string,
      name: string,
      price: string,
      currency: string,
      earliest_delivery_days: number,
      latest_delivery_days: number,
      shipping_provider_id: string,
      shipping_provider_name: string
    },
    package_id: string,
    weight: {
      value: string,
      unit: string
    },
    create_time: number
  }
}

export interface CreatePackagesParamV202309 extends ParamWithCipher {
  order_id: string
}

export async function CreatePackagesV202309(p: CreatePackagesParamV202309): Promise<CreatePackagesResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/fulfillment/202309/packages`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      order_id: p.order_id
    }
  }

  return await SendRequest(config)
}
