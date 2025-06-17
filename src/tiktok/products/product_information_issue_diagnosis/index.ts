import { ProductInformationIssueDiagnosisParamV202405, ProductInformationIssueDiagnosisResponseV202405, ProductInformationIssueDiagnosisV202405 } from "./v202405";

export class ProductInformationIssueDiagnosis {
  static Latest = async (p: ProductInformationIssueDiagnosisParamV202405): Promise<ProductInformationIssueDiagnosisResponseV202405> => ProductInformationIssueDiagnosisV202405(p)
  static V202405 = async (p: ProductInformationIssueDiagnosisParamV202405): Promise<ProductInformationIssueDiagnosisResponseV202405> => ProductInformationIssueDiagnosisV202405(p)
}
