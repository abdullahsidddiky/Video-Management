import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GalleryVideosService from './GalleryVideosService';
import GalleryVideosValidator from './GalleryVideosValidator';
export default class GalleryVideosController {
  private galleryvideosService : GalleryVideosService
  private galleryvideosValidator : GalleryVideosValidator
  constructor () {
    this.galleryvideosService =  new GalleryVideosService()
    this.galleryvideosValidator =  new GalleryVideosValidator()
  }
  public async getGalleryVideosByLimit(ctx : HttpContextContract) {
    await this.galleryvideosValidator.validateGalleryVideosSchema(ctx)
    return this.galleryvideosService.getGalleryVideosByLimit(ctx)
  }
}
