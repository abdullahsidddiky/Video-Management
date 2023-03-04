import Route from '@ioc:Adonis/Core/Route'
Route.group(()=>{
  Route.get('testnewtest', 'newtest/newtestController.getnewtestByLimit')
}).prefix('test/newtest').middleware('auth')
