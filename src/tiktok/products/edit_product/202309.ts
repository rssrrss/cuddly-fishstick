import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

interface MainImage {
  uri: string
}

interface Sku {
  id?: string,
  sales_attributes?: {
    id?: string,
    name?: string,
    value_id?: string,
    value_name?: string,
    sku_img?: {
      uri: string
    },
    supplementary_sku_images?: {
      uri: string
    }[],
  }[],
  seller_sku?: string,
  price?: {
    amount?: string,
    currency: string,
    sale_price?: string
  },
  external_sku_id?: string,
  identifier_code?: {
    code?: string,
    type?: string
  },
  inventory?: {
    warehouse_id: string,
    quantity?: number
  }[],
  combined_skus?: {
    product_id: string,
    sku_id: string,
    sku_count: number,
  }[],
  sku_unit_count?: string,
  external_urls?: string[],
  extra_identifier_codes?: string[],
  pre_sale?: {
    type?: string,
    fulfillment_type?: {
      handling_duration_days?: number,
      release_date?: number,
    }
  },
  list_price?: {
    amount: string,
    currency: string
  },
  external_list_prices?: {
    source: string,
    amount: string,
    currency: string
  }[],
}

interface CertificationFile {
  id: string,
  name: string,
  format: string
}

interface CertificationImage {
  uri: string
}

interface Certification {
  id: string
  images?: CertificationImage[],
  files?: CertificationFile[],
  expiration_date?: number
}

interface PackageWeight {
  value: string,
  unit: string
}

interface ProductAttributeValue {
  id?: string,
  name?: string
}

interface ProductAttribute {
  id: string,
  values: ProductAttributeValue[]
}

interface SizeChartTemplate {
  uri: string
}

interface SizeChartImage {
  uri: string
}

interface SizeChart {
  image?: SizeChartImage,
  template?: SizeChartTemplate
}

interface PackageDimensions {
  length: string,
  width: string,
  height: string,
  unit: string
}

interface Video {
  id: string
}

export interface EditProductResponseV202309 extends Response { }

export interface EditProductParamV202309 extends ParamWithCipher {
  product_id: string,
  description: string,
  category_id: string,
  brand_id?: string,
  main_images: MainImage[],
  skus: Sku[],
  title?: string,
  is_cod_allowed?: boolean,
  certifications?: Certification[],
  package_weight: PackageWeight,
  product_attributes?: ProductAttribute[],
  size_chart?: SizeChart,
  package_dimensions?: PackageDimensions,
  external_product_id?: string,
  delivery_option_ids?: string[],
  video?: Video,
  category_version?: string,
  manufacturer_ids?: string[],
  responsible_person_ids?: string[],
  listing_platforms?: string[],
  shipping_insurance_requirement?: string,
  is_pre_owned?: boolean,
  minimum_order_quantity?: number,
}

export async function EditProductV202309(p: EditProductParamV202309): Promise<EditProductResponseV202309> {
  const config: RequestParam = {
    method: 'PUT',
    path: `/product/202309/products/${p.product_id}`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      description: p.description,
      category_id: p.category_id, brand_id: p.brand_id,
      main_images: p.main_images,
      skus: p.skus,
      title: p.title,
      is_cod_allowed: p.is_cod_allowed,
      certifications: p.certifications,
      package_weight: p.package_weight,
      product_attributes: p.product_attributes,
      size_chart: p.size_chart,
      package_dimensions: p.package_dimensions,
      external_product_id: p.external_product_id,
      delivery_option_ids: p.delivery_option_ids,
      video: p.video,
      category_version: p.category_version,
      manufacturer_ids: p.manufacturer_ids,
      responsible_person_ids: p.responsible_person_ids,
      listing_platforms: p.listing_platforms,
      shipping_insurance_requirement: p.shipping_insurance_requirement,
      is_pre_owned: p.is_pre_owned,
      minimum_order_quantity: p.minimum_order_quantity,
    }
  }

  return await SendRequest(config)
}
