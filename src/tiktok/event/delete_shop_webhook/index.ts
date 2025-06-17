import { DeleteShopWebhookParamV202309, DeleteShopWebhookResponseV202309, DeleteShopWebhookV202309 } from "./v202309";

export class DeleteShopWebhook {
  static Latest = async (p: DeleteShopWebhookParamV202309): Promise<DeleteShopWebhookResponseV202309> => DeleteShopWebhookV202309(p)
  static V202309 = async (p: DeleteShopWebhookParamV202309): Promise<DeleteShopWebhookResponseV202309> => DeleteShopWebhookV202309(p)
}
