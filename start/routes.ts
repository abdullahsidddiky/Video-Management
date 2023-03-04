/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import { Request } from '@adonisjs/core/build/standalone'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})
Route.get('read/:school_id', 'VideoGalleriesController.read')
Route.post('/create', 'VideoGalleriesController.create')
Route.put('/update/:school_id', 'VideoGalleriesController.update')
Route.delete('/delete/:school_id', 'VideoGalleriesController.delete')

Route.post(':id/create_cat/', 'GalleryCategoriesController.create_cat')
Route.get(':school_id/read_cat', 'GalleryCategoriesController.read_cat')

Route.post(':school_id/:category_id/create_videos', 'GalleryVideosController.create_video')
Route.post('/search', 'GalleryVideosController.search_video')
Route.post('/search/:catid', 'GalleryVideosController.search_by_catid')
Route.put('update_views/:id', 'GalleryVideosController.upate_videos_views')
