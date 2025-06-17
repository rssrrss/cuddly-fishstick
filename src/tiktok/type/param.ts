export interface BaseParam {
  // appKey?: string,
  // appSecret?: string
}

export interface ParamWithToken extends BaseParam {
  accessToken: string
}

export interface ParamWithCipher extends ParamWithToken {
  shop_cipher: string
}

export type SortOrder = 'ASC' | 'DESC'
