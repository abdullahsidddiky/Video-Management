import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class GalleryVideosValidator {
  public async validateGalleryCreateVideosSchema(ctx: HttpContextContract) {
    const createSchema = schema.create({
      title: schema.string({}, [rules.unique({ table: 'gallery_videos', column: 'title' })]),
      gallery_id: schema.number(),
      category_id: schema.number(),
      video_link: schema.string(),
    })
    const msg = {
      'title.required': 'title is required and has to be unique',
      'gallery_id.number': 'gallery id must be a number',
      'category_id.number': 'category id must be a number',
      'video_link.string': 'you must upload a video',
    }
    const payload = await ctx.request.validate({ schema: createSchema, messages: msg })
    return payload
  }
  public async validateGalleryUpdateVideosSchema(ctx: HttpContextContract) {
    const updateSchema = schema.create({
      title: schema.string({}, [rules.unique({ table: 'gallery_videos', column: 'title' })]),
      id: schema.number(),
    })
    const msg = {
      'title.require': 'title is required and has to be unique',
      'id.required': 'id must be number or not exist',
    }
    const payload = await ctx.request.validate({ schema: updateSchema, messages: msg })
    return payload
  }
  public async validateGalleryDeleteVideosSchema(ctx: HttpContextContract) {
    const deleteSchema = schema.create({
      school_id: schema.number(),
    })
    const msg = {
      'school_id.required': 'id is required',
    }
    const payload = await ctx.request.validate({ schema: deleteSchema, messages: msg })
    return payload
  }

  public async validateGalleryReadVideosSchema(ctx: HttpContextContract) {
    const readSchema = schema.create({
      school_id: schema.number(),
    })
    const msg = {
      'school_id.required': 'school id is required',
    }
    const payload = await ctx.request.validate({ schema: readSchema, messages: msg })
    return payload
  }
}
