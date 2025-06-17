import { CreatePackagesParamV202309, CreatePackagesResponseV202309, CreatePackagesV202309 } from "./v202309"

export class CreatePackages {
  static Latest = async (p: CreatePackagesParamV202309): Promise<CreatePackagesResponseV202309> => CreatePackagesV202309(p)
  static V202309 = async (p: CreatePackagesParamV202309): Promise<CreatePackagesResponseV202309> => CreatePackagesV202309(p)
}
