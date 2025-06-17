import { GetPackageShippingDocumentParamV202309, GetPackageShippingDocumentResponseV202309, GetPackageShippingDocumentV202309 } from "./v202309";

export class GetPackageShippingDocument {
  static Latest = async (p: GetPackageShippingDocumentParamV202309): Promise<GetPackageShippingDocumentResponseV202309> => GetPackageShippingDocumentV202309(p)
  static V202309 = async (p: GetPackageShippingDocumentParamV202309): Promise<GetPackageShippingDocumentResponseV202309> => GetPackageShippingDocumentV202309(p)
}
