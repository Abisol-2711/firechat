import { useFirestore } from 'reactfire'
import type { User } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import type { UserFirestore } from '@/schemas/user.schema'

export const useUserActions = () => {
  const db = useFirestore()

  const createOrUpdateUser = async (user: User) => {
    if (!user) throw new Error('No user provided')

    //Referenciar el documento del user en Firestore
    const userDocRef = doc(db, 'users', user.uid)

    const userData: UserFirestore = {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
    }

    return await setDoc(userDocRef, userData, { merge: true })
  }

  return { createOrUpdateUser }
}
