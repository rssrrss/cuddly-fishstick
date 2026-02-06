import { Product } from "./product"
import { Seller } from "./seller"
import { System } from "./system"

export class Lazada {
  static Config = {
    app_key: '',
    app_secret: '',
    host: 'https://api.lazada.co.id/rest',
    auth_host: 'https://auth.lazada.com/rest'
  }

  static System = System
  static Product = Product
  static Seller = Seller
}
