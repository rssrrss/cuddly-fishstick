import axios, { AxiosRequestConfig, Method } from "axios"
import { Lazada } from ".."
import { GenerateSignature } from "./generate_signature"
import qs from "qs"

export interface SendRequestParam {
  base_url: string
  path: string
  method: Method
  access_token?: string
  params?: Record<string, string>
  payload?: unknown
}

export async function SendRequest(p: SendRequestParam): Promise<any> {
  const timestamp = Date.now().toString()

  const signParams: Record<string, string> = {
    app_key: Lazada.Config.app_key,
    sign_method: "sha256",
    timestamp,
  }

  if (p.access_token) {
    signParams.access_token = p.access_token
  }

  if (p.payload) {
    signParams.payload = JSON.stringify(p.payload)
  }

  if (p.params) {
    for (const key of Object.keys(p.params)) {
      signParams[key] = p.params[key]
    }
  }

  const sign = GenerateSignature({
    path: p.path,
    params: signParams,
  })

  const config: AxiosRequestConfig = {
    method: p.method,
    url: p.base_url + p.path,
  }

  if (p.method === "GET") {
    config.params = {
      ...signParams,
      sign,
    }
  } else if (p.method === "POST") {
    config.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    }

    const query: Record<string, string> = {
      ...signParams,
      sign,
    }

    if (p.payload) {
      query.payload = JSON.stringify(p.payload)
    }

    config.data = qs.stringify(query)
  }

  const response = (await axios(config)).data

  return response
}
