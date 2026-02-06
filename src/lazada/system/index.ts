import { GenerateAccessToken, GenerateAccessTokenParam, GenerateAccessTokenResponse } from "./generate_access_token"

export class System {
  static GenerateAccessToken = (p: GenerateAccessTokenParam): Promise<GenerateAccessTokenResponse> => GenerateAccessToken(p)
}
