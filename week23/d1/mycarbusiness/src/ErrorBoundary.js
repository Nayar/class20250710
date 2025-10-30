import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        // alert("inside here")
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // alert("inside this one")
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
  }

    render() {
        if(this.state.hasError == false) {
            return this.props.children
        }
        else{
            return (

                <>
                    <h1 style={{color: "red"}}>This is an error which is handled</h1>
                </>
            )
        }
    }
}

export default ErrorBoundary