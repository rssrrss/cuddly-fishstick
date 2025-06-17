import { OptimizedImagesParamV202404, OptimizedImagesResponseV202404, OptimizedImagesV202404 } from "./v202404";

export class OptimizedImages {
  static Latest = async (p: OptimizedImagesParamV202404): Promise<OptimizedImagesResponseV202404> => OptimizedImagesV202404(p)
  static V202404 = async (p: OptimizedImagesParamV202404): Promise<OptimizedImagesResponseV202404> => OptimizedImagesV202404(p)
}
