import { Response as BaseResponse } from '../../type/response'
import { ParamWithToken } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

type ListingQualityTiers = "POOR" | "FAIR" | "GOOD"
type Status = "ALL" | "DRAFT" | "PENDING" | "FAILED" | "ACTIVATE" | "SELLER_DEACTIVATED" | "PLATFORM_DEACTIVATED" | "FREEZE" | "DELETED"
type PlatformStatus = "DRAFT" | "PENDING" | "FAILED" | "ACTIVATE" | "SELLER_DEACTIVATED" | "PLATFORM_DEACTIVATED" | "FREEZE" | "DELETED"

interface CategoryChain {
  id: string
  parent_id: string,
  local_name: string,
  is_leaf: boolean
}

interface Brand {
  id: string,
  name: string
}

interface MainImage {
  height: number,
  width: number,
  thumb_urls: string[],
  uri: string,
  urls: string[]
}

interface Video {
  id: string,
  cover_url: string,
  format: string,
  url: string,
  width: number,
  height: number,
  size: number
}

interface PackageDimensions {
  length: string,
  width: string,
  height: string,
  unit: string
}

interface PackageWeight {
  value: string,
  unit: string
}

interface SupplementarySkuImage {
  uri: string,
  height: number,
  width: number,
  thumb_urls: string[],
  urls: string[]
}

interface CombinedSku {
  product_id: string,
  sku_id: string,
  sku_count: number
}

interface Sku {
  id: string,
  seller_sku: string,
  price: SkuPrice,
  inventory: SkuInventory[],
  identifier_code: SkuIdentifierCode,
  sales_attributes: SkuSalesAttribute[]
  external_sku_id: string,
  combined_skus: CombinedSku[],
  global_listing_policy: SkuGlobalListingPolicy,
  sku_unit_count: string,
  external_urls: string[],
  extra_identifier_codes: string[],
  pre_sale: SkuPreSale,
  list_price: SkuListPrice,
  external_list_prices: SkuExternalListPrice[]
}

interface SkuPrice {
  tax_exclusive_price: string,
  sale_price: string,
  currency: string,
  unit_price: string
}

interface SkuInventory {
  warehouse_id: string,
  quantity: number
}

interface SkuIdentifierCode {
  code: string,
  type: string
}

interface SkuGlobalListingPolicy {
  price_sync: boolean,
  inventory_type: string,
  replicate_source: SkuGlobalListingPolicyReplicateSource
}

interface SkuGlobalListingPolicyReplicateSource {
  product_id: string,
  shop_id: string,
  sku_id: string
}

interface SkuPreSale {
  type: string,
  fulfillment_type: SkuPreSaleFulfillmentType
}

interface SkuPreSaleFulfillmentType {
  handling_duration_days: number,
  release_date: number
}

interface SkuListPrice {
  amount: string,
  currency: string
}

interface SkuSalesAttribute {
  id: string,
  name: string,
  value_id: string,
  value_name: string,
  sku_img: SkuSalesAttributeSkuImg,
  supplementary_sku_image: SupplementarySkuImage[],
}

interface SkuSalesAttributeSkuImg {
  height: number,
  width: number,
  thumb_urls: string[],
  uri: string,
  urls: string[]
}

interface SkuExternalListPrice {
  source: string,
  amount: string,
  currency: string
}

interface Certification {
  id: string,
  title: string,
  files: CertificationFiles[],
  images: CertificationImage[],
  expiration_date: number
}

interface SizeChart {
  image: SizeChartImage,
  template: SizeChartTemplate,
}

interface SizeChartImage {
  height: number,
  width: number,
  thumb_urls: string[],
  uri: string,
  urls: string[]
}

interface SizeChartTemplate {
  id: string
}

interface CertificationFiles {
  id: string,
  urls: string[],
  name: string,
  format: string
}

interface CertificationImage {
  height: number,
  width: number,
  thumb_urls: string[],
  uri: string,
  urls: string[]
}

interface ProductAttributes {
  id: string,
  name: string,
  values: ProductAttributesValues[]
}

interface ProductAttributesValues {
  id: string,
  name: string
}

interface AuditFailedReason {
  position: string,
  reasons: string[],
  suggestions: string[],
  listing_platform: string
}

interface DeliveryOption {
  id: string,
  name: string,
  is_available: boolean
}

interface RecommendedCategory {
  id: string,
  local_name: string
}

interface IntegratedPlatformStatus {
  platform: string,
  status: PlatformStatus
}

interface SkuMapping {
  global_sku_id: string,
  local_sku_id: string,
  sales_attribute_mappings: SkuMappingSalesAttributeMapping[],
}

interface SkuMappingSalesAttributeMapping {
  local_attribute_id: string,
  global_attribute_id: string,
  local_value_id: string,
  global_value_id: string
}

interface Audit {
  status: string,
  pre_approved_reasons: string[]
}

interface GlobalProductAssociation {
  global_product_id: string,
  sku_mappings: SkuMapping[],
}

interface PrescriptionRequirement {
  needs_prescription: boolean
}

interface ProductFamily {
  id: string,
  products: ProductFamilyProduct[],
}

interface ProductFamilyProduct {
  id: string
}

export interface GetProductResponseV202309 extends BaseResponse {
  data: {
    id: string,
    status: Status,
    title: string,
    category_chains: CategoryChain[],
    brand: Brand,
    main_images: MainImage[],
    video: Video,
    description: string,
    package_dimensions: PackageDimensions,
    package_weight: PackageWeight,
    skus: Sku[],
    certifications: Certification[],
    size_chart: SizeChart,
    is_cod_allowed: boolean,
    product_attributes: ProductAttributes[],
    audit_failed_reasons: AuditFailedReason[],
    update_time: number,
    create_time: number,
    delivery_options: DeliveryOption[],
    external_product_id: string,
    product_types: string[],
    is_not_for_sale: boolean,
    recommended_categories: RecommendedCategory[],
    manufacturer_ids: string[],
    responsible_person_ids: string[],
    listing_quality_tier: ListingQualityTiers,
    integrated_platform_statues: IntegratedPlatformStatus[],
    shipping_insurance_requirement: string,
    minimum_order_quantity: number,
    is_pre_owned: boolean,
    audit: Audit,
    global_product_association: GlobalProductAssociation,
    prescription_requirement: PrescriptionRequirement,
    product_families: ProductFamily[],
  }
}

export interface GetProductParamV202309 extends ParamWithToken {
  shop_cipher: string,
  product_id: string,
  return_under_review_version?: boolean
  return_draft_version?: boolean
}

export async function GetProductV202309(p: GetProductParamV202309): Promise<GetProductResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/product/202309/products/${p.product_id}`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      return_under_review_version: `${p.return_under_review_version}`,
      return_draft_version: `${p.return_draft_version}`,
    },
  }

  return await SendRequest(config)
}
