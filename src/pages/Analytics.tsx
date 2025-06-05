
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { TrendingUp, TrendingDown, Users, BookOpen, Award, AlertTriangle } from 'lucide-react';

const Analytics = () => {
  const weeklyData = [
    { day: 'Mon', completions: 45, enrollments: 12, certificates: 8 },
    { day: 'Tue', completions: 52, enrollments: 18, certificates: 11 },
    { day: 'Wed', completions: 38, enrollments: 15, certificates: 7 },
    { day: 'Thu', completions: 61, enrollments: 22, certificates: 14 },
    { day: 'Fri', completions: 49, enrollments: 19, certificates: 10 },
    { day: 'Sat', completions: 28, enrollments: 8, certificates: 5 },
    { day: 'Sun', completions: 31, enrollments: 10, certificates: 6 }
  ];

  const monthlyTrend = [
    { month: 'Jul', users: 1200, courses: 45, completion: 85 },
    { month: 'Aug', users: 1350, courses: 52, completion: 87 },
    { month: 'Sep', users: 1480, courses: 58, completion: 89 },
    { month: 'Oct', users: 1620, courses: 64, completion: 91 },
    { month: 'Nov', users: 1780, courses: 71, completion: 93 },
    { month: 'Dec', users: 1950, courses: 78, completion: 94 }
  ];

  const departmentData = [
    { name: 'Manufacturing', value: 35, color: '#FF8C42' },
    { name: 'Warehouse', value: 25, color: '#22C55E' },
    { name: 'Maintenance', value: 20, color: '#3B82F6' },
    { name: 'Quality Control', value: 12, color: '#8B5CF6' },
    { name: 'Administration', value: 8, color: '#F59E0B' }
  ];

  const complianceData = [
    { category: 'Fire Safety', current: 95, target: 100 },
    { category: 'PPE Training', current: 88, target: 95 },
    { category: 'Chemical Safety', current: 92, target: 98 },
    { category: 'First Aid', current: 85, target: 90 },
    { category: 'Ergonomics', current: 78, target: 85 }
  ];

  const riskData = [
    { month: 'Jul', incidents: 5, near_misses: 12 },
    { month: 'Aug', incidents: 3, near_misses: 8 },
    { month: 'Sep', incidents: 2, near_misses: 6 },
    { month: 'Oct', incidents: 1, near_misses: 4 },
    { month: 'Nov', incidents: 2, near_misses: 5 },
    { month: 'Dec', incidents: 1, near_misses: 3 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
        <Badge variant="outline" className="text-green-600 border-green-200">
          Data updated 5 minutes ago
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Course Completion Rate</p>
                <p className="text-2xl font-bold text-gray-900">94.2%</p>
                <div className="flex items-center mt-1">
                  <TrendingUp size={14} className="text-green-600 mr-1" />
                  <span className="text-sm text-green-600">+5.2% from last month</span>
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <BookOpen size={24} className="text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Learners</p>
                <p className="text-2xl font-bold text-gray-900">1,847</p>
                <div className="flex items-center mt-1">
                  <TrendingUp size={14} className="text-blue-600 mr-1" />
                  <span className="text-sm text-blue-600">+12% from last month</span>
                </div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Users size={24} className="text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Certificates Issued</p>
                <p className="text-2xl font-bold text-gray-900">623</p>
                <div className="flex items-center mt-1">
                  <TrendingUp size={14} className="text-orange-600 mr-1" />
                  <span className="text-sm text-orange-600">+18% from last month</span>
                </div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Award size={24} className="text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Safety Incidents</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <div className="flex items-center mt-1">
                  <TrendingDown size={14} className="text-green-600 mr-1" />
                  <span className="text-sm text-green-600">-40% from last month</span>
                </div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <AlertTriangle size={24} className="text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="completions" fill="#FF8C42" name="Completions" />
                <Bar dataKey="enrollments" fill="#22C55E" name="Enrollments" />
                <Bar dataKey="certificates" fill="#3B82F6" name="Certificates" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Growth Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="users" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="completion" stackId="2" stroke="#22C55E" fill="#22C55E" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Safety Incidents Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={riskData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="incidents" stroke="#EF4444" strokeWidth={3} name="Incidents" />
                <Line type="monotone" dataKey="near_misses" stroke="#F59E0B" strokeWidth={3} name="Near Misses" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Dashboard */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Compliance Status by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{item.category}</span>
                    <span className="text-sm text-gray-600">{item.current}% / {item.target}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${item.current >= item.target ? 'bg-green-500' : item.current >= item.target * 0.8 ? 'bg-orange-500' : 'bg-red-500'}`}
                      style={{ width: `${(item.current / item.target) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <Badge variant={item.current >= item.target ? 'default' : item.current >= item.target * 0.8 ? 'secondary' : 'destructive'}>
                    {item.current >= item.target ? 'On Target' : item.current >= item.target * 0.8 ? 'At Risk' : 'Below Target'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
