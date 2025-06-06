import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Bell, 
  Shield, 
  Settings as SettingsIcon, 
  Mail,
  Palette,
  Globe,
  Upload
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    firstName: "Admin",
    lastName: "User",
    email: "admin@safetytraining.com",
    phone: "+1 (555) 123-4567",
    role: "Safety Manager",
    department: "Safety & Compliance"
  });
  
  const [notificationPreferences, setNotificationPreferences] = useState({
    emailNotifications: true,
    courseUpdates: true,
    complianceAlerts: true,
    systemAnnouncements: true,
    dailyDigest: false,
    urgentAlerts: true
  });
  
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: "30",
    passwordExpiration: "90",
    loginAttempts: "5"
  });

  const [systemSettings, setSystemSettings] = useState({
    language: "english",
    timeZone: "UTC-5",
    dateFormat: "MM/DD/YYYY",
    autoLogout: "30",
    rememberUser: true
  });
  
  const [emailSettings, setEmailSettings] = useState({
    emailSignature: "",
    defaultReplyTo: "admin@safetytraining.com",
    sendCopy: true,
    emailFormat: "html"
  });
  
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: "light",
    fontSize: "medium",
    compactView: false,
    highContrast: false
  });
  
  // Handle profile update
  const handleProfileUpdate = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
  };
  
  // Handle notification update
  const handleNotificationUpdate = () => {
    toast({
      title: "Notification Preferences Updated",
      description: "Your notification preferences have been saved.",
    });
  };
  
  // Handle security update
  const handleSecurityUpdate = () => {
    toast({
      title: "Security Settings Updated",
      description: "Your security settings have been updated successfully.",
    });
  };
  
  // Handle system update
  const handleSystemUpdate = () => {
    toast({
      title: "System Settings Updated",
      description: "Your system settings have been updated successfully.",
    });
  };
  
  // Handle email update
  const handleEmailUpdate = () => {
    toast({
      title: "Email Settings Updated",
      description: "Your email settings have been updated successfully.",
    });
  };
  
  // Handle appearance update
  const handleAppearanceUpdate = () => {
    toast({
      title: "Appearance Settings Updated",
      description: "Your appearance settings have been updated successfully.",
    });
  };
  
  // Handle save all changes
  const handleSaveAll = () => {
    toast({
      title: "All Changes Saved",
      description: "All your settings have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        
        <Button 
          onClick={handleSaveAll}
          className="bg-orange-500 hover:bg-orange-600"
        >
          <SettingsIcon className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex">
          <div className="w-60 border-r pr-4 mr-6">
            <div className="grid gap-2">
              <Button 
                variant={activeTab === "profile" ? "default" : "ghost"} 
                className={`flex w-full justify-start ${activeTab === "profile" ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                onClick={() => setActiveTab("profile")}
              >
                <User className="w-5 h-5 mr-3" />
                Profile
              </Button>
              <Button 
                variant={activeTab === "notifications" ? "default" : "ghost"} 
                className={`flex w-full justify-start ${activeTab === "notifications" ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                onClick={() => setActiveTab("notifications")}
              >
                <Bell className="w-5 h-5 mr-3" />
                Notifications
              </Button>
              <Button 
                variant={activeTab === "security" ? "default" : "ghost"} 
                className={`flex w-full justify-start ${activeTab === "security" ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                onClick={() => setActiveTab("security")}
              >
                <Shield className="w-5 h-5 mr-3" />
                Security
              </Button>
              <Button 
                variant={activeTab === "system" ? "default" : "ghost"} 
                className={`flex w-full justify-start ${activeTab === "system" ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                onClick={() => setActiveTab("system")}
              >
                <SettingsIcon className="w-5 h-5 mr-3" />
                System
              </Button>
              <Button 
                variant={activeTab === "email" ? "default" : "ghost"} 
                className={`flex w-full justify-start ${activeTab === "email" ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                onClick={() => setActiveTab("email")}
              >
                <Mail className="w-5 h-5 mr-3" />
                Email
              </Button>
              <Button 
                variant={activeTab === "appearance" ? "default" : "ghost"} 
                className={`flex w-full justify-start ${activeTab === "appearance" ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                onClick={() => setActiveTab("appearance")}
              >
                <Palette className="w-5 h-5 mr-3" />
                Appearance
              </Button>
              <Button 
                variant={activeTab === "integration" ? "default" : "ghost"} 
                className={`flex w-full justify-start ${activeTab === "integration" ? "bg-orange-500 hover:bg-orange-600" : ""}`}
                onClick={() => setActiveTab("integration")}
              >
                <Globe className="w-5 h-5 mr-3" />
                Integration
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <TabsContent value="profile" className="space-y-6">
              <div className="flex gap-6">
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5 text-orange-500" />
                      Profile Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Profile Picture */}
                    <div className="flex flex-col items-center space-y-3">
                      <div className="relative">
                        <div className="w-24 h-24 bg-orange-100 rounded-full overflow-hidden flex items-center justify-center">
                          <User className="w-12 h-12 text-orange-500" />
                        </div>
                        <Button variant="outline" className="absolute bottom-0 right-0 h-8 w-8 rounded-full p-0">
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button variant="outline" size="sm">
                        Upload New Picture
                      </Button>
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Work Information */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="role">Role</Label>
                        <Input
                          id="role"
                          value={profileData.role}
                          onChange={(e) => setProfileData({...profileData, role: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="department">Department</Label>
                        <Input
                          id="department"
                          value={profileData.department}
                          onChange={(e) => setProfileData({...profileData, department: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <Button onClick={handleProfileUpdate} className="bg-orange-500 hover:bg-orange-600 w-full">
                      Save Profile
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-orange-500" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Email Notifications */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Email Notifications</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className="text-sm text-gray-600">Receive all notifications via email</p>
                        </div>
                        <Switch 
                          checked={notificationPreferences.emailNotifications}
                          onCheckedChange={(checked) => 
                            setNotificationPreferences({...notificationPreferences, emailNotifications: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Course Updates</h4>
                          <p className="text-sm text-gray-600">Get notified about course changes</p>
                        </div>
                        <Switch 
                          checked={notificationPreferences.courseUpdates}
                          onCheckedChange={(checked) => 
                            setNotificationPreferences({...notificationPreferences, courseUpdates: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Compliance Alerts</h4>
                          <p className="text-sm text-gray-600">Get notified about compliance status changes</p>
                        </div>
                        <Switch 
                          checked={notificationPreferences.complianceAlerts}
                          onCheckedChange={(checked) => 
                            setNotificationPreferences({...notificationPreferences, complianceAlerts: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">System Announcements</h4>
                          <p className="text-sm text-gray-600">Important system updates and announcements</p>
                        </div>
                        <Switch 
                          checked={notificationPreferences.systemAnnouncements}
                          onCheckedChange={(checked) => 
                            setNotificationPreferences({...notificationPreferences, systemAnnouncements: checked})
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Other Notification Settings */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Other Notification Settings</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Daily Digest</h4>
                          <p className="text-sm text-gray-600">Receive a daily summary of activities</p>
                        </div>
                        <Switch 
                          checked={notificationPreferences.dailyDigest}
                          onCheckedChange={(checked) => 
                            setNotificationPreferences({...notificationPreferences, dailyDigest: checked})
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Urgent Alerts</h4>
                          <p className="text-sm text-gray-600">Receive immediate notifications for urgent issues</p>
                        </div>
                        <Switch 
                          checked={notificationPreferences.urgentAlerts}
                          onCheckedChange={(checked) => 
                            setNotificationPreferences({...notificationPreferences, urgentAlerts: checked})
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleNotificationUpdate} className="bg-orange-500 hover:bg-orange-600">
                    Save Notification Preferences
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-orange-500" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Two-Factor Authentication */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                      </div>
                      <Switch 
                        checked={securitySettings.twoFactorAuth}
                        onCheckedChange={(checked) => 
                          setSecuritySettings({...securitySettings, twoFactorAuth: checked})
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Change Password</h3>
                    <div className="grid gap-3">
                      <div>
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" className="mt-1" />
                      </div>
                    </div>
                    <Button className="mt-2" variant="outline">
                      Update Password
                    </Button>
                  </div>

                  {/* Security Settings */}
                  <div className="space-y-4">
                    <h3 className="font-medium">Security Settings</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                        <Input
                          id="sessionTimeout"
                          type="number"
                          value={securitySettings.sessionTimeout}
                          onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: e.target.value})}
                          min="5"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="passwordExpiration">Password Expiration (days)</Label>
                        <Input
                          id="passwordExpiration"
                          type="number"
                          value={securitySettings.passwordExpiration}
                          onChange={(e) => setSecuritySettings({...securitySettings, passwordExpiration: e.target.value})}
                          min="30"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="loginAttempts">Max Login Attempts</Label>
                        <Input
                          id="loginAttempts"
                          type="number"
                          value={securitySettings.loginAttempts}
                          onChange={(e) => setSecuritySettings({...securitySettings, loginAttempts: e.target.value})}
                          min="3"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleSecurityUpdate} className="bg-orange-500 hover:bg-orange-600">
                    Save Security Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="system" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <SettingsIcon className="w-5 h-5 text-orange-500" />
                    System Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="language">Language</Label>
                      <select
                        id="language"
                        value={systemSettings.language}
                        onChange={(e) => setSystemSettings({...systemSettings, language: e.target.value})}
                        className="w-full p-2 border rounded-md mt-1"
                      >
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option value="german">German</option>
                        <option value="portuguese">Portuguese</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="timeZone">Time Zone</Label>
                      <select
                        id="timeZone"
                        value={systemSettings.timeZone}
                        onChange={(e) => setSystemSettings({...systemSettings, timeZone: e.target.value})}
                        className="w-full p-2 border rounded-md mt-1"
                      >
                        <option value="UTC-8">Pacific Time (UTC-8)</option>
                        <option value="UTC-7">Mountain Time (UTC-7)</option>
                        <option value="UTC-6">Central Time (UTC-6)</option>
                        <option value="UTC-5">Eastern Time (UTC-5)</option>
                        <option value="UTC+0">UTC</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="dateFormat">Date Format</Label>
                      <select
                        id="dateFormat"
                        value={systemSettings.dateFormat}
                        onChange={(e) => setSystemSettings({...systemSettings, dateFormat: e.target.value})}
                        className="w-full p-2 border rounded-md mt-1"
                      >
                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="autoLogout">Auto-Logout (minutes)</Label>
                      <Input
                        id="autoLogout"
                        type="number"
                        value={systemSettings.autoLogout}
                        onChange={(e) => setSystemSettings({...systemSettings, autoLogout: e.target.value})}
                        min="5"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Remember User</h3>
                        <p className="text-sm text-gray-600">Remember login information for future sessions</p>
                      </div>
                      <Switch 
                        checked={systemSettings.rememberUser}
                        onCheckedChange={(checked) => 
                          setSystemSettings({...systemSettings, rememberUser: checked})
                        }
                      />
                    </div>
                  </div>
                  
                  <Button onClick={handleSystemUpdate} className="bg-orange-500 hover:bg-orange-600">
                    Save System Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="email" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-orange-500" />
                    Email Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="emailSignature">Email Signature</Label>
                      <textarea
                        id="emailSignature"
                        value={emailSettings.emailSignature}
                        onChange={(e) => setEmailSettings({...emailSettings, emailSignature: e.target.value})}
                        className="w-full p-2 border rounded-md mt-1 h-32"
                        placeholder="Enter your email signature"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="defaultReplyTo">Default Reply-To</Label>
                      <Input
                        id="defaultReplyTo"
                        type="email"
                        value={emailSettings.defaultReplyTo}
                        onChange={(e) => setEmailSettings({...emailSettings, defaultReplyTo: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Send Copy to Yourself</h3>
                        <p className="text-sm text-gray-600">Get a copy of all emails you send</p>
                      </div>
                      <Switch 
                        checked={emailSettings.sendCopy}
                        onCheckedChange={(checked) => 
                          setEmailSettings({...emailSettings, sendCopy: checked})
                        }
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="emailFormat">Email Format</Label>
                      <select
                        id="emailFormat"
                        value={emailSettings.emailFormat}
                        onChange={(e) => setEmailSettings({...emailSettings, emailFormat: e.target.value})}
                        className="w-full p-2 border rounded-md mt-1"
                      >
                        <option value="html">HTML</option>
                        <option value="plain">Plain Text</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button onClick={handleEmailUpdate} className="bg-orange-500 hover:bg-orange-600">
                    Save Email Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="appearance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-orange-500" />
                    Appearance Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="theme">Theme</Label>
                      <select
                        id="theme"
                        value={appearanceSettings.theme}
                        onChange={(e) => setAppearanceSettings({...appearanceSettings, theme: e.target.value})}
                        className="w-full p-2 border rounded-md mt-1"
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System Default</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="fontSize">Font Size</Label>
                      <select
                        id="fontSize"
                        value={appearanceSettings.fontSize}
                        onChange={(e) => setAppearanceSettings({...appearanceSettings, fontSize: e.target.value})}
                        className="w-full p-2 border rounded-md mt-1"
                      >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Compact View</h3>
                        <p className="text-sm text-gray-600">Use more compact user interface</p>
                      </div>
                      <Switch 
                        checked={appearanceSettings.compactView}
                        onCheckedChange={(checked) => 
                          setAppearanceSettings({...appearanceSettings, compactView: checked})
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">High Contrast</h3>
                        <p className="text-sm text-gray-600">Increase contrast for better visibility</p>
                      </div>
                      <Switch 
                        checked={appearanceSettings.highContrast}
                        onCheckedChange={(checked) => 
                          setAppearanceSettings({...appearanceSettings, highContrast: checked})
                        }
                      />
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-100 rounded-md border">
                    <h3 className="font-medium mb-2">Preview</h3>
                    <div className="flex gap-2">
                      <div className="p-3 bg-white rounded border flex-1">
                        <p className="text-sm font-medium">Light Theme</p>
                        <div className="flex gap-2 mt-2">
                          <div className="w-5 h-5 rounded bg-orange-500"></div>
                          <div className="w-5 h-5 rounded bg-blue-500"></div>
                          <div className="w-5 h-5 rounded bg-green-500"></div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-gray-800 rounded border flex-1">
                        <p className="text-sm font-medium text-white">Dark Theme</p>
                        <div className="flex gap-2 mt-2">
                          <div className="w-5 h-5 rounded bg-orange-400"></div>
                          <div className="w-5 h-5 rounded bg-blue-400"></div>
                          <div className="w-5 h-5 rounded bg-green-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button onClick={handleAppearanceUpdate} className="bg-orange-500 hover:bg-orange-600">
                    Save Appearance Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="integration" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-orange-500" />
                    Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-gray-600">Connect with other systems and services to extend functionality.</p>
                    
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between p-4 border rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded-md">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 6.75H7.75C6.23 6.75 5 7.98 5 9.5V18.25C5 19.77 6.23 21 7.75 21H16.5C18.02 21 19.25 19.77 19.25 18.25V17" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15 12L20 7" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M20 7V11" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M20 7H16" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">HRIS System</h3>
                            <p className="text-sm text-gray-600">Connect with your HR Information System</p>
                          </div>
                        </div>
                        <Button>Connect</Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-md">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 5L12 12L3 5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <rect x="3" y="5" width="18" height="14" rx="2" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">Email Service</h3>
                            <p className="text-sm text-gray-600">Configure email notification service</p>
                          </div>
                        </div>
                        <Button>Connect</Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded-md">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 12L4 12" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M20 6L4 6" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M20 18L4 18" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium">Data Export</h3>
                            <p className="text-sm text-gray-600">Configure data export to external systems</p>
                          </div>
                        </div>
                        <Button>Configure</Button>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-md border">
                      <h3 className="font-medium text-gray-900 mb-2">API Access</h3>
                      <p className="text-sm text-gray-600 mb-3">Enable API access for integrating with external systems</p>
                      <div className="flex gap-2">
                        <Button className="flex-1">Generate API Key</Button>
                        <Button variant="outline" className="flex-1">View Documentation</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Settings;
