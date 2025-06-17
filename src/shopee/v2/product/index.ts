import { AddItem, AddItemParam, AddItemResponse } from "./add_item"
import { CategoryRecommend, CategoryRecommendParam, CategoryRecommendResponse } from "./category_recommend"
import { DeleteItem, DeleteItemParam, DeleteItemResponse } from "./delete_item"
import { GetCategory, GetCategoryParam, GetCategoryResponse } from "./get_category"
import { GetItemBaseInfo, GetItemBaseInfoParam, GetItemBaseInfoResponse } from "./get_item_base_info"
import { GetItemList, GetItemListParam, GetItemListResponse } from "./get_item_list"
import { GetModelList, GetModelListParam, GetModelListResponse } from "./get_model_list"
import { InitTierVariation, InitTierVariationParam, initTIerVariationResponse } from "./init_tier_variation"
import { UpdatePrice, UpdatePriceParam, UpdatePriceResponse } from "./update_price"
import { UpdateStock, UpdateStockParam, UpdateStockResponse } from "./update_stock"

export class Product {
  static GetItemList = (p: GetItemListParam): Promise<GetItemListResponse> => GetItemList(p)
  static GetItemBaseInfo = (p: GetItemBaseInfoParam): Promise<GetItemBaseInfoResponse> => GetItemBaseInfo(p)
  static GetModelList = (p: GetModelListParam): Promise<GetModelListResponse> => GetModelList(p)
  static UpdateStock = (p: UpdateStockParam): Promise<UpdateStockResponse> => UpdateStock(p)
  static UpdatePrice = (p: UpdatePriceParam): Promise<UpdatePriceResponse> => UpdatePrice(p)
  static AddItem = (p: AddItemParam): Promise<AddItemResponse> => AddItem(p)
  static CategoryRecommend = (p: CategoryRecommendParam): Promise<CategoryRecommendResponse> => CategoryRecommend(p)
  static GetCategory = (p: GetCategoryParam): Promise<GetCategoryResponse> => GetCategory(p)
  static DeleteItem = (p: DeleteItemParam): Promise<DeleteItemResponse> => DeleteItem(p)
  static InitTierVariation = (p: InitTierVariationParam): Promise<initTIerVariationResponse> => InitTierVariation(p)
}
