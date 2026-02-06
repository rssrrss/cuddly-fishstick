import { Lazada } from "../..";
import { SendRequest } from "../../util/send_request";

type ImageSequence = {
  score: string
  needSuggest: boolean
  isDistinct: boolean
  url: string[]
}

type ProductSku = {
  Status: string
  quantity: number

  ImageSequence: ImageSequence

  product_weight: string
  Images: string[]

  SellerSku: string
  ShopSku: string
  Url: string

  coming_soon: string

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

type VariationItem = {
  has_image: string
  name: string
  options: unknown[]
  label: string
  customize: string
}

type Variation = {
  variation1?: VariationItem
  variation2?: VariationItem
  variation3?: VariationItem
  variation4?: VariationItem
}

type RejectReason = {
  suggestion: string
  violationDetail: string
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

type ProductDetail = {
  item_id: string

  created_time: string
  updated_time: string

  images: string
  marketImages: string

  imageSequence: ImageSequence

  skus: ProductSku[]
  suspendedSkus: unknown[]

  primary_category: string

  status: string
  subStatus: string
  hiddenStatus: string
  hiddenReason: string

  trialProduct: string

  bizSupplement: {
    globalPlusProductStatus: number
  }

  variation: Variation

  rejectReason: RejectReason[]
  attributes: ProductAttributes
}

export interface GetProductItemParam {
  access_token: string
  item_id: string
}

export interface GetProductItemResponse {
  code: string
  data: ProductDetail
  request_id: string
}

export async function GetProductItem(p: GetProductItemParam): Promise<GetProductItemResponse> {
  return await SendRequest({
    base_url: Lazada.Config.host,
    path: "/product/item/get",
    method: "GET",
    access_token: p.access_token,
    params: {
      item_id: p.item_id
    }
  })
}
