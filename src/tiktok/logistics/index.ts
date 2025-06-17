import { GetGlobalSellerWarehouse } from "./get_global_seller_warehouse"
import { GetShippingProviders } from "./get_shipping_providers"
import { GetWarehouseDeliveryOptions } from "./get_warehouse_delivery_options"
import { GetWarehouseList } from "./get_warehouse_list"

export class Logistics {
  static GetWarehouseList = GetWarehouseList
  static GetGlobalSellerWarehouse = GetGlobalSellerWarehouse
  static GetWarehouseDeliveryOptions = GetWarehouseDeliveryOptions
  static GetShippingProviders = GetShippingProviders
}
