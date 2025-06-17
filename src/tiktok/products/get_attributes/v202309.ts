import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"
import { CategoryVersion, Locale } from "../type"

export interface GetAttributesResponseV202309 extends Response {
  data: {
    attributes: {
      id: string,
      name: string,
      type: string,
      is_customizable: boolean,
      is_multiple_selection: boolean,
      is_required: boolean,
      values?: {
        id: string,
        name: string
      }[]
    }[]
  }
}

export interface GetAttributesParamV202309 extends ParamWithCipher {
  category_id: string
  locale?: Locale
  category_version?: CategoryVersion
}

export async function GetAttributesV202309(p: GetAttributesParamV202309): Promise<GetAttributesResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/product/202309/categories/${p.category_id}/attributes`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    }
  }

  return await SendRequest(config)
}
