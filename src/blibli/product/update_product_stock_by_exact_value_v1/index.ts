import { v20250904, v20250904Param, v20250904Response } from "./20250904";

export class UpdateProductStockByExactValueV1 {
  static v20250904 = (p: v20250904Param): Promise<v20250904Response> => v20250904(p)
}
