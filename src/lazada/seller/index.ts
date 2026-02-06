import { GetSeller, GetSellerParam, GetSellerResponse } from "./get_seller";

export class Seller {
  static GetSeller = (p: GetSellerParam): Promise<GetSellerResponse> => GetSeller(p)
}
