import FormTask from '@/components/tasks/form-task'
import ListTasks from '@/components/tasks/list-task'
import { Suspense } from 'react'

function TasksPage() {
  return (
    <div>
      <FormTask />
      <h1 className="text-2xl font-bold">Tasks</h1>
      <Suspense fallback={<div>Loading tasks...</div>}>
        <ListTasks />
      </Suspense>
    </div>
  )
}
export default TasksPage
