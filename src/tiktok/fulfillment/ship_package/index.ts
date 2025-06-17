import { ShipPackageParamV202309, ShipPackageResponseV202309, ShipPackageV202309 } from "./v202309";

export class ShipPackage {
  static V202309 = async (p: ShipPackageParamV202309): Promise<ShipPackageResponseV202309> => ShipPackageV202309(p)
}
