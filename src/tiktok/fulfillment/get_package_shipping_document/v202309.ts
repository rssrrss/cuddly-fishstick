import { ParamWithCipher } from "../../type/param"
import { RequestParam, SendRequest } from "../../helper/send_request"

export interface GetPackageShippingDocumentResponseV202309 extends Response {
  data: {
    doc_url: string
    tracking_number: string
  }
}

export interface GetPackageShippingDocumentParamV202309 extends ParamWithCipher {
  package_id: string
  document_type: 'SHIPPING_LABEL' | 'PACKING_SLIP' | 'SHIPPING_LABEL_PICTURE' | 'HAZMAT_LABEL' | 'INVOICE_LABEL',
  document_size?: 'A6' | 'A5'
  document_format?: 'PDF' | 'ZPL'
}

export async function GetPackageShippingDocumentV202309(p: GetPackageShippingDocumentParamV202309): Promise<GetPackageShippingDocumentResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/fulfillment/202309/packages/${p.package_id}/shipping_documents`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
      document_type: p.document_type,
      document_size: p.document_size,
      document_format: p.document_format
    }
  }

  return await SendRequest(config)
}
