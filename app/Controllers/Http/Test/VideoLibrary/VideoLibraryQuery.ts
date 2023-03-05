import User from 'App/Models/VideoLibrary'

import VideoLibrary from 'App/Models/VideoLibrary'
export default class VideoLibraryQuery {
  public async getUserByLimit(limit: number): Promise<User[]> {
    const user = User.query().limit(limit)
    return user
  }
  public async createNewVideoLibrary({ data }) {
    const video = new VideoLibrary()
    video.school_id = data.school_id
    video.library_name = data.library_name
    video.description = data.description
    video.save()
  }

  public async updateVideoLibrary({ data }) {
    /*const video = await VideoLibrary.findBy('id', data.id)
    if (video) {
      video.library_name = data.library_name
      video.description = data.description
      video.save()
      console.log('saved')
    } else {
      console.log('erorr')
    }*/
    await VideoLibrary.query()
      .where('id', data.id)
      .update({ library_name: data.library_name, description: data.description })
  }

  public async deleteVideoLibrary({ data }) {
    await VideoLibrary.query().where('id', data.id).delete()
  }

  public async readVideoLibrary({ data }) {
    const video = await VideoLibrary.query().where('id', data.id)
    return video
  }
}
