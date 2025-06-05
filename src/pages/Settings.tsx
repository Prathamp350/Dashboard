
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Database,
  Mail,
  Palette,
  Globe,
  Save,
  Upload,
  Download
} from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Save size={20} className="mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <nav className="space-y-2">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg bg-orange-50 text-orange-600 border border-orange-200">
                  <User size={18} />
                  <span className="font-medium">Profile</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg text-gray-600 hover:bg-gray-50">
                  <Bell size={18} />
                  <span>Notifications</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg text-gray-600 hover:bg-gray-50">
                  <Shield size={18} />
                  <span>Security</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg text-gray-600 hover:bg-gray-50">
                  <Database size={18} />
                  <span>System</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg text-gray-600 hover:bg-gray-50">
                  <Mail size={18} />
                  <span>Email</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg text-gray-600 hover:bg-gray-50">
                  <Palette size={18} />
                  <span>Appearance</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg text-gray-600 hover:bg-gray-50">
                  <Globe size={18} />
                  <span>Integration</span>
                </button>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Settings */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User size={20} className="text-orange-600" />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                  <User size={32} className="text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Profile Picture</h3>
                  <p className="text-sm text-gray-600 mb-3">Update your profile picture</p>
                  <Button variant="outline" size="sm">
                    <Upload size={16} className="mr-2" />
                    Upload New Picture
                  </Button>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="User" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="admin@safetytraining.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" defaultValue="Safety Manager" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" defaultValue="Safety & Compliance" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell size={20} className="text-orange-600" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Email Notifications</h4>
                    <p className="text-sm text-gray-600">Receive notifications via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Course Completions</h4>
                    <p className="text-sm text-gray-600">Notify when users complete training</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Compliance Alerts</h4>
                    <p className="text-sm text-gray-600">Notify on compliance changes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Certificate Expiry Alerts</h4>
                    <p className="text-sm text-gray-600">Notify before certificates expire</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">System Updates</h4>
                    <p className="text-sm text-gray-600">Notify about platform updates</p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label htmlFor="alertFrequency">Alert Frequency</Label>
                <select 
                  id="alertFrequency" 
                  className="w-full border border-gray-300 rounded-lg p-2"
                  defaultValue="daily"
                >
                  <option value="immediate">Immediate</option>
                  <option value="daily">Daily Digest</option>
                  <option value="weekly">Weekly Digest</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database size={20} className="text-orange-600" />
                Data Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div>
                    <h4 className="font-medium text-blue-900">Export Data</h4>
                    <p className="text-sm text-blue-700">Download all system data</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download size={16} className="mr-2" />
                    Export
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div>
                    <h4 className="font-medium text-green-900">Backup Settings</h4>
                    <p className="text-sm text-green-700">Configure automatic backups</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div>
                    <h4 className="font-medium text-orange-900">Import Data</h4>
                    <p className="text-sm text-orange-700">Upload data from file</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Upload size={16} className="mr-2" />
                    Import
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Automatic Backups</h4>
                    <p className="text-sm text-gray-600">Schedule regular data backups</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Data Retention</h4>
                    <p className="text-sm text-gray-600">Store historical data for 3 years</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
