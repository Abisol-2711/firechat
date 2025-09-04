import { CardFooter } from './ui/card'
import { Button } from './ui/button'
import { useAuthActions } from '@/hooks/use-auth-actions'
import { toast } from 'sonner'
import { Link } from 'react-router'

interface props {
  type: 'login' | 'register'
  loading: boolean
}

const CardFooterAuth = ({ type, loading }: props) => {
  const isLogin = type === 'login'

  const { loginWithGoogle } = useAuthActions()

  const handleLoginWithGoogle = async () => {
    const result = await loginWithGoogle()
    if (result.success) {
      console.log('Login successful')
    } else {
      console.error('Login failed:', result.error)
      toast.error('Login failed:')
    }
  }
  return (
    <CardFooter className="flex flex-col items-center gap-4">
      <Button
        variant="outline"
        className="w-full"
        onClick={handleLoginWithGoogle}
        disabled={loading}
      >
        {isLogin ? 'Login with Google' : 'Register with Google'}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <Link to={isLogin ? '/auth/register' : '/auth/login'}>
          <Button variant="link" className="p-0 h-auto font-normal">
            {isLogin ? 'Register' : 'Sign in'}
          </Button>
        </Link>
      </p>
    </CardFooter>
  )
}
export default CardFooterAuth
