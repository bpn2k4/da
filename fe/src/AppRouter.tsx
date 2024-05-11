import { BrowserRouter, Route, Routes } from "react-router-dom"

import Chat from "@pages/Chat"
import AdminLayout from "@layouts/AdminLayout"
import Document from "@pages/Document"
import ChatLayout from "@layouts/ChatLayout"
import FileManager from "@pages/FileManager"
import DocumentManager from "@pages/DocumentManager"
import ChunkManager from "@pages/ChunkManager"

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
    path: '/admin/content',
    element: (
      <AdminLayout>
        <DocumentManager />
      </AdminLayout>
    )
  },
  {
    path: '/admin/content/document',
    element: (
      <AdminLayout>
        <DocumentManager />
      </AdminLayout>
    )
  },
  {
    path: '/admin/content/chunk',
    element: (
      <AdminLayout>
        <ChunkManager />
      </AdminLayout>
    )
  },
  {
    path: '/admin/content/file',
    element: (
      <AdminLayout>
        <FileManager />
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