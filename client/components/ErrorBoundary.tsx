import React from "react"

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error): State {
    //   Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  static componentDidCatch(error, errorInfo: React.ErrorInfo): void {
    console.log(`error: ${error}.`)
    console.log(`errorInfo: ${JSON.stringify(errorInfo)}.`)
    console.log(`componentStack: ${errorInfo.componentStack}.`)
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <>
          Oops! Something went <i>very</i> wrong here. We're working hard to fix
          that. Sorry for the inconvenience!
        </>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
