
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Search, 
  Filter,
  BookOpen,
  Users,
  Clock,
  Star,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Fire Safety Training',
      description: 'Comprehensive fire safety procedures and emergency response',
      category: 'Emergency Response',
      duration: '2 hours',
      enrolledUsers: 145,
      rating: 4.8,
      status: 'active',
      lastUpdated: '2024-12-01'
    },
    {
      id: 2,
      title: 'Personal Protective Equipment (PPE)',
      description: 'Proper use and maintenance of safety equipment',
      category: 'Equipment Safety',
      duration: '1.5 hours',
      enrolledUsers: 203,
      rating: 4.9,
      status: 'active',
      lastUpdated: '2024-11-28'
    },
    {
      id: 3,
      title: 'Chemical Handling & HAZMAT',
      description: 'Safe handling of hazardous materials and chemicals',
      category: 'Chemical Safety',
      duration: '3 hours',
      enrolledUsers: 87,
      rating: 4.7,
      status: 'active',
      lastUpdated: '2024-11-25'
    },
    {
      id: 4,
      title: 'First Aid & CPR Certification',
      description: 'Emergency medical response and life-saving techniques',
      category: 'Medical Response',
      duration: '4 hours',
      enrolledUsers: 156,
      rating: 4.9,
      status: 'active',
      lastUpdated: '2024-11-20'
    },
    {
      id: 5,
      title: 'Workplace Ergonomics',
      description: 'Preventing workplace injuries through proper ergonomics',
      category: 'Health & Wellness',
      duration: '1 hour',
      enrolledUsers: 98,
      rating: 4.6,
      status: 'draft',
      lastUpdated: '2024-11-15'
    },
    {
      id: 6,
      title: 'Electrical Safety',
      description: 'Safe practices when working with electrical systems',
      category: 'Equipment Safety',
      duration: '2.5 hours',
      enrolledUsers: 67,
      rating: 4.8,
      status: 'active',
      lastUpdated: '2024-11-10'
    }
  ];

  const categories = ['All', 'Emergency Response', 'Equipment Safety', 'Chemical Safety', 'Medical Response', 'Health & Wellness'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Training Courses</h1>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus size={20} className="mr-2" />
          Create Course
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                  <Badge variant={course.status === 'active' ? 'default' : 'secondary'} className="mb-2">
                    {course.status}
                  </Badge>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye size={16} className="mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit size={16} className="mr-2" />
                      Edit Course
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 size={16} className="mr-2" />
                      Delete Course
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm">{course.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BookOpen size={16} />
                  <span>{course.category}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users size={16} />
                  <span>{course.enrolledUsers} enrolled</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Star size={16} className="text-yellow-500" />
                  <span>{course.rating}/5.0</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500">Last updated: {course.lastUpdated}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Courses;
