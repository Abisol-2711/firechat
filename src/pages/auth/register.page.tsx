import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import CardFooterAuth from '@/components/card-footer-auth'
import { useAuthActions } from '@/hooks/use-auth-actions'

const RegisterPage = () => {
  const { loading } = useAuthActions()

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Sign up to your account or continue with Google
        </CardDescription>
      </CardHeader>
      <CardContent>...</CardContent>
      <CardFooterAuth type="register" loading={loading} />
    </Card>
  )
}
export default RegisterPage
