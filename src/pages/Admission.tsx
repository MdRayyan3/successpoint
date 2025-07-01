
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { GraduationCap, BookOpen, Users, Monitor, Wifi, Video } from 'lucide-react';

interface FormData {
  fullName: string;
  admissionClass: string;  
  mobile: string;
  password: string;
  email: string;
}

interface FormErrors {
  fullName?: string;
  admissionClass?: string;
  mobile?: string;
  password?: string;
  email?: string;
}

const Admission = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    admissionClass: '',
    mobile: '',
    password: '',
    email: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.admissionClass) newErrors.admissionClass = 'Please select a class';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getClassDisplayName = (value: string) => {
    const classMap: { [key: string]: string } = {
      'class-11-isc': 'Class 11th (ISC Board)',
      'class-11-cbse': 'Class 11th (CBSE Board)',
      'class-12-wb-1st': 'Class 12th - 1st Semester (W.B. Board)',
      'class-12-wb-2nd': 'Class 12th - 2nd Semester (W.B. Board)',
      'class-12-wb-3rd': 'Class 12th - 3rd Semester (W.B. Board)',
      'class-12-wb-4th': 'Class 12th - 4th Semester (W.B. Board)',
      'bcom-1st-hons': 'B.Com 1st Semester (Hons)',
      'bcom-1st-gen': 'B.Com 1st Semester (Gen)',
      'bcom-2nd-hons': 'B.Com 2nd Semester (Hons)',
      'bcom-2nd-gen': 'B.Com 2nd Semester (Gen)',
      'bcom-3rd-hons': 'B.Com 3rd Semester (Hons)',
      'bcom-3rd-gen': 'B.Com 3rd Semester (Gen)',
      'bcom-4th-hons': 'B.Com 4th Semester (Hons)',
      'bcom-4th-gen': 'B.Com 4th Semester (Gen)',
      'bcom-5th-hons': 'B.Com 5th Semester (Hons)',
      'bcom-5th-gen': 'B.Com 5th Semester (Gen)',
      'bcom-6th-hons': 'B.Com 6th Semester (Hons)',
      'bcom-6th-gen': 'B.Com 6th Semester (Gen)'
    };
    return classMap[value] || value;
  };

  const handleCardClick = (classValue: string) => {
    setFormData(prev => ({ ...prev, admissionClass: classValue }));
    // Scroll to form
    document.getElementById('admission-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const message = `Hi! I want to apply for admission at Success Point Coaching Centre.

Student Details:
- Full Name: ${formData.fullName}
- Class: ${getClassDisplayName(formData.admissionClass)}
- Mobile: ${formData.mobile}
- Email: ${formData.email}

Please guide me through the admission process.`;

      // Primary WhatsApp number (hidden from UI)
      const whatsappUrl = `https://wa.me/919088770040?text=${encodeURIComponent(message)}`;
      
      // Show success toast
      toast({
        title: "Redirecting to WhatsApp",
        description: "Your admission request is being sent via WhatsApp.",
      });

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
    } else {
      toast({
        title: "Form Incomplete",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Admission Information
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join Success Point Coaching Centre for Academic Excellence and transform your future with quality education
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Courses Offered - Enhanced Design */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12">
              Our Courses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Class 11th Card */}
              <Card 
                className="cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-red-50 to-pink-100 border-0 group overflow-hidden animate-scale-in"
                onClick={() => handleCardClick('class-11-isc')}
              >
                <CardHeader className="text-center pb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                      Class 11th
                    </CardTitle>
                    <CardDescription className="text-red-600 font-medium">ISC & CBSE Board</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-gray-700 mb-4 leading-relaxed">Comprehensive coaching for Class 11th students following ISC and CBSE curriculum.</p>
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg p-3 text-sm font-medium shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    Click to select this course
                  </div>
                </CardContent>
              </Card>

              {/* Class 12th Card */}
              <Card 
                className="cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 border-0 group overflow-hidden animate-scale-in"
                style={{ animationDelay: '100ms' }}
                onClick={() => handleCardClick('class-12-wb-1st')}
              >
                <CardHeader className="text-center pb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                      Class 12th (H.S.)
                    </CardTitle>
                    <CardDescription className="text-blue-600 font-medium">1st to 4th Semester, W.B. Board</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-gray-700 mb-4 leading-relaxed">Complete Higher Secondary education support for West Bengal Board students.</p>
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg p-3 text-sm font-medium shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    Click to select this course
                  </div>
                </CardContent>
              </Card>

              {/* B.Com Card */}
              <Card 
                className="cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100 border-0 group overflow-hidden animate-scale-in"
                style={{ animationDelay: '200ms' }}
                onClick={() => handleCardClick('bcom-1st-hons')}
              >
                <CardHeader className="text-center pb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                      B.Com
                    </CardTitle>
                    <CardDescription className="text-green-600 font-medium">1st to 6th Semester (Hons & Gen)</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-gray-700 mb-4 leading-relaxed">Bachelor of Commerce coaching for both Honours and General streams.</p>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-3 text-sm font-medium shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    Click to select this course
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Digital Classes Info */}
          <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-amber-50 border-l-4 border-gradient-to-b from-yellow-400 to-orange-400 p-8 mb-16 rounded-r-3xl shadow-2xl animate-slide-in-right">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6 flex items-center">
              📚 FULLY DIGITAL CLASSES
            </h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">We offer flexible learning options to suit every student's needs:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">
                  <Monitor className="w-12 h-12 mx-auto text-blue-500" />
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">Offline Classes</h4>
                <p className="text-sm text-gray-600">Traditional in-person learning experience</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">
                  <Wifi className="w-12 h-12 mx-auto text-green-500" />
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">Online Classes</h4>
                <p className="text-sm text-gray-600">Live interactive digital sessions</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">
                  <Video className="w-12 h-12 mx-auto text-purple-500" />
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">Recorded Classes</h4>
                <p className="text-sm text-gray-600">Self-paced learning flexibility</p>
              </div>
            </div>
          </div>

          {/* Contact Info - Only show secondary number */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-8 rounded-3xl mb-12 text-center shadow-2xl animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
              📞 Contact for Admission
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <a 
                href="https://wa.me/919163924237" 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 font-semibold px-6 py-3 rounded-full hover:scale-105 transform"
              >
                📱 WhatsApp: +91 91639 24237
              </a>
            </div>
          </div>

          {/* Admission Form */}
          <Card className="max-w-2xl mx-auto shadow-2xl border-0 overflow-hidden animate-scale-in" id="admission-form">
            <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
              <CardTitle className="text-4xl text-center font-bold">Admission Form</CardTitle>
              <CardDescription className="text-center text-blue-100 text-lg">
                Fill out the form below to apply for admission
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 bg-gradient-to-br from-white to-blue-50">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-700 font-medium">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="admissionClass" className="text-gray-700 font-medium">In which class *</Label>
                  <Select onValueChange={(value) => handleInputChange('admissionClass', value)} value={formData.admissionClass}>
                    <SelectTrigger className={`${errors.admissionClass ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300`}>
                      <SelectValue placeholder="Select a class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="class-11-isc">Class 11th (ISC Board)</SelectItem>
                      <SelectItem value="class-11-cbse">Class 11th (CBSE Board)</SelectItem>
                      <SelectItem value="class-12-wb-1st">Class 12th - 1st Semester (W.B. Board)</SelectItem>
                      <SelectItem value="class-12-wb-2nd">Class 12th - 2nd Semester (W.B. Board)</SelectItem>
                      <SelectItem value="class-12-wb-3rd">Class 12th - 3rd Semester (W.B. Board)</SelectItem>
                      <SelectItem value="class-12-wb-4th">Class 12th - 4th Semester (W.B. Board)</SelectItem>
                      <SelectItem value="bcom-1st-hons">B.Com 1st Semester (Hons)</SelectItem>
                      <SelectItem value="bcom-1st-gen">B.Com 1st Semester (Gen)</SelectItem>
                      <SelectItem value="bcom-2nd-hons">B.Com 2nd Semester (Hons)</SelectItem>
                      <SelectItem value="bcom-2nd-gen">B.Com 2nd Semester (Gen)</SelectItem>
                      <SelectItem value="bcom-3rd-hons">B.Com 3rd Semester (Hons)</SelectItem>
                      <SelectItem value="bcom-3rd-gen">B.Com 3rd Semester (Gen)</SelectItem>
                      <SelectItem value="bcom-4th-hons">B.Com 4th Semester (Hons)</SelectItem>
                      <SelectItem value="bcom-4th-gen">B.Com 4th Semester (Gen)</SelectItem>
                      <SelectItem value="bcom-5th-hons">B.Com 5th Semester (Hons)</SelectItem>
                      <SelectItem value="bcom-5th-gen">B.Com 5th Semester (Gen)</SelectItem>
                      <SelectItem value="bcom-6th-hons">B.Com 6th Semester (Hons)</SelectItem>
                      <SelectItem value="bcom-6th-gen">B.Com 6th Semester (Gen)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.admissionClass && <p className="text-red-500 text-sm mt-1">{errors.admissionClass}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-gray-700 font-medium">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className={`${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                    placeholder="Enter your mobile number"
                  />
                  {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">Create Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                    placeholder="Create a secure password"
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white text-lg py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Send Admission Request via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admission;
