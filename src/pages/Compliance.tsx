
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  CheckCircle,
  AlertCircle,
  Clock,
  Calendar,
  Download,
  Bell
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// Mock compliance data
const categoryData = [
  {
    id: "c1",
    name: "Fire Safety",
    status: "Compliant",
    progress: 98,
    target: 100,
    completed: "8/8",
    lastUpdated: "2024-12-01",
    nextDeadline: "2025-03-15"
  },
  {
    id: "c2",
    name: "Personal Protective Equipment",
    status: "At Risk",
    progress: 92,
    target: 95,
    completed: "5/6",
    lastUpdated: "2024-11-28",
    nextDeadline: "2024-12-20"
  },
  {
    id: "c3",
    name: "Chemical Safety",
    status: "Compliant",
    progress: 95,
    target: 95,
    completed: "7/7",
    lastUpdated: "2024-11-25",
    nextDeadline: "2025-01-15"
  },
  {
    id: "c4",
    name: "Electrical Safety",
    status: "At Risk",
    progress: 88,
    target: 100,
    completed: "6/8",
    lastUpdated: "2024-11-20",
    nextDeadline: "2024-12-30"
  },
  {
    id: "c5",
    name: "Machine Operation",
    status: "Overdue",
    progress: 75,
    target: 100,
    completed: "3/4",
    lastUpdated: "2024-11-05",
    nextDeadline: "2024-12-10"
  }
];

// Mock deadline data
const deadlinesData = [
  {
    id: "d1",
    title: "Annual PPE Training Renewal",
    department: "Manufacturing",
    dueDate: "2024-12-15",
    daysLeft: 10,
    priority: "high",
    affectedUsers: 45
  },
  {
    id: "d2",
    title: "Chemical Handling Certification",
    department: "Warehouse",
    dueDate: "2024-12-20",
    daysLeft: 15,
    priority: "medium",
    affectedUsers: 23
  },
  {
    id: "d3",
    title: "Safety Audit Preparation",
    department: "All Departments",
    dueDate: "2025-01-10",
    daysLeft: 35,
    priority: "low",
    affectedUsers: 120
  }
];

