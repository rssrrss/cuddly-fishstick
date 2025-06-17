import { ParamWithToken } from "../../type/param"
import { Response } from "../../type/response"
import { RequestParam, SendRequest } from "../../helper/send_request"

type Currency = 'BRL' | 'EUR' | 'GBP' | 'IDR' | 'JPY' | 'MXN' | 'MYR' | 'SGD' | 'THB' | 'USD' | 'VND'
type ExternalSource = 'SHOPIFY_COMPARE_AT_PRICE'

interface SkuPrice {
  amount?: string,
  currency: Currency,
  sale_price?: string,
}

interface SkuListPrice {
  amount: string,
  currency: Currency,
}

interface SkuExternalListPrice {
  source: ExternalSource,
  amount: string,
  currency: Currency
}

interface Sku {
  id: string,
  price: SkuPrice,
  list_price?: SkuListPrice
  external_list_prices?: SkuExternalListPrice[]
}

export interface UpdatePriceResponseV202309 extends Response {
}

export interface UpdatePriceParamV202309 extends ParamWithToken {
  shop_cipher: string,
  product_id: string,
  skus: Sku[]
}

export async function UpdatePriceV202309(p: UpdatePriceParamV202309): Promise<UpdatePriceResponseV202309> {
  const config: RequestParam = {
    method: 'POST',
    path: `/product/202309/products/${p.product_id}/prices/update`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      skus: p.skus
    }
  }

  return await SendRequest(config)
}
