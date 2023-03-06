import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VideoGalleryCategoryQuery from './VideoGalleryCategoryQuery'
export default class VideoGalleryCategoryService {
  private videogallerycategoryQuery: VideoGalleryCategoryQuery
  constructor() {
    this.videogallerycategoryQuery = new VideoGalleryCategoryQuery()
  }
  public async getVideoGalleryCategoryByLimit(ctx: HttpContextContract) {
    const limit = ctx.request.all().limit
    const user = await this.videogallerycategoryQuery.getUserByLimit(limit)
    return user
  }

  public async createVideoGalleryCategory(payload) {
    return this.videogallerycategoryQuery.createVideoGalleryCategory(payload)
  }
  public async readVideoGalleryCategory(payload) {
    return this.videogallerycategoryQuery.readVideoGalleryCategory(payload)
    console.log(payload)
  }
  public async updateVideoGalleryCategory(payload) {
    return this.videogallerycategoryQuery.updateVideoGalleryCategory(payload)
    console.log(payload)
  }
  public async deleteVideoGalleryCategory(payload) {
    return this.videogallerycategoryQuery.deleteVideoGalleryCategory(payload)
    console.log(payload)
  }
}
