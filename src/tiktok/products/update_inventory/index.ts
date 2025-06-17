import {
  UpdateInventoryParamV202309,
  UpdateInventoryResponseV202309,
  UpdateInventoryV202309,
} from "./v202309"

export class UpdateInventory {
  static Latest = async (param: UpdateInventoryParamV202309): Promise<UpdateInventoryResponseV202309> => UpdateInventoryV202309(param)
  static V202309 = async (param: UpdateInventoryParamV202309): Promise<UpdateInventoryResponseV202309> => UpdateInventoryV202309(param)
}
