import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GalleryVideosQuery from './GalleryVideosQuery'
export default class GalleryVideosService {
  private galleryvideosQuery: GalleryVideosQuery
  constructor() {
    this.galleryvideosQuery = new GalleryVideosQuery()
  }

  public async createVideoGallery(payload) {
    return this.galleryvideosQuery.createVideoGalleryCategory(payload)
  }
  public async updateVideoGallery(payload) {
    return this.galleryvideosQuery.deleteVideoGalleryCategory(payload)
  }
  public async deleteVideoGallery(payload) {
    return this.galleryvideosQuery.deleteVideoGalleryCategory(payload)
  }
  public async readVideoGallery(payload) {
    return this.galleryvideosQuery.readVideoGalleryCategory(payload)
  }
  public async pageBylimitVideoGallery(payload) {
    return this.galleryvideosQuery.pageBylimitVideoGalleryCategory(payload)
  }

  public async getVideoByIdVideoGallery(payload) {
    //return payload
    return this.galleryvideosQuery.getVideoByIdVideoGalleryCategory(payload)
  }
  public async getSuggestedVideoByIdVideoGallery() {
    //return payload
    return this.galleryvideosQuery.getSuggestedVideoGalleryCategory()
  }
}

//createVideoGalleryCategory
