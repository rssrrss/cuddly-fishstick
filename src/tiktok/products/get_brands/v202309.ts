import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"
import { CategoryVersion } from "../type"

export interface GetBrandsResponseV202309 extends Response {
  data: {
    total_count: number
    next_page_token: string
    brands: {
      id: string
      name: string
      authorized_status: string
      is_t1_brand: boolean
      brand_status: 'AVAILABLE' | 'UNAVAILABLE'
    }
  }
}

export interface GetBrandsParamV202309 extends ParamWithCipher {
  category_id?: string
  is_authorized?: boolean
  brand_name?: string
  page_size: number
  page_token?: string
  category_version: CategoryVersion
}

export async function GetBrandsV202309(p: GetBrandsParamV202309): Promise<GetBrandsResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/product/202309/brands`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    }
  }

  return await SendRequest(config)
}
