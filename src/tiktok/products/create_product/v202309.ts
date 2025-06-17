import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"
import { Currency } from "../type"

interface ResponseSkuSalesAttribute {
  id: string,
  value_id: string
}

interface ResponseSku {
  id: string,
  seller_sku: string,
  sales_attributes: ResponseSkuSalesAttribute,
  external_sku_id: string
}

export interface CreateProductResponseV202309 extends Response {
  data: {
    product_id: string,
    skus: ResponseSku[],
    warnings: {
      message: string
    }
  }
}

export interface CreateProductParamV202309MainImage {
  uri: string
}

export interface CreateProductParamV202309PackageWeight {
  value: string,
  unit: string
}

export interface CreateProductParamV202309SalesAttribute {
  name: string,
  value_name: string
}

export interface CreateProductParamV202309Sku {
  seller_sku: string,
  inventory: CreateProductParamV202309SkuInventory[],
  price: CreateProductParamV202309SkuPrice,
  sales_attributes?: CreateProductParamV202309SalesAttribute[],
}

export interface CreateProductParamV202309SkuInventory {
  warehouse_id: string,
  quantity: number
}

export interface CreateProductParamV202309SkuPrice {
  amount: string,
  currency: Currency
}

export interface CreateProductParamV202309 extends ParamWithCipher {
  category_id: string,
  save_mode: string,
  title: string,
  description: string,
  main_images: CreateProductParamV202309MainImage[],
  package_weight: CreateProductParamV202309PackageWeight,
  skus: CreateProductParamV202309Sku[],
  category_version: string
}

export async function CreateProductV202309(p: CreateProductParamV202309): Promise<CreateProductResponseV202309> {
  const config: RequestParam = {
    method: 'POST',
    path: `/product/202309/products`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      save_mode: p.save_mode,
      category_id: p.category_id,
      title: p.title,
      description: p.description,
      main_images: p.main_images,
      package_weight: p.package_weight,
      skus: p.skus,
      category_version: p.category_version
    }
  }

  return await SendRequest(config)
}
