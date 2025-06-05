
import { ReactNode, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // Listen for sidebar toggle events
    const handleSidebarToggle = () => {
      setIsCollapsed(prev => !prev);
    };

    (window as any).onSidebarToggle = handleSidebarToggle;
    
    return () => {
      delete (window as any).onSidebarToggle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Sidebar />
      <div 
        className={`flex flex-col min-w-0 h-screen transition-all duration-300 ${
          isCollapsed ? 'ml-16' : 'ml-64'
        }`}
      >
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
