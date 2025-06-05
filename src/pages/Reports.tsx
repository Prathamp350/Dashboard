
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Calendar,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Filter,
  Plus
} from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: 'Monthly Safety Compliance Report',
      description: 'Comprehensive overview of compliance metrics and training completion rates',
      type: 'Compliance',
      generatedDate: '2024-12-01',
      status: 'completed',
      downloadUrl: '#',
      metrics: { users: 1847, completion: 94.2, incidents: 3 }
    },
    {
      id: 2,
      title: 'Course Effectiveness Analysis',
      description: 'Analysis of course performance, user engagement, and learning outcomes',
      type: 'Performance',
      generatedDate: '2024-11-28',
      status: 'completed',
      downloadUrl: '#',
      metrics: { courses: 78, avgRating: 4.7, completion: 89.5 }
    },
    {
      id: 3,
      title: 'Department Training Summary',
      description: 'Training progress and compliance status by department',
      type: 'Departmental',
      generatedDate: '2024-11-25',
      status: 'completed',
      downloadUrl: '#',
      metrics: { departments: 5, avgCompliance: 88.3, pending: 156 }
    },
    {
      id: 4,
      title: 'Incident Prevention Report',
      description: 'Analysis of safety incidents and preventive measures effectiveness',
      type: 'Safety',
      generatedDate: '2024-11-20',
      status: 'completed',
      downloadUrl: '#',
      metrics: { incidents: 8, prevention: 75, nearMisses: 23 }
    },
    {
      id: 5,
      title: 'Quarterly Training Forecast',
      description: 'Projected training needs and resource requirements for Q1 2025',
      type: 'Forecast',
      generatedDate: 'In Progress',
      status: 'generating',
      downloadUrl: null,
      metrics: null
    },
    {
      id: 6,
      title: 'Certification Expiry Report',
      description: 'Upcoming certification renewals and expiry notifications',
      type: 'Compliance',
      generatedDate: '2024-11-15',
      status: 'completed',
      downloadUrl: '#',
      metrics: { expiring: 45, renewed: 128, overdue: 8 }
    }
  ];

  const quickStats = [
    {
      title: 'Total Reports Generated',
      value: '247',
      change: '+12%',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Compliance Rate',
      value: '94.2%',
      change: '+2.1%',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Active Reports',
      value: '18',
      change: '+5%',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Critical Issues',
      value: '3',
      change: '-40%',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const reportTemplates = [
    { name: 'Safety Compliance Dashboard', description: 'Real-time compliance metrics', type: 'compliance' },
    { name: 'Training Progress Report', description: 'Individual and group progress tracking', type: 'progress' },
    { name: 'Incident Analysis Report', description: 'Detailed incident investigation and trends', type: 'incident' },
    { name: 'Cost-Benefit Analysis', description: 'Training ROI and cost effectiveness', type: 'financial' },
    { name: 'Regulatory Compliance Report', description: 'OSHA and regulatory requirement status', type: 'regulatory' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'generating':
        return <Badge className="bg-orange-100 text-orange-800">Generating</Badge>;
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Compliance': 'bg-green-100 text-green-800',
      'Performance': 'bg-blue-100 text-blue-800',
      'Departmental': 'bg-purple-100 text-purple-800',
      'Safety': 'bg-red-100 text-red-800',
      'Forecast': 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter size={20} className="mr-2" />
            Filter Reports
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus size={20} className="mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1 flex items-center">
                      <TrendingUp size={14} className="mr-1" />
                      {stat.change} from last month
                    </p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reports List */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {reports.map((report) => (
                <div key={report.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{report.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                      <div className="flex items-center gap-3">
                        <Badge className={getTypeColor(report.type)}>{report.type}</Badge>
                        {getStatusBadge(report.status)}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {report.downloadUrl && (
                        <Button size="sm" variant="outline">
                          <Download size={16} className="mr-1" />
                          Download
                        </Button>
                      )}
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {report.generatedDate}
                      </div>
                    </div>
                  </div>
                  
                  {report.metrics && (
                    <div className="grid grid-cols-3 gap-4 pt-3 border-t border-gray-100">
                      {Object.entries(report.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-lg font-semibold text-gray-900">{value}</p>
                          <p className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Report Templates */}
        <div>
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Report Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {reportTemplates.map((template, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <h4 className="font-medium text-gray-900 mb-1">{template.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Generate Report
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Scheduled Reports */}
          <Card className="border-0 shadow-sm mt-6">
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-blue-900">Weekly Safety Summary</h4>
                  <Badge className="bg-blue-100 text-blue-800">Weekly</Badge>
                </div>
                <p className="text-sm text-blue-700">Next: Monday 9:00 AM</p>
              </div>
              
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-green-900">Monthly Compliance</h4>
                  <Badge className="bg-green-100 text-green-800">Monthly</Badge>
                </div>
                <p className="text-sm text-green-700">Next: Jan 1, 2025</p>
              </div>
              
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-orange-900">Quarterly Review</h4>
                  <Badge className="bg-orange-100 text-orange-800">Quarterly</Badge>
                </div>
                <p className="text-sm text-orange-700">Next: Apr 1, 2025</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;
