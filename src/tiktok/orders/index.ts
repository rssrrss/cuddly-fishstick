import { GetPriceDetail } from "./get_price_detail"
import { AddExternalOrderReferences } from "./add_external_order_references"
import { GetExternalOrderReferences } from "./get_external_order_references"
import { SearchOrderByExternalOrderReference } from "./search_order_by_external_order_reference"
import { GetOrderDetail } from "./get_order_detail"
import { GetOrderList } from "./get_order_list"

export class Orders {
  static GetOrderList = GetOrderList
  static GetPriceDetail = GetPriceDetail
  static AddExternalOrderReferences = AddExternalOrderReferences
  static GetExternalOrderReferences = GetExternalOrderReferences
  // static SearchOrderByExternalOrderReference = SearchOrderByExternalOrderReference
  static GetOrderDetail = GetOrderDetail
}
