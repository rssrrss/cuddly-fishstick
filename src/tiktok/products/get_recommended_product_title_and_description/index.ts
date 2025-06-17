import { GetRecommendedProductTitleAndDescriptionParamV202405, GetRecommendedProductTitleAndDescriptionResponseV202405, GetRecommendedProductTitleAndDescriptionV202405 } from "./v202405";

export class GetRecommendedProductTitleAndDescription {
  static Latest = async (p: GetRecommendedProductTitleAndDescriptionParamV202405): Promise<GetRecommendedProductTitleAndDescriptionResponseV202405> => GetRecommendedProductTitleAndDescriptionV202405(p)
  static V202405 = async (p: GetRecommendedProductTitleAndDescriptionParamV202405): Promise<GetRecommendedProductTitleAndDescriptionResponseV202405> => GetRecommendedProductTitleAndDescriptionV202405(p)
}
