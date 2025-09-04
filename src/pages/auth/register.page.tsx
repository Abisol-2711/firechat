import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useAuth } from 'reactfire'

const RegisterPage = () => {
  const auth = useAuth()

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      console.log('User signed in succesfully')
    } catch (error) {
      console.log('Error signing in with Google:', error)
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  )
}
export default RegisterPage
