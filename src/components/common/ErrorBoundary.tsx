import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "../../components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to error reporting service
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white/[0.05] backdrop-blur-[60px] border border-white/20 rounded-2xl p-8 shadow-[0_20px_60px_0_rgba(0,0,0,0.5)]">
              <h1 className="text-3xl text-white mb-4">Something went wrong</h1>
              <p className="text-gray-400 mb-6">
                We apologize for the inconvenience. Please try refreshing the
                page.
              </p>
              {this.state.error && (
                <p className="text-sm text-gray-500 mb-6 font-mono">
                  {this.state.error.message}
                </p>
              )}
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={this.handleReset}
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white"
                >
                  Try Again
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  variant="outline"
                  className="border-white/20"
                >
                  Reload Page
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
