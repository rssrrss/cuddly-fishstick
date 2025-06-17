import {
  GetWarehouseListParamV202309,
  GetWarehouseListResponseV202309,
  GetWarehouseListV202309
} from "./202309"

export class GetWarehouseList {
  static Latest = async (p: GetWarehouseListParamV202309): Promise<GetWarehouseListResponseV202309> => GetWarehouseListV202309(p)
  static V202309 = async (p: GetWarehouseListParamV202309): Promise<GetWarehouseListResponseV202309> => GetWarehouseListV202309(p)
}
