import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  // Route.get('testVideoLibrary', 'VideoLibrary/VideoLibraryController.getVideoLibraryByLimit')
  Route.post('create', 'Test/VideoLibrary/VideoLibraryController.createVideoLibrary')
  Route.put('/update', 'Test/VideoLibrary/VideoLibraryController.updateVideoLibrary')
  Route.delete('/delete', 'Test/VideoLibrary/VideoLibraryController.deleteVideoLibrary')
  Route.post('/read', 'Test/VideoLibrary/VideoLibraryController.readVideoLibrary')
}).prefix('test/videolibrary')
