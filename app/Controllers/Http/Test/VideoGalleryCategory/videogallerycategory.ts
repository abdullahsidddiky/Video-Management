import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.get(
    'testVideoGalleryCategory',
    'VideoGalleryCategory/VideoGalleryCategoryController.getVideoGalleryCategoryByLimit'
  )
  Route.post(
    'create',
    'Test/VideoGalleryCategory/VideoGalleryCategoryController.createVideoGalleryCategory'
  )
  Route.post(
    'read',
    'Test/VideoGalleryCategory/VideoGalleryCategoryController.readVideoGalleryCategory'
  )
  Route.post(
    'update',
    'Test/VideoGalleryCategory/VideoGalleryCategoryController.updateVideoGalleryCategory'
  )
  Route.delete(
    'delete',
    'Test/VideoGalleryCategory/VideoGalleryCategoryController.deleteVideoGalleryCategory'
  )
}).prefix('test/videogallerycategory')
