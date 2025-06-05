
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-md">
        <AlertTriangle size={64} className="text-orange-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-6">
          The page you're looking for could not be found.
        </p>
        <p className="text-gray-500 mb-8">
          The requested URL {location.pathname} does not exist on this server.
        </p>
        <Button asChild className="bg-orange-600 hover:bg-orange-700">
          <a href="/">Return to Dashboard</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
