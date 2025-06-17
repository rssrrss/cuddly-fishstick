export type ExternalPlatform = 'SHOPIFY' | 'WOOCOMMERCE'
  | 'BIGCOMMERCE' | 'MAGENTO' | 'SALESFORCE_COMMERCE_CLOUD'
  | 'CHANNEL_ADVISOR' | 'AMAZON' | 'ORDER_MANAGEMENT_SYSTEM'
  | 'WAREHOUSE_MANAGEMENT_SYSTEM' | 'ERP_SYSTEM'

export type OrderStatus = 'UNPAID' | 'ON_HOLD' | 'AWAITING_SHIPMENT'
  | 'PARTIALLY_SHIPPING' | 'AWAITING_COLLECTION' | 'IN_TRANSIT'
  | 'DELIVERED' | 'COMPLETED' | 'CANCELLED'

export type FulfillmentType = 'FULFILLMENT_BY_SELLER' | 'FULFILLMENT_BY_TIKTOK' | 'FULFILLMENT_BY_DILAYANI_TOKOPEDIA'

export type DeliveryType = 'HOME_DELIVERY' | 'COLLECTION_POINT'

export type Role = 'SELLER' | 'BUYER' | 'SYSTEM'

export type NeedUploadInvoice = 'UNKNOWN' | 'NEED_INVOICE' | 'NO_NEED' | 'INVOiCE_UPLOADED' | 'INVOICE_PROCESSING'

export type ShippingType = 'TIKTOK' | 'SELLER'

export type DeliveryOption = 'Economy Shipping' | 'Standard Shipping' | 'Express Shipping'

export type CommercePlatform = 'TIKTOK_SHOP' | 'TOKOPEDIA'
