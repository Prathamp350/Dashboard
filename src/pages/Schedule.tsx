
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  Plus, 
  MapPin,
  Users,
  BookOpen,
  Edit,
  Trash2,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');

  const scheduledSessions = [
    {
      id: 1,
      title: 'Fire Safety Training',
      course: 'Emergency Response',
      instructor: 'John Smith',
      date: '2024-12-10',
      time: '09:00 - 11:00',
      location: 'Training Room A',
      maxCapacity: 25,
      enrolled: 18,
      status: 'confirmed',
      type: 'in-person'
    },
    {
      id: 2,
      title: 'PPE Safety Workshop',
      course: 'Equipment Safety',
      instructor: 'Sarah Johnson',
      date: '2024-12-10',
      time: '14:00 - 16:00',
      location: 'Workshop Floor',
      maxCapacity: 15,
      enrolled: 12,
      status: 'confirmed',
      type: 'hands-on'
    },
    {
      id: 3,
      title: 'Chemical Handling Certification',
      course: 'Chemical Safety',
      instructor: 'Mike Wilson',
      date: '2024-12-11',
      time: '10:00 - 15:00',
      location: 'Virtual Meeting',
      maxCapacity: 30,
      enrolled: 24,
      status: 'confirmed',
      type: 'virtual'
    },
    {
      id: 4,
      title: 'First Aid & CPR Training',
      course: 'Medical Response',
      instructor: 'Lisa Davis',
      date: '2024-12-12',
      time: '09:00 - 13:00',
      location: 'Training Room B',
      maxCapacity: 20,
      enrolled: 20,
      status: 'full',
      type: 'certification'
    },
    {
      id: 5,
      title: 'Ergonomics Assessment',
      course: 'Health & Wellness',
      instructor: 'David Brown',
      date: '2024-12-13',
      time: '11:00 - 12:00',
      location: 'Office Area',
      maxCapacity: 12,
      enrolled: 8,
      status: 'confirmed',
      type: 'assessment'
    },
    {
      id: 6,
      title: 'Safety Leadership Seminar',
      course: 'Management Training',
      instructor: 'Emma Taylor',
      date: '2024-12-13',
      time: '15:00 - 17:00',
      location: 'Conference Room',
      maxCapacity: 10,
      enrolled: 7,
      status: 'confirmed',
      type: 'seminar'
    }
  ];

  const upcomingEvents = [
    {
      date: '2024-12-15',
      title: 'Monthly Safety Meeting',
      type: 'meeting',
      time: '14:00'
    },
    {
      date: '2024-12-18',
      title: 'Quarterly Safety Audit',
      type: 'audit',
      time: '09:00'
    },
    {
      date: '2024-12-20',
      title: 'Emergency Drill Practice',
      type: 'drill',
      time: '10:30'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800">Confirmed</Badge>;
      case 'full':
        return <Badge className="bg-red-100 text-red-800">Full</Badge>;
      case 'cancelled':
        return <Badge className="bg-gray-100 text-gray-800">Cancelled</Badge>;
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-800">Pending</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'in-person': 'bg-blue-100 text-blue-800',
      'virtual': 'bg-purple-100 text-purple-800',
      'hands-on': 'bg-orange-100 text-orange-800',
      'certification': 'bg-green-100 text-green-800',
      'assessment': 'bg-yellow-100 text-yellow-800',
      'seminar': 'bg-indigo-100 text-indigo-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCapacityColor = (enrolled: number, maxCapacity: number) => {
    const percentage = (enrolled / maxCapacity) * 100;
    if (percentage >= 100) return 'text-red-600';
    if (percentage >= 80) return 'text-orange-600';
    return 'text-green-600';
  };

  // Group sessions by date
  const sessionsByDate = scheduledSessions.reduce((acc, session) => {
    if (!acc[session.date]) {
      acc[session.date] = [];
    }
    acc[session.date].push(session);
    return acc;
  }, {} as Record<string, typeof scheduledSessions>);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Training Schedule</h1>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter size={20} className="mr-2" />
            Filter
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700">
            <Plus size={20} className="mr-2" />
            Schedule Session
          </Button>
        </div>
      </div>

      {/* Calendar Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <ChevronLeft size={16} className="mr-1" />
            Previous
          </Button>
          <h2 className="text-xl font-semibold text-gray-900">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h2>
          <Button variant="outline" size="sm">
            Next
            <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant={viewMode === 'week' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setViewMode('week')}
          >
            Week
          </Button>
          <Button 
            variant={viewMode === 'month' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setViewMode('month')}
          >
            Month
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Schedule View */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Scheduled Training Sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(sessionsByDate).sort().map(([date, sessions]) => (
                <div key={date} className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    {formatDate(date)}
                  </h3>
                  
                  <div className="space-y-3">
                    {sessions.map((session) => (
                      <div key={session.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">{session.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">{session.course}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock size={16} />
                                <span>{session.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin size={16} />
                                <span>{session.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users size={16} />
                                <span className={getCapacityColor(session.enrolled, session.maxCapacity)}>
                                  {session.enrolled}/{session.maxCapacity}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit size={16} />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge className={getTypeColor(session.type)}>{session.type}</Badge>
                            {getStatusBadge(session.status)}
                          </div>
                          <p className="text-sm text-gray-500">Instructor: {session.instructor}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>This Week</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Sessions</span>
                <span className="font-semibold text-gray-900">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Participants</span>
                <span className="font-semibold text-gray-900">145</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Capacity Utilization</span>
                <span className="font-semibold text-green-600">87%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Instructors</span>
                <span className="font-semibold text-gray-900">8</span>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{event.date}</span>
                    <Clock size={14} />
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Resource Availability */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Resource Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <span className="font-medium text-green-900">Training Room A</span>
                <Badge className="bg-green-100 text-green-800">Available</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                <span className="font-medium text-red-900">Training Room B</span>
                <Badge className="bg-red-100 text-red-800">Occupied</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <span className="font-medium text-green-900">Workshop Floor</span>
                <Badge className="bg-green-100 text-green-800">Available</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                <span className="font-medium text-orange-900">Conference Room</span>
                <Badge className="bg-orange-100 text-orange-800">Maintenance</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
