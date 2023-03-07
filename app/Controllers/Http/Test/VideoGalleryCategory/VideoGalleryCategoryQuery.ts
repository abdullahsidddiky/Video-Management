import VideoGalleryCategory from 'App/Models/VideoGalleryCategory'
import User from 'App/Models/VideoGalleryCategory'

export default class VideoGalleryCategoryQuery {
  public async getUserByLimit(limit: number): Promise<User[]> {
    const user = User.query().limit(limit)
    return user
  }
  public async createVideoGalleryCategory(data) {
    return VideoGalleryCategory.create(data)
  }
  public async getVideoGalleryCategory(data) {
    return VideoGalleryCategory.query().where('school_id', data.school_id)
  }
  public async readVideoGalleryCategory(data) {
    return VideoGalleryCategory.query().where('school_id', data.school_id)
  }
  public async updateVideoGalleryCategory(data) {
    return User.query().where('id', 1).update({ category_name: data.category_name })
  }
  public async deleteVideoGalleryCategory(data) {
    return User.query().where('id', data.id).delete()
  }
}
//await VideoLibrary.query().where('id', data.id)
