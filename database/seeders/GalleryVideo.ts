import Database from '@ioc:Adonis/Lucid/Database'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { VideoGalleryFactory } from 'Database/factories'
export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const data = await VideoGalleryFactory.createMany(200)
    await Database.table('gallery_videos').insert(data)
  }
}
