import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import VideoGallery from './VideoGallery'
import GalleryVideo from './GalleryVideo'

export default class GalleryCategory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public category_name: string

  @column()
  public school_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => VideoGallery)
  public video_galleries: BelongsTo<typeof VideoGallery>

  @hasMany(() => GalleryVideo)
  public gallery_video: HasMany<typeof GalleryVideo>
}
