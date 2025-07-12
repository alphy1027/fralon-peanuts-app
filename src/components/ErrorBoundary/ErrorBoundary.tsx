// src/components/ErrorBoundary.tsx
import React, { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div className="p-8 text-center text-red-600">
          <h2 className="text-2xl font-semibold">Something went wrong.</h2>
          <p className="mt-2">{this.state.error.message}</p>
          <Link to="/">Go To Homepage</Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
