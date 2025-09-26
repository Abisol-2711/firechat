import useTaskActions from '@/hooks/use-taks-actions'
import ItemTask from './item-task'

const ListTasks = () => {
  const { tasks } = useTaskActions()
  return (
    <div className="mt-4 space-y-4">
      {/* <pre>{JSON.stringify(tasks, null, 2)}</pre> */}
      {tasks.map((task) => (
        <ItemTask key={task.id} task={task} />
      ))}
    </div>
  )
}
export default ListTasks
