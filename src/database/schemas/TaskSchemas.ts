export const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'string',
    name: 'string',
    status: 'string',
    created_at: 'date'
  },
  primaryKey: '_id'
}
