import Navbar from '@/components/navbar'
import { Navigate, Outlet } from 'react-router'
import { useSigninCheck } from 'reactfire'

const AdminLayout = () => {
  const { status, data: signInCheckResult, hasEmitted } = useSigninCheck()

  // console.log({
  //   status,
  //   signInCheckResult,
  //   hasEmitted,
  // })

  if (status === 'loading' || !hasEmitted) {
    return <div>Loading...</div>
  }

  if (status === 'success' && !signInCheckResult.signedIn) {
    return <Navigate to="/auth/login" replace />
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  )
}
export default AdminLayout
