import { Lazada } from "./lazada"

const variant = {
  status: "sku.status",
  stock: "sku.quantity",
  image: "sku.images[0]",
  barcode: "sku.SellerSku",
  variant_name: "sku.saleProp((Object.keys(sku.SaleProp))[0])",
  size: "sku.saleProp((Object.keys(sku.SaleProp))[1])",
  price: "sku.price"
}

const access_token = "50000501d16uRBZccs9sxXfFmtI319a46f10DVyjdznpqFvQzUNr0y6scRpvwCcz"
const sku = "M10773/125/720"
const associated_sku = "L25K4D280070"
const item_id = "8829258008"

function setup() {
  Lazada.Config.app_key = "112972"
  Lazada.Config.app_secret = "NEwX1NohNB6PRPvSQu6ON3bsDag0jxsa"
}

async function get_item() {
  setup()

  const gi = await Lazada.Product.GetProductItem({
    access_token: access_token,
    item_id: item_id
  })

  console.log(gi.data)
}

async function remove_product() {
  setup()

  // const payload = {
  //   Request: {
  //     Product: {
  //       ItemId: "8829258008",
  //       Skus: {
  //         Sku: [
  //           { SkuId: "16262174791" },
  //         ],
  //       },
  //     },
  //   },
  // }

  const rs = await Lazada.Product.RemoveProduct({
    access_token: access_token,
    sku_id_list: JSON.stringify(["16262174791"])
  })

  console.log(rs)
}

async function remove_sku() {
  setup()

  const payload = {
    Request: {
      Product: {
        ItemId: "8829258008",
        Skus: {
          Sku: [
            { SkuId: "16262174791" },
          ],
        },
      },
    },
  }

  const rs = await Lazada.Product.RemoveSku({
    access_token: access_token,
    payload: payload
  })

  console.log(rs)
}

async function update_stock() {
  setup()

  const payload = {
    "Request": {
      "Product": {
        "ItemId": "8829258008",
        "Attributes": {},
        "Skus": {
          "Sku": [
            {
              // "ItemId": "8829258008",
              "SkuId": "16262174791",
              // "SellerSku": "L25K4D280068",
              // "SalePrice": "50000",
              // "SellableQuantity": "1",
              "price": "50000",
              "quantity": "0",
            }
          ]
        }
      }
    }
  }

  // const update = await Lazada.Product.UpdatePriceQuantity({
  //   access_token: access_token,
  //   payload: payload
  // })
  const update = await Lazada.Product.UpdateProduct({
    access_token: access_token,
    payload: payload
  })

  console.log(update)
}

async function get_products() {
  setup()

  const get = await Lazada.Product.GetProducts({
    access_token: access_token,
    // sku_seller_list: [associated_sku]
  })

  const product = get.data.products[0]

  console.log(product)


  // const get = await Lazada.Product.GetProductItem({
  //   access_token: access_token,
  //   item_id: item_id
  // })
  //
  // console.log(get)
}

