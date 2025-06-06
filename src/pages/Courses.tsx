
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, BookOpen, Clock, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock course data
const coursesData = [
  {
    id: "c1",
    title: "Fire Safety Training",
    category: "Emergency Response",
    description: "Comprehensive fire safety procedures and emergency response",
    duration: "2 hours",
    enrolled: 145,
    rating: 4.8,
    status: "active",
    lastUpdated: "2024-12-01"
  },
  {
    id: "c2",
    title: "Personal Protective Equipment (PPE)",
    category: "Equipment Safety",
    description: "Proper use and maintenance of safety equipment",
    duration: "1.5 hours",
    enrolled: 203,
    rating: 4.9,
    status: "active",
    lastUpdated: "2024-11-28"
  },
  {
    id: "c3",
    title: "Chemical Handling & HAZMAT",
    category: "Chemical Safety",
    description: "Safe handling of hazardous materials and chemicals",
    duration: "3 hours",
    enrolled: 87,
    rating: 4.7,
    status: "active",
    lastUpdated: "2024-11-25"
  },
  {
    id: "c4",
    title: "First Aid & CPR Certification",
    category: "Medical Response",
    description: "Emergency medical response and life-saving techniques",
    duration: "4 hours",
    enrolled: 112,
    rating: 4.9,
    status: "active",
    lastUpdated: "2024-11-20"
  },
  {
    id: "c5",
    title: "Workplace Ergonomics",
    category: "Health & Wellness",
    description: "Preventing workplace injuries through proper ergonomics",
    duration: "1 hour",
    enrolled: 55,
    rating: 4.2,
    status: "draft",
    lastUpdated: "2024-11-15"
  },
  {
    id: "c6",
    title: "Electrical Safety",
    category: "Equipment Safety",
    description: "Safe practices when working with electrical systems",
    duration: "2.5 hours",
    enrolled: 76,
    rating: 4.6,
    status: "active",
    lastUpdated: "2024-11-10"
  }
];

// Categories for filter buttons
const categories = [
  { key: "all", label: "All" },
  { key: "emergency-response", label: "Emergency Response" },
  { key: "equipment-safety", label: "Equipment Safety" },
  { key: "chemical-safety", label: "Chemical Safety" },
  { key: "medical-response", label: "Medical Response" },
  { key: "health-wellness", label: "Health & Wellness" }
];

const Courses = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || 
                            course.category.toLowerCase().replace(/\s+/g, '-').includes(activeCategory);
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Training Courses</h1>
        <Button 
          onClick={() => navigate('/courses/create')}
          className="bg-orange-500 hover:bg-orange-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Course
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category.key}
              variant={activeCategory === category.key ? "default" : "outline"}
              className={activeCategory === category.key ? "bg-orange-500 hover:bg-orange-600" : ""}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <div className="h-2 bg-orange-500"></div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <Badge className={
                  course.status === "active" 
                    ? "bg-green-500" 
                    : "bg-gray-400"
                }>
                  {course.status === "active" ? "active" : "draft"}
                </Badge>
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <svg width="15" height="3" viewBox="0 0 15 3" fill="none">
                    <path d="M1.5 1.5H13.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </Button>
              </div>

              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>

              <div className="flex gap-2 items-center mb-2">
                <BookOpen className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-700">{course.category}</span>
              </div>

              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{course.enrolled} enrolled</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{course.rating}/5.0</span>
                </div>
                <span className="text-xs text-gray-500">Last updated: {new Date(course.lastUpdated).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center p-8 bg-gray-50 rounded-lg border border-dashed">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No courses found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <Button onClick={() => {
            setSearchQuery("");
            setActiveCategory("all");
          }}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Courses;
