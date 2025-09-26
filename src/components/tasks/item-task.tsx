import useTaskActions from '@/hooks/use-taks-actions'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardAction,
} from '../ui/card'
import { Button } from '../ui/button'
import { useTransition } from 'react'
import type { Task } from '@/schemas/task.schema'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

interface Props {
  task: Task
}

const ItemTask = ({ task }: Props) => {
  const { deleteTask, updateTask } = useTaskActions()
  const [isPending, startTransition] = useTransition()

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteTask(task.id!)
      } catch (error) {
        console.error(error)
        toast.error('Error deleting task')
      }
    })
  }

  const handleUpdate = () => {
    startTransition(async () => {
      try {
        await updateTask(task.id!)
      } catch (error) {
        console.error(error)
        toast.error('Error updating task')
      }
    })
  }

  return (
    <Card className="p-4 mb-2">
      <CardHeader>
        <CardTitle
          className={cn(
            'text-lg font-semibold',
            task.completed ? 'line-through text-gray-500' : ''
          )}
        >
          {task.title}
        </CardTitle>
        <CardAction className="space-x-2">
          <Button variant="outline" onClick={handleUpdate} disabled={isPending}>
            Update
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isPending}
          >
            Delete
          </Button>
        </CardAction>
        {task.description && <CardContent>{task.description}</CardContent>}
      </CardHeader>
    </Card>
  )
}
export default ItemTask
