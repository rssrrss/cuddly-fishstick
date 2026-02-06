import { Lazada } from "../..";
import { SendRequestParam } from "../../../shopee/v2/util/send_request";
import { SendRequest } from "../../util/send_request";

type RejectReason = {
  suggestion: string
  violationDetail: string
}

type ProductSku = {
  Status: string
  quantity: number
  product_weight: string
  Images: string[]
  SellerSku: string
  ShopSku: string
  Url: string

  package_width: string
  package_height: string
  package_length: string
  package_weight: string

  price: number
  special_price: number
  special_from_time: string
  special_to_time: string
  special_to_date: string

  Available: number
  SkuId: number
}

type ProductAttributes = {
  name: string
  description: string
  short_description: string

  brand: string
  warranty_type: string
  gift_wrapping: string
  name_engravement: string

  preorder: string
  preorder_days: number
}

type Product = {
  item_id: string
  created_time: string
  updated_time: string

  images: string
  marketImages: string

  primary_category: string
  status: string
  subStatus: string
  hiddenStatus: string
  hiddenReason: string

  trialProduct: string

  skus: ProductSku[]
  suspendedSkus: string[]

  rejectReason: RejectReason[]
  attributes: ProductAttributes
}

export interface GetProductsResponse {
  code: string
  data: {
    total_products: string
    products: Product[]
  }
  request_id: string
}

export interface GetProductsParam {
  access_token: string
  filter?: string
  update_before?: string
  create_before?: string
  offset?: string
  create_after?: string
  limit?: string
  options?: string
  sku_seller_list?: string[]
}

export async function GetProducts(p: GetProductsParam): Promise<GetProductsResponse> {
  const params: Record<string, string> = {}

  if (p.sku_seller_list) {
    params.sku_seller_list = JSON.stringify(p.sku_seller_list)
  }

  return await SendRequest({
    base_url: Lazada.Config.host,
    path: "/products/get",
    method: "GET",
    access_token: p.access_token,
    params
  })
}
