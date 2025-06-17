import { Logistics } from "./logistics"
import { MediaSpace } from "./media_space"
import { Product } from "./product"
import { Public } from "./public"

interface Config {
  partner_id: number,
  partner_key: string
}

export class V2 {
  static host: string = "https://partner.shopeemobile.com"
  static config: Config

  static configure(config: Config) {
    V2.config = config
  }

  static GetHost = () => V2.host
  static GetPartnerID = () => V2.config.partner_id
  static GetPartnerKey = () => V2.config.partner_key

  static Product = Product
  static MediaSpace = MediaSpace
  static Logistics = Logistics
  static Public = Public
}
