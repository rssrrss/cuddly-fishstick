import { ParamWithCipher } from "../../type/param"
import { RequestParam, SendRequest } from "../../helper/send_request"

export interface GetPackageDetailResponseV202309 extends Response {
  data: {
    orders: {
      id: string,
      skus: {
        id: string,
        image_url: string,
        name: string,
        quantity: number
      }[]
    }[]
  }
}

export interface GetPackageDetailParamV202309 extends ParamWithCipher {
  package_id: string
}

export async function GetPackageDetailV202309(p: GetPackageDetailParamV202309): Promise<GetPackageDetailResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/fulfillment/202309/packages/${p.package_id}`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    }
  }

  return await SendRequest(config)
}
