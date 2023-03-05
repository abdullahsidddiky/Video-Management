import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class VideoLibrary extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public school_id: number

  @column({ isPrimary: true })
  public library_name: string

  @column({ isPrimary: true })
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
