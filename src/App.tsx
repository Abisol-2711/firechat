import { Route, Routes } from 'react-router'
import RootLayout from './layouts/root.layout'
import PublicLayout from './layouts/public.layout'
import AuthLayout from './layouts/auth.layout'
import AdminLayout from './layouts/admin.layout'
import HomePage from './pages/public/home.page'
import DashboardPage from './pages/admin/dashboard.page'
import ProfilePage from './pages/admin/profile.page'
import ChatPage from './pages/admin/chat.page'
import LoginPage from './pages/auth/login.page'
import RegisterPage from './pages/auth/register.page'
import NotFoundPage from './pages/public/not-found.page'

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* PUBLIC */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" index element={<NotFoundPage />} />
        </Route>

        {/* PRIVATE */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="profile" index element={<ProfilePage />} />
          <Route path="chat" index element={<ChatPage />} />
        </Route>

        {/* AUTH */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" index element={<LoginPage />} />
          <Route path="register" index element={<RegisterPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
export default App
