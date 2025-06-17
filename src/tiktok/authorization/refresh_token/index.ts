import {
  RefreshTokenV2,
  RefreshTokenParamV2,
  RefreshTokenResponseV2
} from './v2'

export class RefreshToken {
  static Latest = async (param: RefreshTokenParamV2): Promise<RefreshTokenResponseV2> => RefreshTokenV2(param)
  static V2 = async (param: RefreshTokenParamV2): Promise<RefreshTokenResponseV2> => RefreshTokenV2(param)
}
