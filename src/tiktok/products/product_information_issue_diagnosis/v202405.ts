import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface ProductInformationIssueDiagnosisResponseV202405 extends Response {
  data: {
    products: {
      id: string
      listing_quality: {
        current_tier: 'POOR' | 'FAIR' | 'GOOD'
        remaining_recommendations: number
      }
      diagnoses: {
        field: 'TITLE' | 'DESCRIPTION' | 'IMAGE' | 'ATTRIBUTE' | 'SIZE_CHART'
        diagnosis_results: {
          code: string
          how_to_solve: string
          quality_tier: 'FAIR' | 'GOOD'
        }[]
        suggestion: {
          seo_words: {
            text: string
          }[]
          smart_texts: {
            text: string
          }[]
          images: {
            height: number
            width: number
            uri: string
            url: string
            optimized_uri: string
            optimized_url: string
          }[]
        }
      }[]
    }
  }
}

export interface ProductInformationIssueDiagnosisParamV202405 extends ParamWithCipher {
  product_ids: string[]
}

export async function ProductInformationIssueDiagnosisV202405(p: ProductInformationIssueDiagnosisParamV202405): Promise<ProductInformationIssueDiagnosisResponseV202405> {
  const config: RequestParam = {
    method: "GET",
    path: `/product/202405/products/diagnoses`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      product_ids: p.product_ids
    }
  }

  return await SendRequest(config)
}
