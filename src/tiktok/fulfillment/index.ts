import { CreatePackages } from "./create_packages"
import { GetPackageDetail } from "./get_package_detail"
import { GetPackageShippingDocument } from "./get_package_shipping_document"
import { ShipPackage } from "./ship_package"

export class Fulfillment {
  static GetPackageDetail = GetPackageDetail
  static GetPackageShippingDocument = GetPackageShippingDocument
  static CreatePackages = CreatePackages
  static ShipPackage = ShipPackage
}
