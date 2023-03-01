import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import VideoGallery from 'App/Models/VideoGallery'
export default class VideoGalleriesController {
  public async create({ request }: HttpContextContract) {
    const validator = schema.create({
      video_gallery: schema.string([
        rules.unique({ table: 'video_galleries', column: 'gallery_name' }),
      ]),
      school_id: schema.number([rules.unsigned()]),
    })
    const payload = await request.validate({ schema: validator })
    const video = new VideoGallery()
    video.gallery_name = payload.video_gallery
    video.school_id = payload.school_id
    await video.save()
    return video
  }

  public async update({ request }: HttpContextContract) {
    const validator = schema.create({
      video_gallery: schema.string(),
    })
    const payload = await request.validate({ schema: validator })
    const v = request.params()
    const video = await VideoGallery.findBy('school_id', Number(v.school_id))
    if (video) {
      video.gallery_name = payload.video_gallery
      await video.save()
    }
    return 'update complete'
  }
  public async delete({ request }: HttpContextContract) {
    const v = request.params()
    const video = await VideoGallery.findBy('school_id', Number(v.school_id))
    if (video) {
      video.delete()
      return 'gallery deleted'
    }
    return 'No match found'
  }

  public async read({ request }: HttpContextContract) {
    const v = request.params()
    const video = await VideoGallery.findBy('school_id', Number(v.school_id))
    if (video) {
      return video
    }
    return 'no match found'
  }
}
