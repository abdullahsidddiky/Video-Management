import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VideoGalleryCategoryQuery from './VideoGalleryCategoryQuery';
export default class VideoGalleryCategoryService {
    private videogallerycategoryQuery : VideoGalleryCategoryQuery
    constructor(){
      this.videogallerycategoryQuery = new VideoGalleryCategoryQuery
    }
    public async getVideoGalleryCategoryByLimit(ctx : HttpContextContract){
      const limit = ctx.request.all().limit
      const user = await this.videogallerycategoryQuery.getUserByLimit(limit)
      return user
   }
};
