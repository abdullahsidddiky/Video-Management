import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class VideoGalleryCategoryValidator {
  public async validateVideoGalleryCategorySchema(ctx: HttpContextContract) {
    const limitUserSchema = schema.create({
      limit: schema.number(),
    })
    const msg = {
      'limit.required': 'Limit is required',
      'limit.number': 'Limit must be a number',
    }
    try {
      const payload = await ctx.request.validate({ schema: limitUserSchema, messages: msg })
      return payload
    } catch (error) {
      return ctx.response.status(422).send(error.messages)
    }
  }
  public async validateVideoGalleryCreateSchema(ctx: HttpContextContract) {
    const videoGalleryCategoryCreateSchema = schema.create({
      category_name: schema.string({}, [
        rules.unique({ table: 'video_gallery_categories', column: 'category_name' }),
      ]),
      school_id: schema.number([rules.unsigned()]),
    })
    const msg = {
      'category_name.unique': 'must be unique',
      'school_id.required': 'id required',
    }
    return await ctx.request.validate({
      schema: videoGalleryCategoryCreateSchema,
      messages: msg,
    })
  }

  public async validateVideoGalleryUpdateSchema(ctx: HttpContextContract) {
    const videoGalleryCategoryUpdateSchema = schema.create({
      category_name: schema.string({}, [
        rules.unique({ table: 'video_gallery_categories', column: 'category_name' }),
      ]),
    })
    const msg = {
      'category_name.unique': 'must be unique',
    }
    const payload = await ctx.request.validate({
      schema: videoGalleryCategoryUpdateSchema,
      messages: msg,
    })
    return payload
  }

  public async validateVideoGalleryDeleteSchema(ctx: HttpContextContract) {
    const videoGalleryCategoryDeleteSchema = schema.create({
      id: schema.number([rules.unsigned()]),
    })
    const msg = {
      'id ': 'must be number and positive',
    }
    try {
      const payload = await ctx.request.validate({
        schema: videoGalleryCategoryDeleteSchema,
        messages: msg,
      })
      return payload
    } catch (error) {
      return ctx.response.status(422).send(error.messages)
    }
  }
  public async validateVideoGalleryReadSchema(ctx: HttpContextContract) {
    const videoGalleryCategoryReadSchema = schema.create({
      school_id: schema.number([rules.unsigned()]),
    })
    const msg = {
      'school id ': 'must be number and positive',
    }

    const payload = await ctx.request.validate({
      schema: videoGalleryCategoryReadSchema,
      messages: msg,
    })
    return payload
  }
}
