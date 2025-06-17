import { DynamicObj } from "../type/util"

export function setAccessToken(token: string): DynamicObj {
  return {
    'x-tts-access-token': token
  }
}
