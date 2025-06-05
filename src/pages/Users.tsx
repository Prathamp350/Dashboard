
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Plus, 
  Search, 
  Filter,
  Users as UsersIcon,
  Mail,
  Phone,
  Calendar,
  MoreHorizontal,
  Edit,
  Trash2,
  UserCheck,
  UserX
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@company.com',
      phone: '+1 (555) 123-4567',
      department: 'Manufacturing',
      role: 'Safety Officer',
      status: 'active',
      lastLogin: '2024-12-05',
      coursesCompleted: 12,
      complianceScore: 95
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@company.com',
      phone: '+1 (555) 234-5678',
      department: 'Warehouse',
      role: 'Team Leader',
      status: 'active',
      lastLogin: '2024-12-04',
      coursesCompleted: 8,
      complianceScore: 88
    },
    {
      id: 3,
      name: 'Mike Wilson',
      email: 'mike.wilson@company.com',
      phone: '+1 (555) 345-6789',
      department: 'Maintenance',
      role: 'Technician',
      status: 'active',
      lastLogin: '2024-12-03',
      coursesCompleted: 15,
      complianceScore: 98
    },
    {
      id: 4,
      name: 'Lisa Davis',
      email: 'lisa.davis@company.com',
      phone: '+1 (555) 456-7890',
      department: 'Quality Control',
      role: 'Inspector',
      status: 'inactive',
      lastLogin: '2024-11-28',
      coursesCompleted: 6,
      complianceScore: 72
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david.brown@company.com',
      phone: '+1 (555) 567-8901',
      department: 'Production',
      role: 'Operator',
      status: 'active',
      lastLogin: '2024-12-05',
      coursesCompleted: 10,
      complianceScore: 91
    },
    {
      id: 6,
      name: 'Emma Taylor',
      email: 'emma.taylor@company.com',
      phone: '+1 (555) 678-9012',
      department: 'Administration',
      role: 'HR Manager',
      status: 'active',
      lastLogin: '2024-12-05',
      coursesCompleted: 14,
      complianceScore: 96
    }
  ];

  const departments = ['All', 'Manufacturing', 'Warehouse', 'Maintenance', 'Quality Control', 'Production', 'Administration'];
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || user.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getComplianceColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 75) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus size={20} className="mr-2" />
          Add User
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <UsersIcon size={24} className="text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{users.length}</p>
                <p className="text-sm text-gray-600">Total Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <UserCheck size={24} className="text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.status === 'active').length}</p>
                <p className="text-sm text-gray-600">Active Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <UserX size={24} className="text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{users.filter(u => u.status === 'inactive').length}</p>
                <p className="text-sm text-gray-600">Inactive Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <Calendar size={24} className="text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">92%</p>
                <p className="text-sm text-gray-600">Avg Compliance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {departments.map((department) => (
            <Button
              key={department}
              variant={selectedDepartment === department ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedDepartment(department)}
              className={selectedDepartment === department ? "bg-orange-600 hover:bg-orange-700" : ""}
            >
              {department}
            </Button>
          ))}
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-orange-100 text-orange-600">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.role}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit size={16} className="mr-2" />
                      Edit User
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {user.status === 'active' ? <UserX size={16} className="mr-2" /> : <UserCheck size={16} className="mr-2" />}
                      {user.status === 'active' ? 'Deactivate' : 'Activate'}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 size={16} className="mr-2" />
                      Delete User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                  {user.status}
                </Badge>
                <Badge className={getComplianceColor(user.complianceScore)}>
                  {user.complianceScore}% compliant
                </Badge>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={16} />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={16} />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <UsersIcon size={16} />
                  <span>{user.department}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Courses: {user.coursesCompleted}</span>
                  <span className="text-gray-500">Last login: {user.lastLogin}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <UsersIcon size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Users;
