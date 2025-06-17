import { GetAccessToken } from "./get_access_token"
import { GetAuthorizedShops } from "./get_authorized_shops"
import { RefreshToken } from "./refresh_token"

export class Authorization {
  static GetAuthorizedShops = GetAuthorizedShops
  static GetAccessToken = GetAccessToken
  static RefreshToken = RefreshToken
}
