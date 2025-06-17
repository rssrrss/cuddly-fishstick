import { Response as BaseResponse } from '../../type/response'
import { ParamWithCipher } from '../../type/param'
import { RequestParam, SendRequest } from '../../helper/send_request'

interface WarehouseAddressGeoLocation {
  latitude: string,
  longitude: string
}

interface WarehouseAddress {
  region: string,
  state: string,
  city: string,
  distinct: string,
  town: string,
  contact_person: string,
  first_name: string,
  last_name: string,
  first_name_local_script: string,
  last_name_local_script: string,
  postal_code: string,
  full_address: string,
  region_code: string,
  phone_number: string,
  address_line1: string,
  address_line2: string,
  address_line3: string,
  address_line4: string,
  geolocation: WarehouseAddressGeoLocation,
}

interface Warehouse {
  id: string,
  name: string,
  effect_status: string,
  type: string,
  sub_type: string,
  is_default: boolean,
  address: WarehouseAddress
}

export interface GetWarehouseListResponseV202309 extends BaseResponse {
  data: {
    warehouses: Warehouse[]
  }
}

export interface GetWarehouseListParamV202309 extends ParamWithCipher {
}

export async function GetWarehouseListV202309(p: GetWarehouseListParamV202309): Promise<GetWarehouseListResponseV202309> {
  const config: RequestParam = {
    method: "GET",
    path: `/logistics/202309/warehouses`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
  }

  return await SendRequest(config)
}
