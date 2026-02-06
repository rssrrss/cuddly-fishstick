import { Lazada } from "../.."
import { SendRequest } from "../../util/send_request"

export type CategorySuggestion = {
  categoryPath: string
  categoryName: string
  categoryId: string
}

export interface GetCategorySuggestionResponse {
  code: string
  data: {
    categorySuggestions: CategorySuggestion[]
  }
  request_id: string
}

export interface GetCategorySuggestionParam {
  access_token: string,
  product_name: string
}

export async function GetCategorySuggestion(p: GetCategorySuggestionParam): Promise<GetCategorySuggestionResponse> {
  return await SendRequest({
    base_url: Lazada.Config.host,
    path: '/product/category/suggestion/get',
    method: 'GET',
    params: {
      access_token: p.access_token,
      product_name: p.product_name
    }
  })
}
