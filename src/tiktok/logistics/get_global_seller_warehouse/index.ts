import { GetGlobalSellerWarehouseParamV202309, GetGlobalSellerWarehouseResponseV202309, GetGlobalSellerWarehouseV202309 } from "./v202309";

export class GetGlobalSellerWarehouse {
  static Latest = async (p: GetGlobalSellerWarehouseParamV202309): Promise<GetGlobalSellerWarehouseResponseV202309> => GetGlobalSellerWarehouseV202309(p)
  static V202309 = async (p: GetGlobalSellerWarehouseParamV202309): Promise<GetGlobalSellerWarehouseResponseV202309> => GetGlobalSellerWarehouseV202309(p)
}
