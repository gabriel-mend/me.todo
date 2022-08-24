import { TaskSchema } from './schemas/TaskSchemas'
import Realm from 'realm'

export const getRealm = async () =>
  await Realm.open({
    path: 'metodo-app',
    schema: [TaskSchema]
  })
