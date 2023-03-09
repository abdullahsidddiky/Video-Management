import GalleryVideos from 'App/Models/VideoGalleryCategory'
import VideoGalleryCategory from 'App/Models/VideoGalleryCategory'
import VideoLibrary from 'App/Models/VideoLibrary'
import GalleryVideo from 'App/Models/GalleryVideo'
var slugify = require('slugify')
var data2
export default class GalleryVideosQuery {
  public async createVideoGalleryCategory(payload) {
    const library_videos = await VideoLibrary.query().where('id', payload.gallery_id).first()
    const gallery_category = await VideoGalleryCategory.query()
      .where('id', payload.category_id)
      .first()
    payload['slug'] = slugify(payload.title)
    if (library_videos && library_videos.library_name) {
      payload['gallery_id'] = library_videos.id
      payload['school_id'] = library_videos.school_id
    }
    if (gallery_category && gallery_category.category_name) {
      payload['category_id'] = gallery_category.id
      payload['category_name'] = gallery_category.category_name
    }
    console.log('from query library', payload)
    return GalleryVideo.create(payload)
  }
  public async updateVideoGalleryCategory(payload) {
    //return payload
    return await GalleryVideo.query().where('id', payload.id).update({ title: payload.title })
    //return User.query().where('id', 1).update({ category_name: data.category_name })
  }
  public async deleteVideoGalleryCategory(payload) {
    return await GalleryVideo.query().where('school_id', payload.school_id).delete()
    //return User.query().where('id', 1).update({ category_name: data.category_name })
  }
  public async readVideoGalleryCategory(payload) {
    return await GalleryVideo.query().where('school_id', payload.school_id)
    //return User.query().where('id', 1).update({ category_name: data.category_name })
  }
  public async pageBylimitVideoGalleryCategory(payload) {
    var page = 1
    if (payload.page) {
      page = payload.page
    }
    var limit = 1
    if (payload.limit) {
      limit = payload.limit
    }
    //return payload
    const data = GalleryVideo.query().where('gallery_id', payload.library_id)
    if (payload.category_id) {
      data.where('category_id', payload.category_id)
    }
    if (payload.search) {
      data.where('title', 'like', `%${payload.search}%`)
    }
    //`%${payload.title}%`
    return await data.paginate(page, limit)
  }

  public async getVideoByIdVideoGalleryCategory(payload) {
    const data = await GalleryVideo.query().where('id', payload.id).first()

    if (data) {
      data2 = GalleryVideo.query().where('id', '<>', data.id)
    }
    if (data && data.category) {
      data2 = await data2.where('category_id', data?.category_id)
    }
    //data2 = await data2.where('category_id', data?.category_id)

    return data
  }
  public async getSuggestedVideoGalleryCategory() {
    // /console.log(data2)

    return data2
  }
}
