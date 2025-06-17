import {
  GetAccessTokenParamV2,
  GetAccessTokenResponseV2,
  GetAccessTokenV2
} from "./v2"

//https://partner.tiktokshop.com/docv2/page/678e3a3292b0f40314a92d75
export class GetAccessToken {
  static Latest = async (p: GetAccessTokenParamV2): Promise<GetAccessTokenResponseV2> => GetAccessTokenV2(p)
  static V2 = async (p: GetAccessTokenParamV2): Promise<GetAccessTokenResponseV2> => GetAccessTokenV2(p)
}
