import AdminHeader from "@components/AdminHeader"
import Container from "./Container"

const AdminLayout = (props: AdminLayoutProps) => {
  const { children } = props
  return (
    <Container>
      <AdminHeader />
      {children}
    </Container>
  )
}

type AdminLayoutProps = {
  children?: React.ReactNode
}

export default AdminLayout