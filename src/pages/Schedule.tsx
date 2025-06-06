import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, Users, Clock, Plus, CheckCircle2, AlertCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

// Mock schedule data
const sessionsData = [
  {
    id: "s1",
    title: "Fire Safety Training",
    date: "2024-12-15",
    timeStart: "09:00",
    timeEnd: "11:00",
    location: "Training Room A",
    instructor: "John Smith",
    capacity: 25,
    enrolled: 18,
    courseId: "c1",
    status: "upcoming"
  },
  {
    id: "s2",
    title: "Chemical Handling Workshop",
    date: "2024-12-16",
    timeStart: "13:30",
    timeEnd: "15:30",
    location: "Laboratory B",
    instructor: "Emma Taylor",
    capacity: 15,
    enrolled: 12,
    courseId: "c3",
    status: "upcoming"
  },
  {
    id: "s3",
    title: "PPE Fitting and Maintenance",
    date: "2024-12-08",
    timeStart: "10:00",
    timeEnd: "12:00",
    location: "Storage Facility",
    instructor: "Sarah Johnson",
    capacity: 20,
    enrolled: 20,
    courseId: "c2",
    status: "completed"
  },
  {
    id: "s4",
    title: "Emergency Response Drill",
    date: "2024-12-20",
    timeStart: "14:00",
    timeEnd: "16:00",
    location: "Assembly Area",
    instructor: "Mike Wilson",
    capacity: 50,
    enrolled: 32,
    courseId: "c5",
    status: "upcoming"
  }
];

// Mock locations
const locations = [
  "Training Room A",
  "Training Room B",
  "Laboratory B",
  "Assembly Area",
  "Conference Room",
  "Storage Facility",
  "Virtual Meeting"
];

// Mock instructors
const instructors = [
  "John Smith",
  "Sarah Johnson",
  "Mike Wilson",
  "Emma Taylor",
  "David Brown"
];

