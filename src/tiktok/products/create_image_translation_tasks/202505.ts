import { RequestParam, SendRequest } from "../../helper/send_request"
import { ParamWithCipher } from "../../type/param"
import { Response } from "../../type/response"

export interface CreateImageTranslationTasksResponseV202505 extends Response {
  data: {
    translatation_tasks: {
      image_url: string,
      target_language: TargetLanguage,
      id: string
    }[]
  }
}

export type TargetLanguage = 'de-DE' | 'en-IE' | 'es-ES' | 'fr-FR' | 'it-IT'

export interface CreateImageTranslationTasksParamV202505 extends ParamWithCipher {
  images: {
    image_uri: string
    target_languages: TargetLanguage[]
  }[]
}

export async function CreateImageTranslationTasksV202505(p: CreateImageTranslationTasksParamV202505): Promise<CreateImageTranslationTasksResponseV202505> {
  const config: RequestParam = {
    method: "POST",
    path: `/product/202505/images/translation_tasks`,
    accessToken: p.accessToken,
    params: {
      shop_cipher: p.shop_cipher,
    },
    data: {
      images: p.images
    }
  }

  return await SendRequest(config)
}
