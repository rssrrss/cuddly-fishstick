import { Lazada } from "../.."
import { SendRequest } from "../../util/send_request"

export interface MigrateImageResponse {
  code: string
  data: {
    image: {
      hash_code: string
      url: string
    }
  }
  request_id: string
}

export interface MigrateImageParam {
  access_token: string
  payload: unknown
}

export async function MigrateImage(p: MigrateImageParam): Promise<MigrateImageResponse> {
  return await SendRequest({
    base_url: Lazada.Config.host,
    path: "/image/migrate",
    method: "POST",
    access_token: p.access_token,
    payload: p.payload
  })
}
