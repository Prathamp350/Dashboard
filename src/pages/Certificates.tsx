
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Award, 
  Search, 
  Filter,
  Download,
  Calendar,
  User,
  CheckCircle,
  AlertTriangle,
  Clock,
  FileText,
  Mail,
  Plus
} from 'lucide-react';

const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const certificates = [
    {
      id: 'CERT-001',
      recipientName: 'John Smith',
      recipientEmail: 'john.smith@company.com',
      courseName: 'Fire Safety Training',
      issueDate: '2024-11-15',
      expiryDate: '2025-11-15',
      status: 'active',
      instructor: 'Sarah Johnson',
      department: 'Manufacturing',
      grade: 95,
      certificateUrl: '#'
    },
    {
      id: 'CERT-002',
      recipientName: 'Maria Garcia',
      recipientEmail: 'maria.garcia@company.com',
      courseName: 'First Aid & CPR Certification',
      issueDate: '2024-10-20',
      expiryDate: '2026-10-20',
      status: 'active',
      instructor: 'Dr. Mike Wilson',
      department: 'Warehouse',
      grade: 88,
      certificateUrl: '#'
    },
    {
      id: 'CERT-003',
      recipientName: 'David Chen',
      recipientEmail: 'david.chen@company.com',
      courseName: 'Chemical Handling Safety',
      issueDate: '2024-09-10',
      expiryDate: '2025-09-10',
      status: 'expiring-soon',
      instructor: 'Lisa Davis',
      department: 'Quality Control',
      grade: 92,
      certificateUrl: '#'
    },
    {
      id: 'CERT-004',
      recipientName: 'Sarah Thompson',
      recipientEmail: 'sarah.thompson@company.com',
      courseName: 'PPE Safety Training',
      issueDate: '2024-08-05',
      expiryDate: '2024-08-05',
      status: 'expired',
      instructor: 'John Smith',
      department: 'Production',
      grade: 90,
      certificateUrl: '#'
    },
    {
      id: 'CERT-005',
      recipientName: 'Robert Johnson',
      recipientEmail: 'robert.johnson@company.com',
      courseName: 'Electrical Safety Certification',
      issueDate: '2024-12-01',
      expiryDate: '2025-12-01',
      status: 'active',
      instructor: 'Emma Taylor',
      department: 'Maintenance',
      grade: 97,
      certificateUrl: '#'
    },
    {
      id: 'CERT-006',
      recipientName: 'Jennifer Lee',
      recipientEmail: 'jennifer.lee@company.com',
      courseName: 'Workplace Ergonomics',
      issueDate: '2024-11-28',
      expiryDate: '2025-11-28',
      status: 'active',
      instructor: 'David Brown',
      department: 'Administration',
      grade: 85,
      certificateUrl: '#'
    }
  ];

  const stats = [
    {
      title: 'Total Certificates',
      value: '1,247',
      change: '+23%',
      icon: Award,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Certificates',
      value: '1,089',
      change: '+18%',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Expiring Soon',
      value: '47',
      change: '+12%',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Expired',
      value: '111',
      change: '-8%',
      icon: Clock,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'expiring-soon':
        return <Badge className="bg-orange-100 text-orange-800">Expiring Soon</Badge>;
      case 'expired':
        return <Badge className="bg-red-100 text-red-800">Expired</Badge>;
      case 'revoked':
        return <Badge className="bg-gray-100 text-gray-800">Revoked</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return 'text-green-600';
    if (grade >= 80) return 'text-orange-600';
    return 'text-red-600';
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.recipientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || cert.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusOptions = [
    { value: 'all', label: 'All Statuses' },
    { value: 'active', label: 'Active' },
    { value: 'expiring-soon', label: 'Expiring Soon' },
    { value: 'expired', label: 'Expired' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Certificate Management</h1>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download size={20} className="mr-2" />
            Export All
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus size={20} className="mr-2" />
            Issue Certificate
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon size={24} className={stat.color} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search certificates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {statusOptions.map((option) => (
            <Button
              key={option.value}
              variant={statusFilter === option.value ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter(option.value)}
              className={statusFilter === option.value ? "bg-orange-600 hover:bg-orange-700" : ""}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map((cert) => (
          <Card key={cert.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-orange-100 text-orange-600">
                      {getInitials(cert.recipientName)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">{cert.recipientName}</h3>
                    <p className="text-sm text-gray-600">{cert.department}</p>
                  </div>
                </div>
                {getStatusBadge(cert.status)}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">{cert.courseName}</h4>
                <p className="text-sm text-gray-600">Certificate ID: {cert.id}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Grade:</span>
                  <span className={`font-medium ${getGradeColor(cert.grade)}`}>{cert.grade}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Instructor:</span>
                  <span className="text-gray-900">{cert.instructor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Issue Date:</span>
                  <span className="text-gray-900">{cert.issueDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Expiry Date:</span>
                  <span className={`font-medium ${
                    cert.status === 'expired' ? 'text-red-600' : 
                    cert.status === 'expiring-soon' ? 'text-orange-600' : 'text-gray-900'
                  }`}>
                    {cert.expiryDate}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Download size={16} className="mr-1" />
                  Download
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Mail size={16} className="mr-1" />
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCertificates.length === 0 && (
        <div className="text-center py-12">
          <Award size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No certificates found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Bulk Actions */}
      {filteredCertificates.length > 0 && (
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Bulk Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline">
                <Mail size={16} className="mr-2" />
                Send Renewal Reminders
              </Button>
              <Button variant="outline">
                <Download size={16} className="mr-2" />
                Bulk Download
              </Button>
              <Button variant="outline">
                <FileText size={16} className="mr-2" />
                Generate Report
              </Button>
              <Button variant="outline">
                <Calendar size={16} className="mr-2" />
                Schedule Renewals
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Certificates;
