import {
  RecommendCategoryParamV202309,
  RecommendCategoryResponseV202309,
  RecommendCategoryV202309
} from './202309'

export class RecommendCategory {
  static Latest = async (param: RecommendCategoryParamV202309): Promise<RecommendCategoryResponseV202309> => RecommendCategoryV202309(param)
  static V202309 = async (param: RecommendCategoryParamV202309): Promise<RecommendCategoryResponseV202309> => RecommendCategoryV202309(param)
}
