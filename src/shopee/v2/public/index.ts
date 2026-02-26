import { GetAccessToken, GetAccessTokenParam, GetAccessTokenResponse } from "./get_access_token";
import { RefreshAccessToken, RefreshAccessTokenParam, RefreshAccessTokenResponse } from "./refresh_token";

export class Public {
  static RefreshAccessToken = (p: RefreshAccessTokenParam): Promise<RefreshAccessTokenResponse> => RefreshAccessToken(p)
  static GetAccessToken = (p: GetAccessTokenParam): Promise<GetAccessTokenResponse> => GetAccessToken(p)
}
