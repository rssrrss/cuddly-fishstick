import { Time } from "crispy-dollop-x"
import { GenerateSignature } from "./generate_signature"
import { Primitive } from "../../../type"
import { Shopee } from "../.."

export interface GenerateUrlParam {
  path: string,
  access_token?: string,
  shop_id?: string | number,
  params?: Record<string, Primitive>
}

export function GenerateUrl(p: GenerateUrlParam): string {
  const url = new URL(`${Shopee.V2.GetHost()}${p.path}`)
  const time = Time.getUnixTimestamp()

  url.searchParams.set('partner_id', Shopee.V2.GetPartnerID() + '')
  url.searchParams.set('timestamp', `${time}`)
  url.searchParams.set('sign', GenerateSignature({
    path: p.path,
    time: time,
    shop_id: p.shop_id,
    access_token: p.access_token,
  }))

  if (p.shop_id! != undefined) url.searchParams.set('shop_id', `${p.shop_id}`)
  if (p.access_token != undefined) url.searchParams.set('access_token', p.access_token)

  if (!p.params) {
    return url.toString()
  }

  let arrayParams = ''

  for (const [key, value] of Object.entries(p.params)) {
    if (value == undefined || value == null) continue

    if (!(Array.isArray(value))) {
      url.searchParams.set(key, String(value))
      continue
    }

    for (let i = 0; i < value.length; i++) {
      const v = value[i]

      arrayParams += `&${key}=${v}`
    }
  }

  return url.toString() + arrayParams
}
