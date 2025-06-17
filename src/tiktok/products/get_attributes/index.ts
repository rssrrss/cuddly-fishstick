import {
  GetAttributesParamV202309,
  GetAttributesResponseV202309,
  GetAttributesV202309
} from "./v202309"

export class GetAttributes {
  static Latest = async (p: GetAttributesParamV202309): Promise<GetAttributesResponseV202309> => GetAttributesV202309(p)
  static V202309 = async (p: GetAttributesParamV202309): Promise<GetAttributesResponseV202309> => GetAttributesV202309(p)
}
