import {
  GetPackageDetailParamV202309,
  GetPackageDetailResponseV202309,
  GetPackageDetailV202309
} from "./v202309"

export class GetPackageDetail {
  static Latest = async (p: GetPackageDetailParamV202309): Promise<GetPackageDetailResponseV202309> => GetPackageDetailV202309(p)
  static V202309 = async (p: GetPackageDetailParamV202309): Promise<GetPackageDetailResponseV202309> => GetPackageDetailV202309(p)
}
