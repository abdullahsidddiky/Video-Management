import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import VideoLibrary from './VideoLibrary'
import GalleryVideo from './GalleryVideo'
export default class VideoGalleryCategory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public school_id: number

  @column()
  public category_name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => VideoLibrary)
  public library: BelongsTo<typeof VideoLibrary>

  @hasMany(() => GalleryVideo)
  public gallery_videos_category: HasMany<typeof GalleryVideo>
}
