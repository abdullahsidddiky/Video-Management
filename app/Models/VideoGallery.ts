import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import GalleryCategory from './GalleryCategory'

export default class VideoGallery extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public gallery_name: string

  @column()
  public school_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => GalleryCategory, { foreignKey: 'school_id' })
  public video_galleries: HasMany<typeof GalleryCategory>
}
