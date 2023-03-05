import User from 'App/Models/VideoLibrary'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class VideoLibraryQuery {
  public async getUserByLimit(limit: number): Promise<User[]> {
    const user = User.query().limit(limit)
    return user
  }
  public async createNewVideoLibrary(ctx: HttpContextContract) {
    const data = ctx.request.only(['school_id', 'library_name', 'description'])
    console.log(data)
  }
}

/*
public async store(ctx: HttpContextContract) {
  const userData = ctx.request.only(['name', 'email', 'password'])
  const user = new User()
  user.fill(userData)
  await user.save()
  return user
}

*/
