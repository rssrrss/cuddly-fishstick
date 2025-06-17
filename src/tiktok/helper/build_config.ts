import { AxiosRequestConfig } from "axios"
import { RequestParam } from "./send_request"

export function BuildConfig(p: RequestParam): AxiosRequestConfig {
  const is_signed = p?.isSigned ?? true
  const has_data = p?.data != undefined

  const config: AxiosRequestConfig = {
    method: p.method,
    params: p.params ?? {}
  }

  if (p.headers) {
    config.headers = p.headers
  } else {
    if (p.accessToken) {
      config.headers = {
        'x-tts-access-token': p.accessToken
      }
    }
  }

  if (!is_signed) {
    config.url = p.path

    return config
  }

  if (has_data) {
    config.data = p.data
  }

  return config
}
