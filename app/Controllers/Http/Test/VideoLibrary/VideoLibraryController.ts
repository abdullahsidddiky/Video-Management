import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VideoLibraryService from './VideoLibraryService';
import VideoLibraryValidator from './VideoLibraryValidator';
export default class VideoLibraryController {
  private videolibraryService : VideoLibraryService
  private videolibraryValidator : VideoLibraryValidator
  constructor () {
    this.videolibraryService =  new VideoLibraryService()
    this.videolibraryValidator =  new VideoLibraryValidator()
  }
  public async getVideoLibraryByLimit(ctx : HttpContextContract) {
    await this.videolibraryValidator.validateVideoLibrarySchema(ctx)
    return this.videolibraryService.getVideoLibraryByLimit(ctx)
  }
}
