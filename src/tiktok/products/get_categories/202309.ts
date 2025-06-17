import { Response as BaseResponse } from '../../type/response'
import { ParamWithToken } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

interface Category {
  id: string,
  parent_id: string,
  local_name: string,
  is_leaf: boolean,
  permission_statuses: string[]
}

export interface GetCategoriesResponseV202309 extends BaseResponse {
  data: {
    categories: Category[]
  }
}

export interface GetCategoriesParamV202309 extends ParamWithToken {
  shopCipher: string,
  locale: string,
  keyword: string,
  categoryVersion: string,
  listingPlatform: string
}

export async function GetCategoriesV202309(p: GetCategoriesParamV202309): Promise<GetCategoriesResponseV202309> {
  const config: RequestParam = {
    method: 'GET',
    path: `/product/202309/categories`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shopCipher,
      locale: p.locale,
      keyword: p.keyword,
      category_version: p.categoryVersion,
      listing_platform: p.listingPlatform
    }
  }

  return await SendRequest(config)
}
