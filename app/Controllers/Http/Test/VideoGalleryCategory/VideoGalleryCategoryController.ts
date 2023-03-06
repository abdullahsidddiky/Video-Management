import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VideoGalleryCategoryService from './VideoGalleryCategoryService'
import VideoGalleryCategoryValidator from './VideoGalleryCategoryValidator'
export default class VideoGalleryCategoryController {
  private videogallerycategoryService: VideoGalleryCategoryService
  private videogallerycategoryValidator: VideoGalleryCategoryValidator
  constructor() {
    this.videogallerycategoryService = new VideoGalleryCategoryService()
    this.videogallerycategoryValidator = new VideoGalleryCategoryValidator()
  }
  public async getVideoGalleryCategoryByLimit(ctx: HttpContextContract) {
    await this.videogallerycategoryValidator.validateVideoGalleryCategorySchema(ctx)
    return this.videogallerycategoryService.getVideoGalleryCategoryByLimit(ctx)
  }

  public async createVideoGalleryCategory(ctx: HttpContextContract) {
    try {
      const payload = await this.videogallerycategoryValidator.validateVideoGalleryCreateSchema(ctx)
      return this.videogallerycategoryService.createVideoGalleryCategory(payload)
    } catch (error) {
      return error
    }
  }
  public async readVideoGalleryCategory(ctx: HttpContextContract) {
    try {
      const payload = await this.videogallerycategoryValidator.validateVideoGalleryReadSchema(ctx)
      return this.videogallerycategoryService.readVideoGalleryCategory(payload)
    } catch (error) {
      return error
    }
  }
  public async updateVideoGalleryCategory(ctx: HttpContextContract) {
    try {
      const payload = await this.videogallerycategoryValidator.validateVideoGalleryUpdateSchema(ctx)
      return this.videogallerycategoryService.updateVideoGalleryCategory(payload)
    } catch (error) {
      return error
    }
  }
  public async deleteVideoGalleryCategory(ctx: HttpContextContract) {
    try {
      const payload = await this.videogallerycategoryValidator.validateVideoGalleryDeleteSchema(ctx)
      return this.videogallerycategoryService.deleteVideoGalleryCategory(payload)
    } catch (error) {
      return error
    }
  }
}
