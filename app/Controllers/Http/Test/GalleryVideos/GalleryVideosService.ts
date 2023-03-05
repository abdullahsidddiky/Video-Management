import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GalleryVideosQuery from './GalleryVideosQuery';
export default class GalleryVideosService {
    private galleryvideosQuery : GalleryVideosQuery
    constructor(){
      this.galleryvideosQuery = new GalleryVideosQuery
    }
    public async getGalleryVideosByLimit(ctx : HttpContextContract){
      const limit = ctx.request.all().limit
      const user = await this.galleryvideosQuery.getUserByLimit(limit)
      return user
   }
};
