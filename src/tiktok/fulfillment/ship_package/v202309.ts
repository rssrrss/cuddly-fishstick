import { ParamWithCipher } from "../../type/param"
import { RequestParam, SendRequest } from "../../helper/send_request"

export interface ShipPackageResponseV202309 extends Response { }

export interface ShipPackageParamV202309 extends ParamWithCipher {
  package_id: string
}

export async function ShipPackageV202309(p: ShipPackageParamV202309): Promise<ShipPackageResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/fulfillment/202309/packages/${p.package_id}/ship`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {}
  }

  return await SendRequest(config)
}
