import Factory from '@ioc:Adonis/Lucid/Factory'
import GalleryVideo from 'App/Models/GalleryVideo'
import { DateTime } from 'luxon'
//import Factory from '@ioc:Adonis/Lucid/Factory'
var slugify = require('slugify')
export const VideoGalleryFactory = Factory.define(GalleryVideo, ({ faker }) => {
  return {
    title: faker.hacker.noun(),
    slug: slugify(faker.hacker.noun()),
    category_name: faker.commerce.department(),
    gallery_id: parseInt(faker.random.numeric(1)),
    category_id: parseInt(faker.random.numeric(1)),
    video_link: faker.image.avatar(),
    views_count: parseInt(faker.random.numeric()),
    createdAt: DateTime.local(),
    updatedAt: DateTime.local(),
  }
}).build()
