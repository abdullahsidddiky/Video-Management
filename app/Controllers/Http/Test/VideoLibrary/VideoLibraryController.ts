import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VideoLibraryService from './VideoLibraryService'
import VideoLibraryValidator from './VideoLibraryValidator'
export default class VideoLibraryController {
  private videolibraryService: VideoLibraryService
  private videolibraryValidator: VideoLibraryValidator
  constructor() {
    this.videolibraryService = new VideoLibraryService()
    this.videolibraryValidator = new VideoLibraryValidator()
  }
  public async getVideoLibraryByLimit(ctx: HttpContextContract) {
    await this.videolibraryValidator.validateVideoLibrarySchema(ctx)
    return this.videolibraryService.getVideoLibraryByLimit(ctx)
  }

  public async createVideoLibrary(ctx: HttpContextContract) {
    await this.videolibraryValidator.validateVideoLibraryCreateSchema(ctx)
    return this.videolibraryService.createVideoLibraryNew(ctx)
  }

  public async updateVideoLibrary(ctx: HttpContextContract) {
    await this.videolibraryValidator.validateVideoLibraryUpdateSchema(ctx)
    return this.videolibraryService.updateVideoLibrary(ctx)
  }
  public async deleteVideoLibrary(ctx: HttpContextContract) {
    await this.videolibraryValidator.validateVideoLibraryDeleteSchema(ctx)
    return this.videolibraryService.deleteVideoLibrary(ctx)
  }
  public async readVideoLibrary(ctx: HttpContextContract) {
    await this.videolibraryValidator.validateVideoLibraryReadSchema(ctx)
    return this.videolibraryService.readVideoLibrary(ctx)
  }
}
