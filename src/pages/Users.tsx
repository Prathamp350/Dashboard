
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, User, Users as UsersIcon, Mail, Phone, ArrowUpDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

// Mock users data
const usersData = [
  {
    id: "u1",
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@company.com",
    phone: "+1 (555) 123-4567",
    role: "Safety Officer",
    department: "Manufacturing",
    courses: 12,
    compliance: 95,
    status: "active",
    lastLogin: "2024-12-05",
    initials: "JS"
  },
  {
    id: "u2",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@company.com",
    phone: "+1 (555) 234-5678",
    role: "Team Leader",
    department: "Warehouse",
    courses: 8,
    compliance: 88,
    status: "active",
    lastLogin: "2024-12-04",
    initials: "SJ"
  },
  {
    id: "u3",
    firstName: "Mike",
    lastName: "Wilson",
    email: "mike.wilson@company.com",
    phone: "+1 (555) 345-6789",
    role: "Technician",
    department: "Maintenance",
    courses: 15,
    compliance: 98,
    status: "active",
    lastLogin: "2024-12-03",
    initials: "MW"
  },
  {
    id: "u4",
    firstName: "Lisa",
    lastName: "Davis",
    email: "lisa.davis@company.com",
    phone: "+1 (555) 456-7890",
    role: "Inspector",
    department: "Quality Control",
    courses: 6,
    compliance: 72,
    status: "inactive",
    lastLogin: "2024-11-20",
    initials: "LD"
  },
  {
    id: "u5",
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@company.com",
    phone: "+1 (555) 567-8901",
    role: "Operator",
    department: "Production",
    courses: 10,
    compliance: 91,
    status: "active",
    lastLogin: "2024-12-02",
    initials: "DB"
  },
  {
    id: "u6",
    firstName: "Emma",
    lastName: "Taylor",
    email: "emma.taylor@company.com",
    phone: "+1 (555) 678-9012",
    role: "HR Manager",
    department: "Administration",
    courses: 7,
    compliance: 96,
    status: "active",
    lastLogin: "2024-12-01",
    initials: "ET"
  }
];

// Department filters
const departments = [
  { key: "all", label: "All" },
  { key: "manufacturing", label: "Manufacturing" },
  { key: "warehouse", label: "Warehouse" },
  { key: "maintenance", label: "Maintenance" },
  { key: "quality-control", label: "Quality Control" },
  { key: "production", label: "Production" },
  { key: "administration", label: "Administration" }
];

const Users = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDepartment, setActiveDepartment] = useState("all");
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Handle sorting
  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Filter and sort users
  const filteredUsers = usersData.filter(user => {
    const searchFields = [
      user.firstName, 
      user.lastName, 
      user.email, 
      user.role, 
      user.department
    ].join(" ").toLowerCase();
    
    const matchesSearch = searchFields.includes(searchQuery.toLowerCase());
    const matchesDepartment = activeDepartment === "all" || 
                             user.department.toLowerCase().replace(/\s+/g, '-') === activeDepartment;
    
    return matchesSearch && matchesDepartment;
  }).sort((a, b) => {
    if (!sortField) return 0;
    
    let comparison = 0;
    switch (sortField) {
      case "name":
        comparison = `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
        break;
      case "role":
        comparison = a.role.localeCompare(b.role);
        break;
      case "compliance":
        comparison = a.compliance - b.compliance;
        break;
      case "lastLogin":
        comparison = new Date(a.lastLogin).getTime() - new Date(b.lastLogin).getTime();
        break;
      default:
        return 0;
    }
    
    return sortDirection === "asc" ? comparison : -comparison;
  });

  // Stats from filtered data
  const totalUsers = filteredUsers.length;
  const activeUsers = filteredUsers.filter(user => user.status === "active").length;
  const inactiveUsers = totalUsers - activeUsers;
  const avgCompliance = filteredUsers.length 
    ? Math.round(filteredUsers.reduce((acc, user) => acc + user.compliance, 0) / filteredUsers.length) 
    : 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <Button 
          onClick={() => navigate('/users/add')}
          className="bg-orange-500 hover:bg-orange-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-md">
              <UsersIcon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{totalUsers}</p>
              <p className="text-sm text-gray-600">Total Users</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-md">
              <User className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{activeUsers}</p>
              <p className="text-sm text-gray-600">Active Users</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-md">
              <User className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{inactiveUsers}</p>
              <p className="text-sm text-gray-600">Inactive Users</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-md">
              <UsersIcon className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{avgCompliance}%</p>
              <p className="text-sm text-gray-600">Avg Compliance</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {departments.map(dept => (
            <Button
              key={dept.key}
              variant={activeDepartment === dept.key ? "default" : "outline"}
              className={activeDepartment === dept.key ? "bg-orange-500 hover:bg-orange-600" : ""}
              onClick={() => setActiveDepartment(dept.key)}
            >
              {dept.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Users List */}
      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-4">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${
                    user.status === 'active' ? 'bg-orange-500' : 'bg-gray-400'
                  }`}
                >
                  {user.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{user.firstName} {user.lastName}</h3>
                    <Badge className={user.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}>
                      {user.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{user.role}</p>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700 truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{user.phone}</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <UsersIcon className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{user.department}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <span className="text-xs">📚</span>
                    </div>
                    <span className="text-sm text-gray-700">Courses: {user.courses}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      user.compliance >= 95 
                        ? 'bg-green-100 text-green-800' 
                        : user.compliance >= 85
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                    }`}>
                      {user.compliance}% compliant
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Last login: {new Date(user.lastLogin).toLocaleDateString()}
                    </p>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-gray-500">
                        <svg width="15" height="3" viewBox="0 0 15 3" fill="none">
                          <path d="M1.5 1.5H13.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit User</DropdownMenuItem>
                      <DropdownMenuItem>Reset Password</DropdownMenuItem>
                      {user.status === "active" 
                        ? <DropdownMenuItem className="text-amber-600">Deactivate</DropdownMenuItem>
                        : <DropdownMenuItem className="text-green-600">Activate</DropdownMenuItem>
                      }
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center p-8 bg-gray-50 rounded-lg border border-dashed">
            <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No users found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <Button onClick={() => {
              setSearchQuery("");
              setActiveDepartment("all");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Sort Controls */}
      <div className="flex justify-end gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <ArrowUpDown className="w-4 h-4" />
              Sort By
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleSort("name")}>Name</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("role")}>Role</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("compliance")}>Compliance</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSort("lastLogin")}>Last Login</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Users;
