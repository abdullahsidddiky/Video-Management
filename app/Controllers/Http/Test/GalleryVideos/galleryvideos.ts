import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.get('testGalleryVideos', 'GalleryVideos/GalleryVideosController.getGalleryVideosByLimit')
  Route.post('create', 'Test/GalleryVideos/GalleryVideosController.createGalleryVideos')
  Route.put('update', 'Test/GalleryVideos/GalleryVideosController.updateGalleryVideos')
  Route.delete('delete', 'Test/GalleryVideos/GalleryVideosController.deleteGalleryVideos')
  Route.post('read', 'Test/GalleryVideos/GalleryVideosController.readGalleryVideos')
  Route.get(
    ':library_id/page/',
    'Test/GalleryVideos/GalleryVideosController.pageBylimitGalleryVideos'
  )
  Route.get('search/', 'Test/GalleryVideos/GalleryVideosController.getVideoByGalleryVideos')
  Route.get(
    'suggested/',
    'Test/GalleryVideos/GalleryVideosController.getSuggestedVideoByGalleryVideos'
  )
}).prefix('test/galleryvideos')
