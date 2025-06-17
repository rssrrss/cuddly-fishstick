import crypto from 'crypto'
import { URL } from 'url'
import { DynamicObj } from '../type/util'
import { Tiktok } from '..'

export interface generateSignatureParam {
  url: string,
  body?: DynamicObj | FormData,
  contentType?: string
}

export function generateSignature(param: generateSignatureParam): string {
  const url = new URL(param.url)
  const path = url.pathname
  const secret = Tiktok.GetAppSecret()

  const sortedKeys = Array.from(url.searchParams.keys()).sort()
  let input = ''
  for (const key of sortedKeys) {
    const value = url.searchParams.get(key) || ''
    input += key + value
  }

  const contentType = param?.contentType ?? "application/json"

  const isMultipart = contentType.startsWith('multipart/form-data')
  let stringToSign = secret + path + input
  if (!isMultipart && param.body) {
    stringToSign += JSON.stringify(param.body)
  }
  stringToSign += secret

  const hmac = crypto.createHmac('sha256', secret)

  hmac.update(stringToSign)

  return hmac.digest('hex')
}
