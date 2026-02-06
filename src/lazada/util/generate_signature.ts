import { Lazada } from "..";
import crypto from "crypto"

export interface GenerateSignatureParam {
  path: string,
  params: Record<string, string>,
}

export function GenerateSignature(p: GenerateSignatureParam): string {
  const sortedKeys = Object.keys(p.params).sort();

  let baseString = p.path;
  for (const key of sortedKeys) {
    const value = p.params[key];
    if (value !== undefined && value !== null) {
      baseString += key + value;
    }
  }

  return crypto
    .createHmac("sha256", Lazada.Config.app_secret)
    .update(baseString, "utf8")
    .digest("hex")
    .toUpperCase();
}
