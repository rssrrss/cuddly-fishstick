import { Authorization } from "./authorization"
import { Event } from "./event"
import { Finance } from "./finance"
import { Fulfillment } from "./fulfillment"
import { Logistics } from "./logistics"
import { Orders } from "./orders"
import { Products } from "./products"
import { ReturnRefund } from "./return_refund"
import { Seller } from "./seller"
import { TiktokAppConfig } from "./type/util"

export class Tiktok {
  private static config: TiktokAppConfig

  static configure(config: TiktokAppConfig) {
    Tiktok.config = config

    return this
  }

  static GetAppKey = (): string => Tiktok.config.app_key
  static GetAppSecret = (): string => Tiktok.config.app_secret

  static Authorization = Authorization
  static Event = Event
  static Seller = Seller
  static Products = Products
  static Logistics = Logistics
  static Orders = Orders
  static Fulfillment = Fulfillment
  static ReturnRefund = ReturnRefund
  static Finance = Finance
}
