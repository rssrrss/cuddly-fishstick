import { Time } from 'crispy-dollop-x'

import { BaseURL } from "../type/var"
import { Tiktok } from '..'
import { Primitive } from '../../type'

export function buildSignedUrl(
  path: string,
  queries?: Record<string, Primitive>,
  host: string = BaseURL,
): string {
  const url = new URL(`${host}${path}`)

  url.searchParams.set('app_key', Tiktok.GetAppKey())
  url.searchParams.set('app_secret', Tiktok.GetAppSecret())
  url.searchParams.set('timestamp', `${Time.getUnixTimestamp()}`)

  if (!queries) {
    return url.toString()
  }

  for (const [key, value] of Object.entries(queries)) {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value))
    }
  }

  return url.toString()
}
