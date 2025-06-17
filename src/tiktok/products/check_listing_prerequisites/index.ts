import {
  CheckListingPrerequisitesParamV202312,
  CheckListingPrerequisitesResponseV202312,
  CheckListingPrerequisitesV202312,
} from "./202312"

export class CheckListingPrerequisites {
  static Latest = async (param: CheckListingPrerequisitesParamV202312): Promise<CheckListingPrerequisitesResponseV202312> => CheckListingPrerequisitesV202312(param)
  static V202312 = async (param: CheckListingPrerequisitesParamV202312): Promise<CheckListingPrerequisitesResponseV202312> => CheckListingPrerequisitesV202312(param)
}
