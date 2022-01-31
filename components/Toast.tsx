import React, { ReactText, useEffect } from "react"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

/** Toast context / custom hooks */
import { useToast, useToastUpdate } from "../context/ToastContext"

const Toast: React.FC = (): JSX.Element => {
  const toastMsg: string = useToast()
  const toastUpdate: (newMsg: string) => void = useToastUpdate()

  useEffect(() => {
    toastMsg && showNotification(toastMsg)
    /** Set msg immediately empty, so next prop changes trigger toast,
     even if toast message is same as previous */
    setTimeout((): void => {
      toastUpdate("")
    }, 5 * 1000)
  })

  const showNotification = (message: string): ReactText =>
    toast.info(message, { style: { border: "1px solid white" } })

  return (
    <ToastContainer
      autoClose={3000}
      closeOnClick
      draggable={false}
      hideProgressBar
      newestOnTop={false}
      pauseOnFocusLoss
      pauseOnHover
      position={"top-center"}
      rtl={false}
    />
  )
}

export default Toast
