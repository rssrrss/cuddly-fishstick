import { Product } from "./product"

export class Blibli {
  static Config = {
    host: "https://api.blibli.com/v2",
    client_id: "",
    client_secret: "",
    channel_id: "",
    username: "",
    store_id: "",
    request_id: ""
  }

  static Product = Product
}
