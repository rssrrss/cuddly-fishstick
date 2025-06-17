import { Response as BaseResponse } from '../../type/response'
import { ParamWithToken } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

type ProductStatus = "PUBLISHED" | "UNPUBLISHED" | "DRAFT" | "DELETED"

interface Sku {
  id: string,
  seller_sku: string
}

interface GlobalProducts {
  id: string,
  title: string,
  status: string,
  skus: Sku[]
  create_time: number,
  update_time: number
}

export interface SearchGlobalProductsResponseV202312 extends BaseResponse {
  data: {
    next_page_token: string,
    total_count: number,
    global_products: GlobalProducts[]
  }
}

export interface SearchGlobalProductsParamV202312 extends ParamWithToken {
  page_size: number,
  page_token?: string,
  status?: ProductStatus,
  seller_skus?: string[],
  create_time_ge?: number,
  create_time_le?: number,
  update_time_ge?: number,
  update_time_le?: number
}

export async function SearchGlobalProductsV202312(p: SearchGlobalProductsParamV202312): Promise<SearchGlobalProductsResponseV202312> {
  const config: RequestParam = {
    method: 'POST',
    path: `/product/202312/global_products/search`,
    accessToken: p.accessToken,
    params: {
      page_size: p.page_size,
      page_token: p.page_token,
    },
    data: {
      status: p.status,
      seller_skus: p.seller_skus,
      create_time_ge: p.create_time_ge,
      create_time_le: p.create_time_le,
      update_time_ge: p.update_time_ge,
      update_time_le: p.update_time_le
    },
  }

  return await SendRequest(config)
}
