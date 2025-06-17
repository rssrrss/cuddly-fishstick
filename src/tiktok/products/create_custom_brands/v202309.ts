import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithToken } from "../../type/param"
import { Response } from "../../type/response"

export interface CreateCustomBrandsResponseV202309 extends Response {
  data: {
    id: string
  }
}

export interface CreateCustomBrandsParamV202309 extends ParamWithToken {
  name: string
}

export async function CreateCustomBrandsV202309(p: CreateCustomBrandsParamV202309): Promise<CreateCustomBrandsResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/product/202309/brands`,
    accessToken: p.accessToken,
    data: {
      name: p.name
    }
  }

  return await SendRequest(config)
}
