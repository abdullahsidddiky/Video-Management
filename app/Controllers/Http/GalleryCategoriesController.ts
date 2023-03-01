import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import VideoGallery from 'App/Models/VideoGallery'
import GalleryCategory from 'App/Models/GalleryCategory'

export default class GalleryCategoriesController {
  public async create_cat({ request }: HttpContextContract) {
    const validator = schema.create({
      category_name: schema.string([
        rules.unique({ table: 'gallery_categories', column: 'category_name' }),
      ]),
    })

    const payload = await request.validate({ schema: validator })
    const v = request.params()

    const category = new GalleryCategory()
    category.category_name = payload.category_name
    const video = await VideoGallery.findBy('id', Number(v.id))
    if (video) {
      category.school_id = video.school_id
      await category.save()
      return 'done'
    }
    console.log(typeof v.id)
    return 'not found'
  }

  public async update_cat({ request }: HttpContextContract) {
    const validator = schema.create({
      category_name: schema.string(),
    })
    const payload = await request.validate({ schema: validator })
    const v = request.params()
    const category = await GalleryCategory.findBy('id', Number(v.id))
    if (category) {
      category.category_name = payload.category_name
      return 'update success'
    }
    return 'no match found'
  }

  public async read_cat({ request }: HttpContextContract) {
    const v = request.params()
    const category = await GalleryCategory.query().where('school_id', Number(v.school_id))
    if (category) {
      return category
    }
    return 'no match found'
  }
}
