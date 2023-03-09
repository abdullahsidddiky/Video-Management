import Factory from '@ioc:Adonis/Lucid/Factory'
import GalleryVideo from 'App/Models/GalleryVideo'
import { DateTime } from 'luxon'
//import Factory from '@ioc:Adonis/Lucid/Factory'

export const VideoGalleryFactory = Factory.define(GalleryVideo, ({ faker }) => {
  return {
    title: faker.hacker.noun(),
    video_link: faker.image.avatar(),
    views_count: parseInt(faker.random.numeric()),
    createdAt: DateTime.local(),
    updatedAt: DateTime.local(),
  }
}).build()
