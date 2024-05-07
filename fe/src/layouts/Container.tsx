import { twMerge, useSelector } from "@hooks"

const Container = ({ children, className }: ContainerProps) => {

  const { theme } = useSelector(state => state.system)

  return (
    <div className={twMerge(
      "w-dvw h-dvh relative overflow-y-auto bg-primary text-primary",
      theme == "light" ? "track-light" : "track-dark",
      className
    )}>
      {children}
    </div>
  )
}

type ContainerProps = {
  children?: React.ReactNode,
  className?: string
}

export default Container