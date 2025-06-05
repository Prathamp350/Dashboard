
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  FileText,
  Users,
  Calendar,
  Target,
  TrendingUp,
  Bell,
  Download
} from 'lucide-react';

const Compliance = () => {
  const complianceOverview = {
    overallScore: 94.2,
    totalRequirements: 45,
    compliant: 42,
    pending: 2,
    overdue: 1,
    lastAudit: '2024-11-15'
  };

  const complianceCategories = [
    {
      category: 'Fire Safety',
      score: 98,
      target: 100,
      status: 'compliant',
      lastUpdated: '2024-12-01',
      requirements: 8,
      completed: 8,
      nextDeadline: '2025-03-15'
    },
    {
      category: 'Personal Protective Equipment',
      score: 92,
      target: 95,
      status: 'at-risk',
      lastUpdated: '2024-11-28',
      requirements: 6,
      completed: 5,
      nextDeadline: '2024-12-20'
    },
    {
      category: 'Chemical Safety',
      score: 95,
      target: 98,
      status: 'compliant',
      lastUpdated: '2024-11-25',
      requirements: 12,
      completed: 11,
      nextDeadline: '2025-01-10'
    },
    {
      category: 'Emergency Procedures',
      score: 88,
      target: 95,
      status: 'needs-attention',
      lastUpdated: '2024-11-20',
      requirements: 10,
      completed: 8,
      nextDeadline: '2024-12-15'
    },
    {
      category: 'Equipment Safety',
      score: 96,
      target: 98,
      status: 'compliant',
      lastUpdated: '2024-11-18',
      requirements: 9,
      completed: 9,
      nextDeadline: '2025-02-01'
    }
  ];

  const upcomingDeadlines = [
    {
      requirement: 'Annual PPE Training Renewal',
      department: 'Manufacturing',
      dueDate: '2024-12-15',
      daysLeft: 10,
      affectedUsers: 45,
      priority: 'high'
    },
    {
      requirement: 'Chemical Handling Certification',
      department: 'Warehouse',
      dueDate: '2024-12-20',
      daysLeft: 15,
      affectedUsers: 23,
      priority: 'medium'
    },
    {
      requirement: 'First Aid Refresher Training',
      department: 'All Departments',
      dueDate: '2025-01-05',
      daysLeft: 31,
      affectedUsers: 78,
      priority: 'low'
    },
    {
      requirement: 'Emergency Response Drill',
      department: 'Production',
      dueDate: '2025-01-10',
      daysLeft: 36,
      affectedUsers: 67,
      priority: 'medium'
    }
  ];

  const auditHistory = [
    {
      date: '2024-11-15',
      auditor: 'External Safety Consultant',
      type: 'Annual Compliance Audit',
      score: 94.2,
      findings: 3,
      status: 'passed'
    },
    {
      date: '2024-08-20',
      auditor: 'Internal Safety Team',
      type: 'Quarterly Review',
      score: 91.5,
      findings: 5,
      status: 'passed'
    },
    {
      date: '2024-05-10',
      auditor: 'OSHA Inspector',
      type: 'Regulatory Inspection',
      score: 89.8,
      findings: 7,
      status: 'passed'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'compliant':
        return <Badge className="bg-green-100 text-green-800">Compliant</Badge>;
      case 'at-risk':
        return <Badge className="bg-orange-100 text-orange-800">At Risk</Badge>;
      case 'needs-attention':
        return <Badge className="bg-red-100 text-red-800">Needs Attention</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-red-200 bg-red-50';
      case 'medium':
        return 'border-orange-200 bg-orange-50';
      case 'low':
        return 'border-green-200 bg-green-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Compliance Dashboard</h1>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download size={20} className="mr-2" />
            Export Report
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Bell size={20} className="mr-2" />
            Set Alert
          </Button>
        </div>
      </div>

      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overall Compliance</p>
                <p className="text-3xl font-bold text-green-600">{complianceOverview.overallScore}%</p>
                <p className="text-sm text-gray-500 mt-1">Target: 95%</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Shield size={24} className="text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Compliant Areas</p>
                <p className="text-3xl font-bold text-gray-900">{complianceOverview.compliant}</p>
                <p className="text-sm text-gray-500 mt-1">of {complianceOverview.totalRequirements} total</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <CheckCircle size={24} className="text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Items</p>
                <p className="text-3xl font-bold text-orange-600">{complianceOverview.pending}</p>
                <p className="text-sm text-gray-500 mt-1">Need attention</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Clock size={24} className="text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overdue Items</p>
                <p className="text-3xl font-bold text-red-600">{complianceOverview.overdue}</p>
                <p className="text-sm text-gray-500 mt-1">Immediate action</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <AlertTriangle size={24} className="text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Compliance Categories */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Compliance by Category</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {complianceCategories.map((category, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{category.category}</h4>
                  {getStatusBadge(category.status)}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{category.score}% / {category.target}%</span>
                  </div>
                  <Progress value={(category.score / category.target) * 100} className="h-2" />
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Completed</p>
                    <p className="font-medium">{category.completed}/{category.requirements}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Last Updated</p>
                    <p className="font-medium">{category.lastUpdated}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Next Deadline</p>
                    <p className="font-medium">{category.nextDeadline}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar size={20} className="text-orange-600" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className={`p-4 rounded-lg border ${getPriorityColor(deadline.priority)}`}>
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{deadline.requirement}</h4>
                  <Badge variant={
                    deadline.priority === 'high' ? 'destructive' : 
                    deadline.priority === 'medium' ? 'secondary' : 'outline'
                  }>
                    {deadline.priority}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Department:</span>
                    <span className="font-medium">{deadline.department}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Due Date:</span>
                    <span className="font-medium">{deadline.dueDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Days Left:</span>
                    <span className={`font-medium ${deadline.daysLeft <= 7 ? 'text-red-600' : deadline.daysLeft <= 14 ? 'text-orange-600' : 'text-green-600'}`}>
                      {deadline.daysLeft} days
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Affected Users:</span>
                    <span className="font-medium">{deadline.affectedUsers} users</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Audit History */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText size={20} className="text-blue-600" />
            Audit History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {auditHistory.map((audit, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{audit.type}</h4>
                  <p className="text-sm text-gray-600">Conducted by: {audit.auditor}</p>
                  <p className="text-sm text-gray-500">Date: {audit.date}</p>
                </div>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{audit.score}%</p>
                    <p className="text-gray-500">Score</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{audit.findings}</p>
                    <p className="text-gray-500">Findings</p>
                  </div>
                  <div className="text-center">
                    <Badge className={audit.status === 'passed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                      {audit.status}
                    </Badge>
                  </div>
                </div>
                
                <Button variant="outline" size="sm">
                  <FileText size={16} className="mr-1" />
                  View Report
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Compliance;