const Compliance = () => {
  const { toast } = useToast();
  const [alertConfig, setAlertConfig] = useState({
    title: "",
    message: "",
    type: "standard",
    deadline: ""
  });
  
  // Calculate overall compliance
  const overallCompliance = categoryData.reduce((acc, cat) => acc + cat.progress, 0) / categoryData.length;
  
  // Count categories by status
  const statusCounts = {
    compliant: categoryData.filter(cat => cat.status === "Compliant").length,
    atRisk: categoryData.filter(cat => cat.status === "At Risk").length,
    overdue: categoryData.filter(cat => cat.status === "Overdue").length
  };
  
  // Set alert handler
  const handleSetAlert = () => {
    if (!alertConfig.title || !alertConfig.message || !alertConfig.deadline) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Alert Set Successfully",
      description: `Alert "${alertConfig.title}" has been scheduled.`,
    });
    
    setAlertConfig({
      title: "",
      message: "",
      type: "standard",
      deadline: ""
    });
  };
  
  // Export report handler
  const handleExportReport = () => {
    toast({
      title: "Report Exported",
      description: "Compliance report has been exported successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Compliance Dashboard</h1>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={handleExportReport}
            className="flex items-center gap-1"
          >
            <Download className="w-4 h-4" />
            Export Report
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Bell className="w-4 h-4 mr-2" />
                Set Alert
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Configure Compliance Alert</DialogTitle>
                <DialogDescription>
                  Create a new alert for upcoming deadlines or compliance issues.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div>
                  <label htmlFor="alertTitle" className="block text-sm font-medium mb-1">
                    Alert Title *
                  </label>
                  <input
                    id="alertTitle"
                    className="w-full p-2 border rounded-md"
                    value={alertConfig.title}
                    onChange={(e) => setAlertConfig({...alertConfig, title: e.target.value})}
                    placeholder="Enter alert title"
                  />
                </div>
                
                <div>
                  <label htmlFor="alertMessage" className="block text-sm font-medium mb-1">
                    Alert Message *
                  </label>
                  <textarea
                    id="alertMessage"
                    className="w-full p-2 border rounded-md h-24"
                    value={alertConfig.message}
                    onChange={(e) => setAlertConfig({...alertConfig, message: e.target.value})}
                    placeholder="Enter alert message"
                  />
                </div>
                
                <div>
                  <label htmlFor="alertType" className="block text-sm font-medium mb-1">
                    Alert Type
                  </label>
                  <select
                    id="alertType"
                    className="w-full p-2 border rounded-md"
                    value={alertConfig.type}
                    onChange={(e) => setAlertConfig({...alertConfig, type: e.target.value})}
                  >
                    <option value="standard">Standard</option>
                    <option value="urgent">Urgent</option>
                    <option value="critical">Critical</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="alertDeadline" className="block text-sm font-medium mb-1">
                    Alert Deadline *
                  </label>
                  <input
                    id="alertDeadline"
                    type="date"
                    className="w-full p-2 border rounded-md"
                    value={alertConfig.deadline}
                    onChange={(e) => setAlertConfig({...alertConfig, deadline: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Recipients
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="allUsers" defaultChecked />
                      <label htmlFor="allUsers" className="text-sm">All Users</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="adminOnly" />
                      <label htmlFor="adminOnly" className="text-sm">Administrators Only</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="managers" />
                      <label htmlFor="managers" className="text-sm">Department Managers</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleSetAlert} className="bg-orange-500 hover:bg-orange-600">
                  Set Alert
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Overall Compliance</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-1">{overallCompliance.toFixed(1)}%</h2>
                <p className="text-xs text-gray-600 mt-1">Target: 95%</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Compliant Areas</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-1">42</h2>
                <p className="text-xs text-gray-600 mt-1">of 45 total</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Pending Items</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-1">2</h2>
                <p className="text-xs text-gray-600 mt-1">Need attention</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-5">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Overdue Items</p>
                <h2 className="text-3xl font-bold text-gray-900 mt-1">1</h2>
                <p className="text-xs text-gray-600 mt-1">Immediate action</p>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Compliance by Category */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Shield className="w-5 h-5 text-green-600" />
                Compliance by Category
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {categoryData.map(category => (
                <div key={category.id}>
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium">{category.name}</h3>
                    <Badge 
                      className={
                        category.status === "Compliant" ? "bg-green-500" : 
                        category.status === "At Risk" ? "bg-yellow-500" : "bg-red-500"
                      }
                    >
                      {category.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-medium">Progress</p>
                    <p className="text-sm text-gray-600">{category.progress}% / {category.target}%</p>
                  </div>
                  
                  <Progress 
                    value={category.progress} 
                    max={100} 
                    className={`h-2 ${
                      category.progress >= category.target ? "bg-green-500" : 
                      category.progress >= category.target * 0.9 ? "bg-yellow-500" : "bg-red-500"
                    }`} 
                  />
                  
                  <div className="grid grid-cols-3 gap-4 mt-3">
                    <div>
                      <p className="text-xs text-gray-500">Completed</p>
                      <p className="text-sm font-medium">{category.completed}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Last Updated</p>
                      <p className="text-sm font-medium">{new Date(category.lastUpdated).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Next Deadline</p>
                      <p className="text-sm font-medium">{new Date(category.nextDeadline).toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  {category !== categoryData[categoryData.length - 1] && <hr className="my-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Deadlines */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Calendar className="w-5 h-5 text-orange-500" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {deadlinesData.map(deadline => (
                <div 
                  key={deadline.id} 
                  className={`p-4 rounded-lg border ${
                    deadline.priority === "high" ? "bg-red-50 border-red-200" : 
                    deadline.priority === "medium" ? "bg-orange-50 border-orange-200" : 
                    "bg-blue-50 border-blue-200"
                  }`}
                >
                  <h3 className={`font-medium ${
                    deadline.priority === "high" ? "text-red-900" : 
                    deadline.priority === "medium" ? "text-orange-900" : 
                    "text-blue-900"
                  }`}>
                    {deadline.title}
                  </h3>
                  
                  <p className={`text-sm ${
                    deadline.priority === "high" ? "text-red-700" : 
                    deadline.priority === "medium" ? "text-orange-700" : 
                    "text-blue-700"
                  }`}>
                    {deadline.department}
                  </p>
                  
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-gray-600">Due Date:</p>
                      <p className="text-sm font-medium">{new Date(deadline.dueDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Days Left:</p>
                      <p className="text-sm font-medium">{deadline.daysLeft} days</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Affected Users:</p>
                      <p className="text-sm font-medium">{deadline.affectedUsers} users</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Priority:</p>
                      <Badge className={
                        deadline.priority === "high" ? "bg-red-500" : 
                        deadline.priority === "medium" ? "bg-orange-500" : 
                        "bg-blue-500"
                      }>
                        {deadline.priority}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                View All Deadlines
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
