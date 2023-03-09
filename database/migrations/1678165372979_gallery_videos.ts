import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'gallery_videos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.string('slug')
      table.string('category_name')
      //table.integer('category_id').references('id').inTable('video_gallery_categories').onDelete('CASCADE')
      //table.integer('gallery_id').references('id').inTable('video_libraries').onDelete('CASCADE')
      table.integer('category_id')
      table.integer('gallery_id')
      table.integer('school_id')
      table.string('video_link')
      table.string('thumnail')
      table.integer('views_count')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
