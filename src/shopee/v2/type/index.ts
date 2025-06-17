export interface ShopeeConfig {
  partner_id: number,
  partner_key: string
}

export interface Response {
  error: string,
  message: string,
  warning: string,
  request_id: string,
  response: any
}

export interface Param {
  access_token?: string,
  shop_id?: string | number,
}

export type ITEM_STATUS = "NORMAL" | "BANNED" | "UNLIST" | "REVIEWING" | "SELLER_DELETE" | "SHOPEE_DELETE"
