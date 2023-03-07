import GalleryVideos from 'App/Models/VideoGalleryCategory'
import VideoGalleryCategory from 'App/Models/VideoGalleryCategory'
import VideoLibrary from 'App/Models/VideoLibrary'
import GalleryVideo from 'App/Models/GalleryVideo'
var slugify = require('slugify')
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
}
