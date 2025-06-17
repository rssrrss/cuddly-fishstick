import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"
import { Currency } from "../../products/type"
import { RequestParam, SendRequest } from "../../helper/send_request"

export interface GetPriceDetailResponseV202407LineItems {
  currency: Currency,
  id: string,
  net_price_amount: string,
  payment: string,
  shipping_fee_deduction_platform: string,
  shipping_fee_deduction_platform_voucher: string,
  shipping_fee_deduction_seller: string,
  shipping_list_price: string,
  shipping_sale_price: string,
  sku_gift_original_price: string,
  sku_list_price: string,
  sku_sale_price: string,
  subtotal: string,
  subtotal_deduction_platform: string,
  subtotal_deduction_platform_voucher: string,
  subtotal_deduction_seller: string,
  subtotal_tax_amount: string,
  tax_amount: string,
  total: string,
  voucher_deduction_platform: string,
  voucher_deduction_seller: string
}

export interface GetPriceDetailResponseV202407 extends Response {
  data: {
    currency: Currency,
    net_price_amount: string,
    payment: string,
    shipping_fee_deduction_platform: string,
    shipping_fee_deduction_platform_voucher: string,
    shipping_fee_deduction_seller: string,
    shipping_list_price: string,
    shipping_sale_price: string,
    sku_list_price: string,
    sku_sale_price: string,
    subtotal: string,
    subtotal_deduction_platform: string,
    subtotal_deduction_seller: string,
    subtotal_tax_amoutn: string,
    tax_amount: string,
    total: string,
    voucher_deduction_platform: string,
    voucher_deduction_seller: string
    line_items: GetPriceDetailResponseV202407LineItems[]
  }
}

export interface GetPriceDetailParamV202407 extends ParamWithCipher {
  order_id: string
}

export async function GetPriceDetailV202407(p: GetPriceDetailParamV202407): Promise<GetPriceDetailResponseV202407> {
  const config: RequestParam = {
    method: "GET",
    path: `/order/202407/orders/${p.order_id}/price_detail`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    }
  }

  return await SendRequest(config)
}
