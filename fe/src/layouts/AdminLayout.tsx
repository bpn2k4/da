import AdminHeader from "@components/AdminHeader"
import Container from "./Container"
import SideBar from "@components/SideBar"

const AdminLayout = (props: AdminLayoutProps) => {
  const { children } = props
  return (
    <Container className="text-rgb-255 dark:text-rgb-255">
      <div className="w-full h-full overflow-hidden flex flex-row">
        <div className="w-[240px] h-dvh bg-red-500">
          <SideBar />
        </div>
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </div>

      </div>
    </Container>
  )
}

type AdminLayoutProps = {
  children?: React.ReactNode
}

export default AdminLayout