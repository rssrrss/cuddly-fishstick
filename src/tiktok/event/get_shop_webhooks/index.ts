import { GetShopWebhooksParamV202309, GetShopWebhooksResponseV202309, GetShopWebhooksV202309 } from "./v202309";

export class GetShopWebhooks {
  static Latest = async (p: GetShopWebhooksParamV202309): Promise<GetShopWebhooksResponseV202309> => GetShopWebhooksV202309(p)
  static V202309 = async (p: GetShopWebhooksParamV202309): Promise<GetShopWebhooksResponseV202309> => GetShopWebhooksV202309(p)
}
