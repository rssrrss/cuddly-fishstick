import { GetProductsSeoWordsParamV202405, GetProductsSeoWordsResponseV202405, GetProductsSeoWordsV202405 } from "./v202405";

export class GetProductsSeoWords {
  static Latest = async (p: GetProductsSeoWordsParamV202405): Promise<GetProductsSeoWordsResponseV202405> => GetProductsSeoWordsV202405(p)
  static V202405 = async (p: GetProductsSeoWordsParamV202405): Promise<GetProductsSeoWordsResponseV202405> => GetProductsSeoWordsV202405(p)
}
