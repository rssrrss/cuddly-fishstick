import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface OptimizedImagesResponseV202404 extends Response {
  data: {
    images: {
      height: number
      width: number
      original_uri: string
      original_url: string
      optimized_uri: string
      optimized_url: string
      optimize_status: 'SUCCESS' | 'IGNORE' | 'PROCESSING'
    }[]
  }
}

export type OptimizationMode = 'WHITE_BACKGROUND'

export interface OptimizedImagesParamV202404 extends ParamWithCipher {
  images: {
    uri: string
    optimization_mode: OptimizationMode[]
  }[]
}

export async function OptimizedImagesV202404(p: OptimizedImagesParamV202404): Promise<OptimizedImagesResponseV202404> {
  const config: RequestParam = {
    method: "POST",
    path: `/product/202404/images/optimize`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      images: p.images
    }
  }

  return await SendRequest(config)
}
