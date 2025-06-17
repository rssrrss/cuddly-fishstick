import axios from "axios"
import FormData from 'form-data'
import { Readable } from 'stream'

import { Response } from "../../type/response"
import { ParamWithCipher, ParamWithToken } from "../../type/param"
import { RequestParam, SendRequest } from "../../helper/send_request"

type UseCase = "MAIN_IMAGE" | "ATTRIBUTE_IMAGE" | "DESCRIPTION_IMAGE" | "CERTIFICATION_IMAGE" | "SIZE_CHART_IMAGE"

export interface UploadProductImageResponseV202309 extends Response {
  data: {
    uri: string,
    url: string,
    height: number,
    width: number,
    use_case: UseCase
  }
}

export interface UploadProductImageParamV202309 extends ParamWithToken {
  url: string,
  use_case?: UseCase
}

export async function UploadProductImageV202309(p: UploadProductImageParamV202309): Promise<UploadProductImageResponseV202309> {
  const image = await axios.get(p.url, { responseType: 'stream' })

  const form = new FormData()

  form.append('data', image.data as Readable, {
    filename: p.url,
    contentType: image.headers['content-type']
  })

  const use_case = p.use_case ?? undefined
  if (use_case) {
    form.append('use_case', use_case)
  }

  const headers = form.getHeaders()
  headers['x-tts-access-token'] = p.accessToken

  const config: RequestParam = {
    method: 'POST',
    path: `/product/202309/images/upload`,
    data: form,
    contentType: 'multipart/form-data',
    headers
  }

  return await SendRequest(config)
}
