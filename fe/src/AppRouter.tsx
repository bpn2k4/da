import { BrowserRouter, Route, Routes } from "react-router-dom"

import Chat from "@pages/Chat"
import AdminLayout from "@layouts/AdminLayout"
import Document from "@pages/Document"
import ChatLayout from "@layouts/ChatLayout"

const routes = [
  {
    path: '/',
    element: (
      <ChatLayout>
        <Chat />
      </ChatLayout>
    )
  },
  {
    path: '/admin',
    element: (
      <AdminLayout>
        <Document />
      </AdminLayout>
    )
  },
  {
    path: '/admin/*',
    element: (
      <AdminLayout>
        <Document />
      </AdminLayout>
    )
  },
]


const AppRouter = (props: AppRouterProps) => {
  const { children } = props

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route
            key={index}
            path={path}
            element={element} />
        ))}
        {children}

      </Routes>
    </BrowserRouter>
  )
}

type AppRouterProps = {
  children?: React.ReactNode
}

export default AppRouter