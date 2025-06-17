import { GetWarehouseDeliveryOptionsParamV202309, GetWarehouseDeliveryOptionsResponseV202309, GetWarehouseDeliveryOptionsV202309 } from "./v202309";

export class GetWarehouseDeliveryOptions {
  static Latest = async (p: GetWarehouseDeliveryOptionsParamV202309): Promise<GetWarehouseDeliveryOptionsResponseV202309> => GetWarehouseDeliveryOptionsV202309(p)
  static V202309 = async (p: GetWarehouseDeliveryOptionsParamV202309): Promise<GetWarehouseDeliveryOptionsResponseV202309> => GetWarehouseDeliveryOptionsV202309(p)
}
