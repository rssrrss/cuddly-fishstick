import axios, { AxiosRequestConfig } from 'axios'
import { Response as BaseResponse } from '../../type/response'
import { ParamWithToken } from '../../type/param'
import { generateSignature } from '../../helper/generate_signature'
import { buildSignedUrl } from '../../helper/build_signed_url'
import { setAccessToken } from '../../helper/set_access_token'
import { RequestParam, SendRequest } from '../../helper/send_request'

type Status = "ALL" | "DRAFT" | "PENDING" | "FAILED" | "ACTIVATE" | "SELLER_DEACTIVATED" | "PLATFORM_DEACTIVATED" | "FREEZE" | "DELETED"
type CategoryVersion = "v1" | "v2"
type ListingPlatforms = "TOKOPEDIA" | "TIKTOK_SHOP"
type ListingQualityTiers = "POOR" | "FAIR" | "GOOD"
type AuditStatus = "AUDITING" | "FAILED" | "APPROVED"

type ExternalPriceSources = "SHOPIFY_COMPARE_AT_PRICE"
type PresaleType = "PRE_ORDER" | "MADE_TO_ORDER" | "CUSTOM"

interface Sku {
  id: string,
  seller_sku: string,
  price: {
    currency: string,
    tax_exclusive_price: string,
    sale_price: string
  },
  inventory: {
    warehouse_idd: string,
    quantity: number
  }[],
  list_price: {
    amount: string,
    currency: string
  },
  external_list_prices: {
    source: ExternalPriceSources,
    amount: string,
    currency: string
  }[],
  pre_sale: {
    type: PresaleType,
    fulfillment_type: {
      handling_duration_days: number,
      release_date: number
    }
  },
  sales_region: SalesRegions[],
  create_time: number,
  update_time: number,
  product_sync_fail_reasons: string[],
}

type SalesRegions = "BR" | "DE" | "ES" | "FR" | "GB" | "ID" | "IE" | "IT" | "JP" | "MX" | "MY" | "PH" | "SG" | "TH" | "US" | "VN"
type PreApprovedReasons = "KYC_PENDING" | "RESTRICTED_CATEGORY_PENDING"
type Platform = "TOKOPEDIA"
type PlatformStatus = "DRAFT" | "PENDING" | "FAILED" | "ACTIVATE" | "SELLER_DEACTIVATED" | "PLATFORM_DEACTIVATED" | "FREEZE" | "DELETED"

interface Products {
  id: string,
  title: string,
  status: Status,
  skus: Sku[],
  sales_regions: SalesRegions[],
  create_time: number,
  udpate_time: number,
  is_not_for_sale: boolean,
  recommended_categories: {
    id: string,
    local_name: string
  }[],
  listing_quality_tiers: ListingQualityTiers,
  integrated_platform_status: {
    platform: Platform,
    status: PlatformStatus
  }[],
  audit: {
    status: AuditStatus,
    pre_approved_reasons: PreApprovedReasons[]
  },
  product_families: {
    id: string,
    products: {
      id: string
    }[]
  }[]
}

export interface SearchProductsResponseV202502 extends BaseResponse {
  data: {
    total_count: number,
    products: Products[]
    next_page_token: string,
  }
}

export interface SearchProductsParamV202502 extends ParamWithToken {
  shop_cipher: string,
  page_size: number,
  page_token?: string,
  status?: Status,
  seller_skus?: string[],
  create_time_ge?: number,
  create_time_le?: number,
  update_time_ge?: number,
  update_time_le?: number,
  category_version?: CategoryVersion,
  listing_quality_tiers?: ListingQualityTiers[],
  listing_platforms?: ListingPlatforms[],
  audit_status?: AuditStatus[],
  sku_ids?: string[],
}

export async function SearchProductsV202502(p: SearchProductsParamV202502): Promise<SearchProductsResponseV202502> {
  const config: RequestParam = {
    method: "POST",
    path: `/product/202502/products/search`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      page_size: p.page_size,
      page_token: p.page_token,
    },
    data: {
      status: p.status,
      seller_skus: p.seller_skus,
      create_time_ge: p.create_time_ge,
      create_time_le: p.create_time_le,
      update_time_ge: p.update_time_ge,
      update_time_le: p.update_time_le,
      listing_quality_tiers: p.listing_quality_tiers,
      listing_platforms: p.listing_platforms,
      audit_status: p.audit_status,
      sku_ids: p.sku_ids
    }
  }

  return await SendRequest(config)
}
