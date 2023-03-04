import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import newtestService from './newtestService';
import newtestValidator from './newtestValidator';
export default class newtestController {
  private newtestService : newtestService
  private newtestValidator : newtestValidator
  constructor () {
    this.newtestService =  new newtestService()
    this.newtestValidator =  new newtestValidator()
  }
  public async getnewtestByLimit(ctx : HttpContextContract) {
    await this.newtestValidator.validatenewtestSchema(ctx)
    return this.newtestService.getnewtestByLimit(ctx)
  }
}