async function create_product() {
  setup()

  const category_id = 6553
  const product_name = 'LINEN POCKET SHIRT TORTILA M10773/125/720'
  const description = "Crafted from breathable linen, the Linen Pocket Shirt Tortila is designed for effortless comfort and everyday versatility. The lightweight fabric allows excellent airflow, making it ideal for warm weather and all-day wear. Featuring a classic collar, button-down front, and a functional chest pocket, this shirt balances relaxed style with a clean, modern silhouette. Finished in a soft Tortila tone, it pairs easily with trousers, denim, or shorts—perfect for casual outings, workdays, or laid-back weekends. Details: Premium lightweight linen fabric Breathable and comfortable feel Classic collar with button-down closure Single chest pocket Relaxed yet refined fit Color: Tortila"
  const insurance = "Optional" // 0 : 1
  const images = [
    'https://static.indiefy.my.id/public/r6HmMqBxAEcnwZqN5t7jMD.jpg',
    'https://static.indiefy.my.id/public/xJrwsR8umn9FdZXdjrC6JR.jpg',
    'https://static.indiefy.my.id/public/ptg7GsVXQAGV5RXq25Fh3J.jpg'
  ]

  const ca = await Lazada.Product.GetCategoryAttributes({
    access_token: access_token,
    primary_category_id: `${category_id}`
  })

  const sale_prop = []
  const mandatory_attributes = []
  for (let i = 0; i < ca.data.length; i++) {
    const attr = ca.data[i]

    if (attr.is_sale_prop == 1) {
      sale_prop.push(attr.name)
    }

    if (attr.is_mandatory != 1) {
      continue
    }

    let is_skip = false
    switch (attr.name) {
      case "price":
      case "package_weight":
      case "package_width":
      case "package_height":
      case "package_length":
      case "SellerSku":
        is_skip = true
        break;
    }

    if (is_skip) continue

    mandatory_attributes.push(attr)
  }

  // const ct = await Lazada.Product.GetCategoryTree({
  //   access_token: access_token,
  // })

  // const ct = await Lazada.Product.GetCategorySuggestion({
  //   access_token: access_token,
  //   product_name: 'LINEN POCKET SHIRT TORTILA M10773/125/720'
  // })

  // console.log(ct.data.categorySuggestions)

  const migrated_images = []
  for (let i = 0; i < images.length; i++) {
    const image = images[i]

    const migrate = await Lazada.Product.MigrateImage({
      access_token: access_token,
      payload: {
        Request: {
          Image: {
            Url: image,
          },
        },
      }
    })

    const migrated = migrate?.data?.image?.url ?? undefined
    if (!migrated) continue

    migrated_images.push(migrated)
  }

  const payload: any = {
    "Request": {
      "Product": {
        "PrimaryCategory": category_id,
        // "AssociatedSku": sku,
        "Images": {
          "Image": migrated_images
        },
        "Attributes": {
          "name": product_name,
          "brand": "No Brand",
          "description": description
        },
        "Skus": {
          "Sku": [
            {
              "SellerSku": "L25K4D280070",
              "saleProp": {
                "color_family": "TORTILA",
                "size": "L"
              },
              "quantity": "10",
              "price": "399000",
              "package_height": "5",
              "package_length": "15",
              "package_width": "10",
              "package_weight": "0.5",
              // "Images": {
              //   "Image": [
              //     "XXX"
              //   ]
              // }
            },
            {
              "SellerSku": "L25K4D280068",
              "saleProp": {
                "color_family": "TORTILA",
                "size": "S"
              },
              "quantity": "10",
              "price": "399000",
              "package_height": "5",
              "package_length": "15",
              "package_width": "10",
              "package_weight": "0.5",
              // "Images": {
              //   "Image": [
              //     "XXX"
              //   ]
              // }
            },
            {
              "SellerSku": "L25K4D280069",
              "saleProp": {
                "color_family": "TORTILA",
                "size": "M"
              },
              "quantity": "10",
              "price": "399000",
              "package_height": "5",
              "package_length": "15",
              "package_width": "10",
              "package_weight": "0.5",
              // "Images": {
              //   "Image": [
              //     "XXX"
              //   ]
              // }
            }
          ]
        }
      }
    }
  }

  if (mandatory_attributes.length > 0) {
    for (let i = 0; i < mandatory_attributes.length; i++) {
      const attr = mandatory_attributes[i]

      switch (attr.input_type) {
        case "enumInput":
        case "singleSelect":
          payload.Request.Product.Attributes[attr.name] = attr.options[0].name
          break;
      }
    }
  }

  const cp = await Lazada.Product.CreateProduct({
    access_token: access_token,
    payload: payload
  })

  console.log(cp)
}

async function get_seller() {
  setup()

  const gs = await Lazada.Seller.GetSeller({
    access_token: access_token
  })

  console.log(gs)
}

async function refresh_token() {
  setup()

  const gs = await Lazada.Seller.GetSeller({
    access_token: access_token
  })

  const seller = gs.data
  console.log(seller)

  // const rt = await Lazada.System.RefreshAccessToken({
  //   refresh_token: "50001501220pS8bzhwipvDuOl6DiPiqR171ccc09ufKeLLXFuXlh1BqsbU3BsF80"
  // })
  //
  // console.log(rt)

  const rt = {
    access_token: '50000501d16uRBZccs9sxXfFmtI319a46f10DVyjdznpqFvQzUNr0y6scRpvwCcz',
    country: 'id',
    refresh_token: '50001500716cDONes9nHtZpPi8an1b1bbd94THnPauTdYGCR7PTyhifNh6s6vdy1',
    country_user_info_list: [
      {
        country: 'id',
        user_id: '400739670375',
        seller_id: '400739670375',
        short_code: 'ID67ZZHUSV'
      }
    ],
    account_platform: 'seller_center',
    refresh_expires_in: 14924290,
    expires_in: 2592000,
    account: 'yydmnf@gmail.com',
    code: '0',
    request_id: '2101559517703732401544470',
    _trace_id_: '21010b7817703732401511332e4d49',
    seller_id: '400739670375',
  }
}

refresh_token()
// get_seller()
// remove_product()
// get_item()
// remove_sku()
// update_stock()
// get_products()
// create_product()
