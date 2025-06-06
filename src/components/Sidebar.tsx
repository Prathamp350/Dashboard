
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Users, 
  BarChart3, 
  Settings, 
  FileText,
  Shield,
  Calendar,
  Award
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: BookOpen, label: 'Courses', path: '/courses' },
  { icon: Users, label: 'Users', path: '/users' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Shield, label: 'Compliance', path: '/compliance' },
  { icon: Calendar, label: 'Schedule', path: '/schedule' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // Expose the collapse function globally so Navbar can access it
  (window as any).toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    // Notify DashboardLayout about the toggle
    if ((window as any).onSidebarToggle) {
      (window as any).onSidebarToggle();
    }
  };

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col fixed left-0 top-0 h-screen z-40",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-center flex-shrink-0">
        {!isCollapsed && <Logo className="w-40 h-auto" />}
        {isCollapsed && (
          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
            <Shield size={16} className="text-orange-600" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group",
                isActive 
                  ? "bg-orange-50 text-orange-600 border border-orange-200" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Icon size={20} className={cn(
                "transition-colors",
                isActive ? "text-orange-600" : "text-gray-500 group-hover:text-gray-700"
              )} />
              {!isCollapsed && (
                <span className="font-medium text-sm">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Shield size={16} className="text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-green-900">Safety First</p>
              <p className="text-xs text-green-600 truncate">Compliance Status: Active</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
