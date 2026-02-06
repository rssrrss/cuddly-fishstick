import { Lazada } from "../.."
import { SendRequest } from "../../util/send_request"

type SellerInfo = {
  name_company: string
  logo_url: string
  name: string

  verified: string
  marketplaceEaseMode: string
  cb: string

  location: string
  seller_id: string
  short_code: string
  email: string

  status: string
}

export interface GetSellerResponse {
  code: string
  data: SellerInfo
  request_id: string
}

export interface GetSellerParam {
  access_token: string
}

export async function GetSeller(p: GetSellerParam): Promise<GetSellerResponse> {
  return await SendRequest({
    base_url: Lazada.Config.host,
    path: "/seller/get",
    method: "GET",
    access_token: p.access_token
  })
}
