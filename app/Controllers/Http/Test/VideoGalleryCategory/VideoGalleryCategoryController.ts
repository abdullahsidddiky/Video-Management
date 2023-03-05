import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VideoGalleryCategoryService from './VideoGalleryCategoryService';
import VideoGalleryCategoryValidator from './VideoGalleryCategoryValidator';
export default class VideoGalleryCategoryController {
  private videogallerycategoryService : VideoGalleryCategoryService
  private videogallerycategoryValidator : VideoGalleryCategoryValidator
  constructor () {
    this.videogallerycategoryService =  new VideoGalleryCategoryService()
    this.videogallerycategoryValidator =  new VideoGalleryCategoryValidator()
  }
  public async getVideoGalleryCategoryByLimit(ctx : HttpContextContract) {
    await this.videogallerycategoryValidator.validateVideoGalleryCategorySchema(ctx)
    return this.videogallerycategoryService.getVideoGalleryCategoryByLimit(ctx)
  }
}
