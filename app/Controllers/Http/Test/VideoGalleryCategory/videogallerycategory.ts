import Route from '@ioc:Adonis/Core/Route'
Route.group(()=>{
  Route.get('testVideoGalleryCategory', 'VideoGalleryCategory/VideoGalleryCategoryController.getVideoGalleryCategoryByLimit')
}).prefix('test/videogallerycategory').middleware('auth')
