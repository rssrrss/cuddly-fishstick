import { AdjustSellableQuantity, AdjustSellableQuantityParam, AdjustSellableQuantityResponse } from "./adjust_sellable_quantity"
import { CreateProduct, CreateProductParam, CreateProductResponse } from "./create_product"
import { GetCategoryAttributes, GetCategoryAttributesParam, GetCategoryAttributesResponse } from "./get_category_attributes"
import { GetCategorySuggestion, GetCategorySuggestionParam, GetCategorySuggestionResponse } from "./get_category_suggestion"
import { GetCategoryTree, GetCategoryTreeParam, GetCategoryTreeResponse } from "./get_category_tree"
import { GetProductItem, GetProductItemParam, GetProductItemResponse } from "./get_product_item"
import { GetProducts, GetProductsParam, GetProductsResponse } from "./get_products"
import { MigrateImage, MigrateImageParam, MigrateImageResponse } from "./migrate_image"
import { UpdatePriceQuantity, UpdatePriceQuantityParam, UpdatePriceQuantityResponse } from "./update_price_quantity"
import { UpdateProduct, UpdateProductParam, UpdateProductResponse } from "./update_product"
import { UpdateSellableQuantity, UpdateSellableQuantityParam, UpdateSellableQuantityResponse } from "./update_sellable_quantity"
import { RemoveSku, RemoveSkuParam, RemoveSkuResponse } from "./remove_sku"
import { RemoveProduct, RemoveProductParam, RemoveProductResponse } from "./remove_product"

export class Product {
  static GetCategoryTree = (p: GetCategoryTreeParam): Promise<GetCategoryTreeResponse> => GetCategoryTree(p)
  static GetCategorySuggestion = (p: GetCategorySuggestionParam): Promise<GetCategorySuggestionResponse> => GetCategorySuggestion(p) 
  static GetCategoryAttributes = (p: GetCategoryAttributesParam): Promise<GetCategoryAttributesResponse> => GetCategoryAttributes(p)
  static MigrateImage = (p: MigrateImageParam): Promise<MigrateImageResponse> => MigrateImage(p)
  static CreateProduct = (p: CreateProductParam): Promise<CreateProductResponse> => CreateProduct(p)
  static GetProducts = (p: GetProductsParam): Promise<GetProductsResponse> => GetProducts(p)
  static UpdatePriceQuantity = (p: UpdatePriceQuantityParam): Promise<UpdatePriceQuantityResponse> => UpdatePriceQuantity(p)
  static AdjustSellableQuantity = (p: AdjustSellableQuantityParam): Promise<AdjustSellableQuantityResponse> => AdjustSellableQuantity(p)
  static UpdateSellableQuantity = (p: UpdateSellableQuantityParam): Promise<UpdateSellableQuantityResponse> => UpdateSellableQuantity(p)
  static UpdateProduct = (p: UpdateProductParam): Promise<UpdateProductResponse> => UpdateProduct(p)
  static GetProductItem = (p: GetProductItemParam): Promise<GetProductItemResponse> => GetProductItem(p)
  static RemoveSku = (p: RemoveSkuParam): Promise<RemoveSkuResponse> => RemoveSku(p)
  static RemoveProduct = (p: RemoveProductParam): Promise<RemoveProductResponse> => RemoveProduct(p)
}
