import type { Task } from '@/schemas/task.schema'
import {
  collection,
  query,
  where,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire'

function useTaskActions() {
  const { data: user } = useUser()

  // console.log({ user })

  const db = useFirestore()
  const tasksCollectionRef = collection(db, 'tasks')

  const tasksQuery = query(tasksCollectionRef, where('userId', '==', user?.uid))

  const { status, data: tasks } = useFirestoreCollectionData(tasksQuery, {
    idField: 'id',
    suspense: true,
  })

  //CREATE TASK
  const createTask = async (data: { title: string; description?: string }) => {
    const newTask = {
      ...data,
      completed: false,
      userId: user!.uid,
    }

    return await addDoc(tasksCollectionRef, newTask)
  }

  //DELETE TASK
  const deleteTask = async (taskId: string) => {
    const taskDocRef = doc(tasksCollectionRef, taskId)
    return await deleteDoc(taskDocRef)
  }

  //UPDATE TASK
  const updateTask = async (taskId: string) => {
    const task = tasks?.find((task) => task.id === taskId)

    if (!task) {
      throw new Error('Task not found')
    }

    const taskDocRef = doc(tasksCollectionRef, taskId)
    return await updateDoc(taskDocRef, {
      completed: !task?.completed,
    })
  }

  return {
    tasks: tasks as Task[],
    loading: status === 'loading',

    createTask,
    deleteTask,
    updateTask,
  }
}

export default useTaskActions
