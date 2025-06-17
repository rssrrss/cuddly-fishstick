import { ActivateProducts } from "./activate_products"
import { CheckListingPrerequisites } from "./check_listing_prerequisites"
import { CreateCustomBrands } from "./create_custom_brands"
import { CreateImageTranslationTasks } from "./create_image_translation_tasks"
import { CreateProduct } from "./create_product"
import { DeactivateProducts } from "./deactivate_products"
import { DeleteProducts } from "./delete_products"
import { EditProduct } from "./edit_product"
import { GetAttributes } from "./get_attributes"
import { GetBrands } from "./get_brands"
import { GetCategories } from "./get_categories"
import { GetProduct } from "./get_product"
import { GetProductsSeoWords } from "./get_products_seo_words"
import { GetRecommendedProductTitleAndDescription } from "./get_recommended_product_title_and_description"
import { InventorySearch } from "./inventory_search"
import { OptimizedImages } from "./optimized_images"
import { ProductInformationIssueDiagnosis } from "./product_information_issue_diagnosis"
import { RecommendCategory } from "./recommend_category"
import { RecoverProducts } from "./recover_products"
import { SearchGlobalProducts } from "./search_global_products"
import { SearchProducts } from "./search_products"
import { SearchSizeCharts } from "./search_size_charts"
import { UpdateInventory } from "./update_inventory"
import { UpdatePrice } from "./update_price"
import { UploadProductImage } from "./upload_product_image"

export class Products {
  static CheckListingPrerequisites = CheckListingPrerequisites
  static GetCategories = GetCategories
  static RecommendCategory = RecommendCategory
  static GetAttributes = GetAttributes
  static GetBrands = GetBrands
  static CreateCustomBrands = CreateCustomBrands
  // Check Product Listing
  static UploadProductImage = UploadProductImage
  // Upload Product File
  static SearchSizeCharts = SearchSizeCharts
  static CreateProduct = CreateProduct
  // Partial Edit Product
  static EditProduct = EditProduct
  static ActivateProducts = ActivateProducts
  static DeactivateProducts = DeactivateProducts
  static DeleteProducts = DeleteProducts
  static RecoverProducts = RecoverProducts
  static GetProduct = GetProduct
  static SearchProducts = SearchProducts
  static UpdatePrice = UpdatePrice
  static UpdateInventory = UpdateInventory
  static InventorySearch = InventorySearch
  // Diagnose and Optimize Product
  static ProductInformationIssueDiagnosis = ProductInformationIssueDiagnosis
  static GetProductsSeoWords = GetProductsSeoWords
  static GetRecommendedProductTitleAndDescription = GetRecommendedProductTitleAndDescription
  static OptimizedImages = OptimizedImages
  static CreateImageTranslationTasks = CreateImageTranslationTasks
  // Get Image Translation Tasks
  // Recommend Global Categories
  // Get Global Category Rules
  // Get Global Attributes
  // Create Global Product
  // Publish Global Product
  // Edit Global Product
  // Delete Global Products
  // Get Global Product
  static SearchGlobalProducts = SearchGlobalProducts
  // Update Global Inventory
  // Create Manufacturer
  // Partial Edit Manufacturer
  // Search Manufacturers
  // Create Resposible Person
  // Partial Edit Responsible Person
  // Search Responsible Persons
  // Create Category Upgrade Task
}
