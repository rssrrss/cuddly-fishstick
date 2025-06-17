import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface ApproveCancellationResponseV202309 extends Response { }

export interface ApproveCancellationParamV202309 extends ParamWithCipher {
  cancel_id: string
  idempotency_key?: string
}

export async function ApproveCancellationV202309(p: ApproveCancellationParamV202309): Promise<ApproveCancellationResponseV202309> {
  const config: RequestParam = {
    method: "POST",
    path: `/return_refund/202309/cancellations/${p.cancel_id}/approve`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      idempotency_key: p.idempotency_key
    },
  }

  return await SendRequest(config)
}
