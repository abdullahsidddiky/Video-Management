import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VideoLibraryQuery from './VideoLibraryQuery'
export default class VideoLibraryService {
  private videolibraryQuery: VideoLibraryQuery
  constructor() {
    this.videolibraryQuery = new VideoLibraryQuery()
  }
  public async getVideoLibraryByLimit(ctx: HttpContextContract) {
    const limit = ctx.request.all().limit
    const user = await this.videolibraryQuery.getUserByLimit(limit)
    return user
  }
  public async createVideoLibraryNew(ctx: HttpContextContract) {
    const user = await this.createVideoLibraryNew(ctx.request.body)
  }
}
