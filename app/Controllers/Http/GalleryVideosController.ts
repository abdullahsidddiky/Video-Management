import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import VideoGallery from 'App/Models/VideoGallery'
import GalleryCategory from 'App/Models/GalleryCategory'
import GalleryVideo from 'App/Models/GalleryVideo'
//import Schema from '@ioc:Adonis/Lucid/Schema'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
//import { Slugify } from '@ioc:Adonis/Addons/LucidSlugify'
//import View from '@ioc:Adonis/Core/View'
import Database from '@ioc:Adonis/Lucid/Database'

export default class GalleryVideosController {
  public async create_video({ request }: HttpContextContract) {
    const slugify = require('slugify')
    const validator = schema.create({
      title: schema.string([rules.unique({ table: 'gallery_videos', column: 'title' })]),
      video_link: schema.string(),
      /*category_id: schema.number([rules.unsigned()]),
      gallery_id: schema.number([rules.unsigned()]),
      school_id: schema.number([rules.unsigned()])*/
    })
    const payload = await request.validate({ schema: validator })
    const v = request.params()
    const video_gallery = await VideoGallery.findBy('school_id', Number(v.school_id))
    const gallery_categoryy = await GalleryCategory.findBy('id', Number(v.category_id))
    const video = new GalleryVideo()
    if (
      video_gallery &&
      gallery_categoryy &&
      video_gallery.school_id == gallery_categoryy.school_id
    ) {
      video.title = payload.title
      video.slug = slugify(payload.title)

      if (gallery_categoryy && gallery_categoryy.category_name) {
        video.category_name = gallery_categoryy.category_name
      } else {
        video.category_name = 'Unknown'
      }
      if (gallery_categoryy && gallery_categoryy.id) {
        video.category_id = gallery_categoryy.id
      } else {
        video.category_id = 0
      }
      if (video_gallery && video_gallery.id) {
        video.gallery_id = video_gallery.id
      } else {
        video.gallery_id = 0
      }
      if (video_gallery && video_gallery.school_id) {
        video.school_id = video_gallery.school_id
      } else {
        video.school_id = 0
      }

      video.video_link = payload.video_link

      // return [gallery_category?.category_name, gallery_category?.id]
      await video.save()
      return video
    }
    return 'no match'
  }

  public async search_video({ request }: HttpContextContract) {
    const validator = schema.create({
      title: schema.string(),
    })
    const payload = await request.validate({ schema: validator })

    const query = Database.from('gallery_videos')
      .where('title', 'like', `%${payload.title}%`)
      .orWhere('category_name', 'like', `%${payload.title}%`)

    const posts = await query.select('*')
    if (posts) {
      return posts
    }
  }
  public async search_by_catid({ request }: HttpContextContract) {
    const validator = schema.create({
      id: schema.number(),
    })
    const payload = await request.validate({ schema: validator })
    console.log(payload)
  }

  public async upate_videos_views({ request }: HttpContextContract) {
    const validator = schema.create({
      views: schema.number([rules.unsigned()]),
    })
    const v = request.params()
    const payload = await request.validate({ schema: validator })
    const video = await GalleryVideo.findBy('id', Number(v.id))
    if (video) {
      video.views_count = payload.views
      await video.save()
      return video
    }
    return 'no match found'
  }
}
