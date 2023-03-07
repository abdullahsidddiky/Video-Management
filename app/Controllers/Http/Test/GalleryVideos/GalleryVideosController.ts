import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GalleryVideosService from './GalleryVideosService'
import GalleryVideosValidator from './GalleryVideosValidator'
export default class GalleryVideosController {
  private galleryvideosService: GalleryVideosService
  private galleryvideosValidator: GalleryVideosValidator
  constructor() {
    this.galleryvideosService = new GalleryVideosService()
    this.galleryvideosValidator = new GalleryVideosValidator()
  }
  s
  public async createGalleryVideos(ctx: HttpContextContract) {
    try {
      const payload = await this.galleryvideosValidator.validateGalleryCreateVideosSchema(ctx)
      return this.galleryvideosService.createVideoGallery(payload)
    } catch (error) {
      return error
    }
  }
  public async updateGalleryVideos(ctx: HttpContextContract) {
    try {
      const payload = await this.galleryvideosValidator.validateGalleryUpdateVideosSchema(ctx)
      return this.galleryvideosService.updateVideoGallery(payload)
    } catch (error) {
      return error
    }
  }
  public async deleteGalleryVideos(ctx: HttpContextContract) {
    try {
      const payload = await this.galleryvideosValidator.validateGalleryDeleteVideosSchema(ctx)
      return this.galleryvideosService.deleteVideoGallery(payload)
    } catch (error) {
      return error
    }
  }
  public async readGalleryVideos(ctx: HttpContextContract) {
    try {
      const payload = await this.galleryvideosValidator.validateGalleryReadVideosSchema(ctx)
      console.log(ctx.request.body())

      return this.galleryvideosService.readVideoGallery(payload)
    } catch (error) {
      return error
    }
  }
}
