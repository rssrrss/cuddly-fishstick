import { ITEM_STATUS, Param, Response } from "../../type"
import { SendRequest, SendRequestParam } from "../../util/send_request"

export interface CategoryRecommendResponse extends Response {
  response: {
    category_id: number[]
  }
}

export interface CategoryRecommendParam extends Param {
  item_name: string,
  image?: string
}

export async function CategoryRecommend(p: CategoryRecommendParam): Promise<CategoryRecommendResponse> {
  const param: SendRequestParam = {
    method: "GET",
    path: "/api/v2/product/category_recommend",
    access_token: p.access_token,
    shop_id: p.shop_id,
    params: {
      item_name: p.item_name,
      image: p.image
    }
  }

  return await SendRequest(param)
}
