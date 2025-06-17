import axios from "axios";
import FormData from 'form-data'
import { Readable } from 'stream'

import { Param, Response } from "../../type";
import { SendRequest, SendRequestParam } from "../../util/send_request";

export interface UploadImageResponse extends Response {
  response: {
    image_info?: {
      image_id: string,
      image_url_list?: {
        image_url_region: string,
        image_url: string
      }[]
    },
    image_info_list?: {
      id: number,
      error?: {},
      image_info?: {
        image_id: string,
        image_url_list?: {
          image_url_region: string,
          image_url: string
        }[]
      }
    }[]
  }
}

export interface UploadImageParam extends Param {
  url: string
}

export async function UploadImage(p: UploadImageParam): Promise<UploadImageResponse> {
  const image = await axios.get(p.url, { responseType: 'stream' })

  const form = new FormData()

  form.append('image', image.data as Readable, {
    filename: p.url,
    contentType: image.headers['content-type']
  })

  const headers = form.getHeaders()

  const param: SendRequestParam = {
    method: 'POST',
    path: '/api/v2/media_space/upload_image',
    access_token: p.access_token,
    shop_id: p.shop_id,
    data: form,
    headers
  }

  return await SendRequest(param)
}
