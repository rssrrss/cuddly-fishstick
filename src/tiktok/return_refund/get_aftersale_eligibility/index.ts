import { GetAftersaleEligibilityParamV202309, GetAftersaleEligibilityResponseV202309, GetAftersaleEligibilityV202309 } from "./v202309";

export class GetAftersaleEligibility {
  static Latest = async (p: GetAftersaleEligibilityParamV202309): Promise<GetAftersaleEligibilityResponseV202309> => GetAftersaleEligibilityV202309(p)
  static v202309 = async (p: GetAftersaleEligibilityParamV202309): Promise<GetAftersaleEligibilityResponseV202309> => GetAftersaleEligibilityV202309(p)
}
