import Route from '@ioc:Adonis/Core/Route'
Route.group(()=>{
  Route.get('testGalleryVideos', 'GalleryVideos/GalleryVideosController.getGalleryVideosByLimit')
}).prefix('test/galleryvideos').middleware('auth')
