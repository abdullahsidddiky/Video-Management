import Route from '@ioc:Adonis/Core/Route'
Route.group(()=>{
  Route.get('testVideoLibrary', 'VideoLibrary/VideoLibraryController.getVideoLibraryByLimit')
}).prefix('test/videolibrary').middleware('auth')
