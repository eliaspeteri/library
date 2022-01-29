/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Record<string, unknown>, State> {
  constructor(
    props: Record<string, unknown> | Readonly<Record<string, unknown>>
  ) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    //   Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  static componentDidCatch(error: any, errorInfo: React.ErrorInfo): void {
    console.log(`error: ${error}.`)
    console.log(`errorInfo: ${JSON.stringify(errorInfo)}.`)
    console.log(`componentStack: ${errorInfo.componentStack}.`)
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <>
          Oops! Something went <i>very</i> wrong here. We&apos;re working hard
          to fix that. Sorry for the inconvenience!
        </>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
