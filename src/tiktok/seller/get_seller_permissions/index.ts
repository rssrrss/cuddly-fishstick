import { GetSellerPermissionsParamV202309, GetSellerPermissionsResponseV202309, GetSellerPermissionsV202309 } from "./v202309";

export class GetSellerPermissions {
  static Latest = async (p: GetSellerPermissionsParamV202309): Promise<GetSellerPermissionsResponseV202309> => GetSellerPermissionsV202309(p)
  static V202309 = async (p: GetSellerPermissionsParamV202309): Promise<GetSellerPermissionsResponseV202309> => GetSellerPermissionsV202309(p)
}
