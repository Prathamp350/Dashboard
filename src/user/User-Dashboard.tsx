
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  BookOpen, 
  Award, 
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react';

const UserDashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,935',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Active Courses',
      value: '154',
      change: '+8%',
      trend: 'up',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Certificates Issued',
      value: '1,847',
      change: '+23%',
      trend: 'up',
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Compliance Rate',
      value: '94.2%',
      change: '+2%',
      trend: 'up',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const recentActivity = [
    { user: 'John Smith', action: 'Completed Fire Safety Training', time: '2 hours ago', status: 'completed' },
    { user: 'Sarah Johnson', action: 'Started Equipment Safety Course', time: '4 hours ago', status: 'in-progress' },
    { user: 'Mike Wilson', action: 'Renewed First Aid Certification', time: '1 day ago', status: 'completed' },
    { user: 'Lisa Davis', action: 'Failed PPE Assessment', time: '2 days ago', status: 'failed' },
  ];

  const upcomingDeadlines = [
    { course: 'Annual Safety Refresher', dueDate: 'Dec 15, 2024', users: 45, priority: 'high' },
    { course: 'Chemical Handling Training', dueDate: 'Dec 20, 2024', users: 23, priority: 'medium' },
    { course: 'Emergency Response Drill', dueDate: 'Jan 5, 2025', users: 78, priority: 'low' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Safety Training Dashboard</h1>
        <Badge variant="outline" className="text-green-600 border-green-200">
          <CheckCircle size={16} className="mr-1" />
          All Systems Operational
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock size={20} className="text-orange-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'completed' ? 'bg-green-500' : 
                  activity.status === 'in-progress' ? 'bg-orange-500' : 'bg-red-500'
                }`} />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <Badge variant={
                  activity.status === 'completed' ? 'default' : 
                  activity.status === 'in-progress' ? 'secondary' : 'destructive'
                }>
                  {activity.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Deadlines */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle size={20} className="text-red-600" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{deadline.course}</h4>
                  <Badge variant={
                    deadline.priority === 'high' ? 'destructive' : 
                    deadline.priority === 'medium' ? 'secondary' : 'outline'
                  }>
                    {deadline.priority}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">Due: {deadline.dueDate}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{deadline.users} users pending</span>
                  <Progress value={deadline.priority === 'high' ? 85 : deadline.priority === 'medium' ? 60 : 30} className="w-20" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

    </div>
  );
};

export default UserDashboard;
