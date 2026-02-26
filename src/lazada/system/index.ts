import { GenerateAccessToken, GenerateAccessTokenParam, GenerateAccessTokenResponse } from "./generate_access_token"
import { RefreshAccessToken, RefreshAccessTokenParam, RefreshAccessTokenResponse } from "./refresh_access_token"

export class System {
  static GenerateAccessToken = (p: GenerateAccessTokenParam): Promise<GenerateAccessTokenResponse> => GenerateAccessToken(p)
  static RefreshAccessToken = (p: RefreshAccessTokenParam): Promise<RefreshAccessTokenResponse> => RefreshAccessToken(p)
}
