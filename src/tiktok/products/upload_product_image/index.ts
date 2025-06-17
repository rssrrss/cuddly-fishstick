import {
  UploadProductImageParamV202309,
  UploadProductImageResponseV202309,
  UploadProductImageV202309
} from "./v202309"

export class UploadProductImage {
  static Latest = async (p: UploadProductImageParamV202309): Promise<UploadProductImageResponseV202309> => UploadProductImageV202309(p)
  static V202309 = async (p: UploadProductImageParamV202309): Promise<UploadProductImageResponseV202309> => UploadProductImageV202309(p)
}
