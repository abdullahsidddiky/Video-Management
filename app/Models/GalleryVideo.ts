import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import VideoLibrary from './VideoLibrary'
import VideoGalleryCategory from './VideoGalleryCategory'

export default class GalleryVideo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public slug: string

  @column()
  public category_name: string

  @column()
  public category_id: number

  @column()
  public gallery_id: number

  @column()
  public school_id: number

  @column()
  public video_link: string

  @column()
  public thumnail: string

  @column()
  public views_count: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => VideoLibrary)
  public library: BelongsTo<typeof VideoLibrary>
  @belongsTo(() => VideoGalleryCategory)
  public category: BelongsTo<typeof VideoGalleryCategory>
}
