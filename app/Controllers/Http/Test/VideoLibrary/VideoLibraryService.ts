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
    const data = ctx.request.only(['school_id', 'library_name', 'description'])

    await this.videolibraryQuery.createNewVideoLibrary({ data })
  }

  public async updateVideoLibrary(ctx: HttpContextContract) {
    const data = ctx.request.only(['id', 'library_name', 'description'])
    console.log(data)

    await this.videolibraryQuery.updateVideoLibrary({ data })
  }
  public async deleteVideoLibrary(ctx: HttpContextContract) {
    const data = ctx.request.only(['id'])
    await this.videolibraryQuery.deleteVideoLibrary({ data })
  }
  public async readVideoLibrary(ctx: HttpContextContract) {
    const data = ctx.request.only(['id'])
    const video = await this.videolibraryQuery.readVideoLibrary({ data })
    return video
  }
}
