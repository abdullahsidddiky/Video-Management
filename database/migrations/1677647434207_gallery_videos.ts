import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'gallery_videos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.string('slug')
      table.string('category_name')
      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('gallery_categories')
        .onDelete('CASCADE')
      table
        .integer('gallery_id')
        .unsigned()
        .references('id')
        .inTable('video_galleries')
        .onDelete('CASCADE')
      table
        .integer('school_id')
        .unsigned()
        .references('school_id')
        .inTable('video_galleries')
        .onDelete('CASCADE')
      table.string('video_link')
      table.string('thumnail')
      table.integer('views_count')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
