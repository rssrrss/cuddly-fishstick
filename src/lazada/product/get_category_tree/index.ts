import { Lazada } from "../.."
import { SendRequest, SendRequestParam } from "../../util/send_request"

export type CategoryTree = {
  category_id: number
  name: string
  var: boolean
  leaf: boolean
  children?: CategoryTree[]
}

export interface GetCategoryTreeResponse {
  code: string
  data: CategoryTree[]
  request_id: string
}

export interface GetCategoryTreeParam {
  access_token: string,
  language_code?: string
}

export async function GetCategoryTree(p: GetCategoryTreeParam): Promise<GetCategoryTreeResponse> {
  const param: SendRequestParam = {
    base_url: Lazada.Config.host,
    path: '/category/tree/get',
    method: "GET",
    params: {
      access_token: p.access_token,
      language_code: p.language_code ?? 'id-ID'
    }
  }

  return await SendRequest(param)
}
