import axios, { AxiosRequestConfig, Method } from "axios"
import { Primitive } from "../../../type"
import { GenerateUrl } from "./generate_url"
import { DynamicObj } from "../../../tiktok/type/util"

export interface SendRequestParam {
  method: Method,
  path: string,
  params?: Record<string, Primitive>,
  data?: DynamicObj | FormData,
  access_token?: string,
  shop_id?: string | number,
  headers?: Record<string, string>,
}

export async function SendRequest(p: SendRequestParam): Promise<any> {
  const config: AxiosRequestConfig = {
    method: p.method,
    url: GenerateUrl(p),
  }

  if (p.data != undefined) {
    config.data = p.data
  }

  return (await axios(config)).data
}
