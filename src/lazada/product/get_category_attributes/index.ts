import { Lazada } from "../.."
import { SendRequest } from "../../util/send_request";

export interface GetCategoryAttributesResponse {
  code: string
  data: {
    unit: {
      precision: string
      type: unknown[]
      numericMin: string
      numericMax: string
    }
    advanced: {
      is_key_prop: number
    }
    is_sale_prop: number
    name: string
    input_type: string
    options: {
      name: string
      en_name: string
      id: string
    }[]
    is_mandatory: number
    attribute_type: string
    label: string
    id: string
  }[]
  request_id: string
}

export interface GetCategoryAttributesParam {
  access_token: string
  primary_category_id: string
  language_code?: "id-ID" | "en_US"
}

export async function GetCategoryAttributes(p: GetCategoryAttributesParam): Promise<GetCategoryAttributesResponse> {
  return await SendRequest({
    base_url: Lazada.Config.host,
    path: "/category/attributes/get",
    method: "GET",
    access_token: p.access_token,
    params: {
      primary_category_id: p.primary_category_id,
      language_code: p.language_code ?? 'id-ID'
    }
  })
}
