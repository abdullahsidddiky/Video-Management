import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class VideoLibraryValidator {
  public async validateVideoLibrarySchema(ctx: HttpContextContract) {
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
  //create method
  public async validateVideoLibraryCreateSchema(ctx: HttpContextContract) {
    const VideoLibraryCreateSchema = schema.create({
      school_id: schema.number([rules.unique({ table: 'video_libraries', column: 'school_id' })]),
      library_name: schema.string({}, [
        rules.unique({ table: 'video_libraries', column: 'library_name' }),
      ]),
      description: schema.string(),
    })
    const msg = {
      'school_id.unique': 'school id must be unique',
      'description': ' description must be string',
    }
    try {
      const payload = await ctx.request.validate({
        schema: VideoLibraryCreateSchema,
        messages: msg,
      })

      return payload
    } catch (error) {
      return ctx.response.status(422).send(error.messages)
    }
  }

  //update method
  public async validateVideoLibraryUpdateSchema(ctx: HttpContextContract) {
    const VideoLibraryUpdateSchema = schema.create({
      library_name: schema.string({}, [
        rules.unique({ table: 'video_libraries', column: 'library_name' }),
      ]),
      description: schema.string(),
    })
    const msg = {
      'library_name.unique': 'library name must be unique',
    }
    try {
      const payload = await ctx.request.validate({
        schema: VideoLibraryUpdateSchema,
        messages: msg,
      })
      return payload
    } catch (error) {
      return ctx.response.status(422).send(error.messages)
    }
  }

  //delete method
  public async validateVideoLibraryDeleteSchema(ctx: HttpContextContract) {
    const VideoLibraryDeleteSchema = schema.create({
      id: schema.number(),
    })
    const msg = {
      id: 'you must insert id',
    }
    try {
      const payload = await ctx.request.validate({
        schema: VideoLibraryDeleteSchema,
        messages: msg,
      })
      return payload
    } catch (error) {
      return ctx.response.status(422).send(error.messages)
    }
  }
}
