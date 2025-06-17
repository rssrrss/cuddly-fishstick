import { DeleteShopWebhook } from "./delete_shop_webhook";
import { GetShopWebhooks } from "./get_shop_webhooks";
import { UpdateShopWebhook } from "./update_shop_webhook";

export class Event {
  static GetShopWebhooks = GetShopWebhooks
  static UpdateShopWebhook = UpdateShopWebhook
  static DeleteShopWebhook = DeleteShopWebhook
}
