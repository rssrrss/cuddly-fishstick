import { GetReturnRecordParamV202309, GetReturnRecordsResponseV202309, GetReturnRecordsV202309 } from "./v202309";

export class GetReturnRecords {
  static Latest = async (p: GetReturnRecordParamV202309): Promise<GetReturnRecordsResponseV202309> => GetReturnRecordsV202309(p)
  static V202309 = async (p: GetReturnRecordParamV202309): Promise<GetReturnRecordsResponseV202309> => GetReturnRecordsV202309(p)
}
