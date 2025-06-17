import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher, ParamWithToken } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

interface Category {
  id: string,
  parent_id: string,
  local_name: string,
  is_leaf: boolean,
  permission_statuses: string[]
}

export interface RecommendCategoryResponseV202309 extends BaseResponse {
  data: {
    leaf_category_id: string,
    categories: Category[]
  }
}

interface Image {
  uri: string
}

export interface RecommendCategoryParamV202309 extends ParamWithCipher {
  productTitle: string,
  description?: string,
  images?: Image[],
  categoryVersion?: string, // v1
  listingPlatform?: string, // TIKTOK_SHOP, TOKOPEDIA
}

export async function RecommendCategoryV202309(p: RecommendCategoryParamV202309): Promise<RecommendCategoryResponseV202309> {
  const config: RequestParam = {
    method: 'POST',
    path: `/product/202309/categories/recommend`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      product_title: p.productTitle,
      description: p.description,
      images: p.images,
      category_version: p.categoryVersion,
      listing_platform: p.listingPlatform,
    },
  }

  return await SendRequest(config)
}
