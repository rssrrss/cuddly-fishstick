import { UploadImage, UploadImageParam, UploadImageResponse } from "./upload_image";

export class MediaSpace {
  static UploadImage = (p: UploadImageParam): Promise<UploadImageResponse> => UploadImage(p)
}
