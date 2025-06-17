import { RefreshAccessToken, RefreshAccessTokenParam, RefreshAccessTokenResponse } from "./refresh_token";

export class Public {
  static RefreshAccessToken = (p: RefreshAccessTokenParam): Promise<RefreshAccessTokenResponse> => RefreshAccessToken(p)
}