const Schedule = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [showDialog, setShowDialog] = useState(false);
  const [formattedSelectedDate, setFormattedSelectedDate] = useState(format(new Date(), "PPP"));
  const [sessionForm, setSessionForm] = useState({
    title: "",
    date: new Date(),
    timeStart: "",
    timeEnd: "",
    location: "",
    instructor: "",
    capacity: "",
    courseId: ""
  });
  
  // Filter sessions for selected date
  const filteredSessions = sessionsData.filter(session => {
    if (!selectedDate) return true;
    
    const sessionDate = new Date(session.date);
    return sessionDate.toDateString() === selectedDate.toDateString();
  });
  
  // Handle form submission
  const handleSessionSubmit = () => {
    if (!sessionForm.title || !sessionForm.timeStart || !sessionForm.timeEnd || 
        !sessionForm.location || !sessionForm.instructor || !sessionForm.capacity) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Time validation
    if (sessionForm.timeStart >= sessionForm.timeEnd) {
      toast({
        title: "Time Error",
        description: "End time must be after start time.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Session Scheduled",
      description: `${sessionForm.title} has been scheduled successfully.`,
    });
    
    setShowDialog(false);
    
    // Reset form
    setSessionForm({
      title: "",
      date: new Date(),
      timeStart: "",
      timeEnd: "",
      location: "",
      instructor: "",
      capacity: "",
      courseId: ""
    });
  };
  
  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setFormattedSelectedDate(format(date, "PPP"));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
        
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogTrigger asChild>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Plus className="w-4 h-4 mr-2" />
              Schedule Session
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Schedule Training Session</DialogTitle>
              <DialogDescription>
                Create a new training session for employees to attend.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="sessionTitle">Session Title *</Label>
                  <Input
                    id="sessionTitle"
                    value={sessionForm.title}
                    onChange={(e) => setSessionForm({...sessionForm, title: e.target.value})}
                    placeholder="Enter session title"
                    className="mt-1"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full mt-1 justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {format(sessionForm.date, "PPP")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={sessionForm.date}
                          onSelect={(date) => setSessionForm({...sessionForm, date: date || new Date()})}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="timeStart">Start Time *</Label>
                      <Input
                        id="timeStart"
                        type="time"
                        value={sessionForm.timeStart}
                        onChange={(e) => setSessionForm({...sessionForm, timeStart: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="timeEnd">End Time *</Label>
                      <Input
                        id="timeEnd"
                        type="time"
                        value={sessionForm.timeEnd}
                        onChange={(e) => setSessionForm({...sessionForm, timeEnd: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Select
                      value={sessionForm.location}
                      onValueChange={(value) => setSessionForm({...sessionForm, location: value})}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map(location => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="instructor">Instructor *</Label>
                    <Select
                      value={sessionForm.instructor}
                      onValueChange={(value) => setSessionForm({...sessionForm, instructor: value})}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select instructor" />
                      </SelectTrigger>
                      <SelectContent>
                        {instructors.map(instructor => (
                          <SelectItem key={instructor} value={instructor}>
                            {instructor}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="capacity">Capacity *</Label>
                    <Input
                      id="capacity"
                      type="number"
                      min="1"
                      value={sessionForm.capacity}
                      onChange={(e) => setSessionForm({...sessionForm, capacity: e.target.value})}
                      placeholder="25"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="course">Related Course</Label>
                    <Select
                      value={sessionForm.courseId}
                      onValueChange={(value) => setSessionForm({...sessionForm, courseId: value})}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="c1">Fire Safety Training</SelectItem>
                        <SelectItem value="c2">PPE Training</SelectItem>
                        <SelectItem value="c3">Chemical Handling</SelectItem>
                        <SelectItem value="c4">First Aid & CPR</SelectItem>
                        <SelectItem value="c5">Emergency Response</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label>Options</Label>
                  <div className="grid grid-cols-2 mt-1 gap-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="sendNotification" defaultChecked />
                      <Label htmlFor="sendNotification" className="text-sm">Send notifications</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="allowRegistration" defaultChecked />
                      <Label htmlFor="allowRegistration" className="text-sm">Allow registration</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="mandatory" />
                      <Label htmlFor="mandatory" className="text-sm">Mark as mandatory</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="recordAttendance" defaultChecked />
                      <Label htmlFor="recordAttendance" className="text-sm">Record attendance</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleSessionSubmit} className="bg-orange-500 hover:bg-orange-600">
                Schedule Session
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Calendar and Sessions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-blue-500" />
              Calendar
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="rounded-md border"
              modifiersClassNames={{
                selected: 'bg-orange-500 text-white hover:bg-orange-500 hover:text-white',
                today: 'bg-orange-100 text-orange-800',
              }}
            />
          </CardContent>
        </Card>

        {/* Sessions List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  Sessions for {formattedSelectedDate}
                </div>
                <div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="All sessions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All sessions</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredSessions.length > 0 ? (
                filteredSessions.map(session => (
                  <Card key={session.id} className="overflow-hidden">
                    <div className={`h-1 ${
                      session.status === "upcoming" ? "bg-blue-500" : 
                      session.status === "completed" ? "bg-green-500" : "bg-gray-400"
                    }`}></div>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium">{session.title}</h3>
                            <Badge className={
                              session.status === "upcoming" ? "bg-blue-500" : 
                              session.status === "completed" ? "bg-green-500" : "bg-gray-400"
                            }>
                              {session.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {session.timeStart} - {session.timeEnd}
                            </div>
                            <div>|</div>
                            <div>{session.location}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="text-sm">
                            <span className="text-gray-600">Instructor: </span>
                            <span className="font-medium">{session.instructor}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-600">Enrolled: </span>
                            <span className="font-medium">{session.enrolled}/{session.capacity}</span>
                          </div>
                          
                          <div className="ml-2 flex gap-1">
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                              <Users className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-6">
                  <CalendarIcon className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                  <h3 className="text-lg font-medium text-gray-900">No sessions scheduled</h3>
                  <p className="text-gray-600 mb-4">There are no training sessions scheduled for this date.</p>
                  <Button onClick={() => setShowDialog(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Session
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Upcoming Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sessionsData
            .filter(session => session.status === "upcoming")
            .slice(0, 3)
            .map(session => (
              <Card key={session.id}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="bg-blue-100 p-2 rounded-md">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <Badge className="bg-blue-500">{session.status}</Badge>
                  </div>
                  
                  <h3 className="font-medium text-lg mb-1">{session.title}</h3>
                  
                  <div className="space-y-2 mt-3">
                    <div className="flex items-center text-sm">
                      <CalendarIcon className="w-4 h-4 text-gray-500 mr-2" />
                      <span>{new Date(session.date).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 text-gray-500 mr-2" />
                      <span>{session.timeStart} - {session.timeEnd}</span>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <span className="text-gray-500">📍</span>
                      </div>
                      <span>{session.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
                    <div className="text-sm">
                      <span className="text-gray-600">Enrollment: </span>
                      <span className="font-medium">{session.enrolled}/{session.capacity}</span>
                    </div>
                    
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
