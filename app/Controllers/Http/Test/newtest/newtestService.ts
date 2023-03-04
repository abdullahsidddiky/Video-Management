import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import newtestQuery from './newtestQuery';
export default class newtestService {
    private newtestQuery : newtestQuery
    constructor(){
      this.newtestQuery = new newtestQuery
    }
    public async getnewtestByLimit(ctx : HttpContextContract){
      const limit = ctx.request.all().limit
      const user = await this.newtestQuery.getUserByLimit(limit)
      return user
   }
};
