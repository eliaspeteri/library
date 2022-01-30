import React, { Context, createContext, useContext, useState } from "react"

/** Default values */
// Toast message
const ToastContext: Context<string> = React.createContext("")
// eslint-disable-next-line @typescript-eslint/no-empty-function
const ToggleToastContext = createContext((newToastMsg: string) => {})

/** Custom hooks */
export const useToast = (): string => useContext(ToastContext)
export const useToastUpdate = (): ((newToastMsg: string) => void) =>
  useContext(ToggleToastContext)

interface Props {
  children: React.ReactNode
}

const ToastProvider = ({ children }: Props): JSX.Element => {
  const [msg, setMsg] = useState<string>("")

  const toggleToast = (newMsg: string): void => setMsg(newMsg)

  return (
    <ToastContext.Provider value={msg}>
      <ToggleToastContext.Provider value={toggleToast}>
        {children}
      </ToggleToastContext.Provider>
    </ToastContext.Provider>
  )
}

export default ToastProvider
