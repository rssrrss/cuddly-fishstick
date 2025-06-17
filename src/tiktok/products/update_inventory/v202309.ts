import { Response } from "../../type/response"
import { ParamWithToken } from "../../type/param"
import { RequestParam, SendRequest } from "../../helper/send_request"

interface ErrorDetailExtraError {
  warehouse_id: string,
  code: number,
  message: string
}

interface ErrorDetail {
  sku_id: string,
  extra_errors: ErrorDetailExtraError[]
}

interface Error {
  code: number,
  message: string,
  detail: ErrorDetail
}

export interface UpdateInventoryResponseV202309 extends Response {
  errors?: Error[]
}

interface SkuInventory {
  warehouse_id: string,
  quantity: number,
}

interface Sku {
  id: string
  inventory: SkuInventory[]
}

export interface UpdateInventoryParamV202309 extends ParamWithToken {
  shop_cipher: string,
  product_id: string,
  skus: Sku[]
}

export async function UpdateInventoryV202309(p: UpdateInventoryParamV202309): Promise<UpdateInventoryResponseV202309> {
  const config: RequestParam = {
    method: 'POST',
    path: `/product/202309/products/${p.product_id}/inventory/update`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      skus: p.skus
    }
  }

  return await SendRequest(config)
}
