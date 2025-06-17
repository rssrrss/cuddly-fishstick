import axios, { AxiosRequestConfig, Method } from "axios"
import { buildSignedUrl } from "./build_signed_url"
import { generateSignature, generateSignatureParam, } from "./generate_signature"
import { BuildConfig } from "./build_config"
import { DynamicObj } from "../type/util"
import { Primitive } from "../../type"

export interface RequestParam {
  method: Method,
  path: string,
  params?: Record<string, Primitive>,
  accessToken?: string,
  data?: DynamicObj | FormData,
  contentType?: string,
  isSigned?: boolean,
  headers?: Record<string, string>,
  host?: string
}

export async function SendRequest(p: RequestParam): Promise<any> {
  const config: AxiosRequestConfig = BuildConfig(p)

  config.url = buildSignedUrl(p.path, p.params, p.host)

  const is_signed = p?.isSigned ?? true
  if (!is_signed) {
    return (await axios(config)).data
  }

  const signParam: generateSignatureParam = {
    url: config.url,
    body: p.data,
    contentType: p.contentType
  }

  config.params.sign = generateSignature(signParam)

  return (await axios(config)).data
}
