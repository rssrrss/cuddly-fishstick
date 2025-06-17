import { UpdateShopWebhookParamV202309, UpdateShopWebhookResponseV202309, UpdateShopWebhookV202309 } from "./v202309";

export class UpdateShopWebhook {
  static Latest = async (p: UpdateShopWebhookParamV202309): Promise<UpdateShopWebhookResponseV202309> => UpdateShopWebhookV202309(p)
  static V202309 = async (p: UpdateShopWebhookParamV202309): Promise<UpdateShopWebhookResponseV202309> => UpdateShopWebhookV202309(p)
}
