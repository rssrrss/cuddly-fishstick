import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithToken } from "../../type/param"
import { Response } from "../../type/response"
import { Locale } from "../type"

export interface SearchSizeChartsResponseV202407 extends Response {
  data: {
    total_count: number
    next_page_token: string
    size_chart: {
      template_id: string
      template_name: string
      images: {
        uri: string
        url: string
        locale: string
      }[]
    }[]
  }
}

export interface SearchSizeChartsParamV202407 extends ParamWithToken {
  page_token?: string
  locales?: Locale[]
  ids: string[]
  keyword: string
}

export async function SearchSizeChartsV202407(p: SearchSizeChartsParamV202407): Promise<SearchSizeChartsResponseV202407> {
  const config: RequestParam = {
    method: "POST",
    path: `/product/202407/sizecharts/search`,
    accessToken: p.accessToken,
    params: {
      page_token: p.page_token,
      locales: p.locales,
    },
    data: {
      ids: p.ids,
      keyword: p.keyword
    }
  }

  return await SendRequest(config)
}
