import React, { ReactText, useEffect } from "react"

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

/** Toast context / custom hooks */
import { useToast, useToastUpdate } from "../contexts/ToastContext"

const Toast = (): JSX.Element => {
  const toastMsg: string = useToast()
  const toastUpdate: (newMsg: string) => void = useToastUpdate()

  useEffect((): void => {
    toastMsg && showNotification(toastMsg)
    /** Set message immediately to empty, so next prop changes trigger toast,
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
      newestOnTop={true}
      pauseOnFocusLoss
      pauseOnHover
      position={"bottom-center"}
      rtl={false}
    />
  )
}

export default Toast
