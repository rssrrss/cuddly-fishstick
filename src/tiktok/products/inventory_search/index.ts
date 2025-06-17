import { InventorySearchParamV202309, InventorySearchResponseV202309, InventorySearchV202309 } from "./v202309";

export class InventorySearch {
  static Latest = async (p: InventorySearchParamV202309): Promise<InventorySearchResponseV202309> => InventorySearchV202309(p)
  static V23230 = async (p: InventorySearchParamV202309): Promise<InventorySearchResponseV202309> => InventorySearchV202309(p)
}
