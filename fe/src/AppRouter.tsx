import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import AdminLayout from "@layouts/AdminLayout"
import ChatLayout from "@layouts/ChatLayout"

import Chat from "@pages/Chat"
import Conversation from "@pages/Conversation"

import ChunkManager from "@pages/ChunkManager"
import DocumentManager from "@pages/DocumentManager"
import FileManager from "@pages/FileManager"

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
    path: '/c/:conversationId',
    element: (
      <ChatLayout>
        <Conversation />
      </ChatLayout>
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
        <Navigate replace={true} to="/admin/content" />
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
      </Routes>
      {children}
    </BrowserRouter>
  )
}

type AppRouterProps = {
  children?: React.ReactNode
}

export default AppRouter