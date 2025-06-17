import crypto from "crypto"
import { Shopee } from "../.."

export interface GenerateSignatureParam {
  path: string,
  time: number,
  access_token?: string,
  shop_id?: string | number
}

export function GenerateSignature(p: GenerateSignatureParam): string {
  let base = `${Shopee.V2.GetPartnerID()}${p.path}${p.time}`

  if (p.access_token != undefined) base += `${p.access_token}`
  if (p.shop_id != undefined) base += `${p.shop_id}`

  return crypto
    .createHmac("sha256", Shopee.V2.GetPartnerKey())
    .update(base)
    .digest('hex')
}
