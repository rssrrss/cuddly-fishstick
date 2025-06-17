import { Param, Response } from "../../type";
import { SendRequest, SendRequestParam } from "../../util/send_request";

export interface AddItemResponse extends Response { 
  response: {
    item_id: number,
  }
}

export interface AddItemParam extends Param {
  item_name: string,
  item_status: string,
  category_id: number,
  original_price: number,
  description: string,
  weight: number,
  brand?: {
    brand_id: number,
    original_brand_name: number
  },
  image?: {
    image_id_list: string[],
    image_ratio?: string
  },
  seller_stock?: {
    location_id?: string,
    stock: number
  }[],
  logistic_info?: {
    logistic_id: number,
    enabled: boolean
  }[]
}

export async function AddItem(p: AddItemParam): Promise<AddItemResponse> {
  const param: SendRequestParam = {
    method: 'POST',
    path: '/api/v2/product/add_item',
    access_token: p.access_token,
    shop_id: p.shop_id,
    data: {
      item_name: p.item_name,
      item_status: p.item_status,
      category_id: p.category_id,
      image: p.image,
      brand: p.brand,
      seller_stock: p.seller_stock,
      original_price: p.original_price,
      description: p.description,
      weight: p.weight,
      logistic_info: p.logistic_info
    }
  }

  return await SendRequest(param)
}
