import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.get('testVideoLibrary', 'VideoLibrary/VideoLibraryController.getVideoLibraryByLimit')
  Route.post('create', 'VideoLibrary/VideoLibraryController.createVideoLibrary')
}).prefix('test/videolibrary')
