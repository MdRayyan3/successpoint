import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

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
      'bcom-3rd-gen': 'B.Com 3rd Semester (Hons)',
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

      // Primary WhatsApp number
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
    <div className="min-h-screen py-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">Admission Information</h1>
          <p className="text-xl text-center text-gray-600 mb-16">Join Success Point Coaching Centre for Academic Excellence</p>

          {/* Admission Poster */}
          <div className="mb-16 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl inline-block border border-gray-100">
              <img 
                src="/lovable-uploads/8d137088-a954-45fc-934d-f714104fd4dd.png" 
                alt="Success Point Admission Details" 
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Courses Offered - Enhanced Design */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Courses</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Class 11th Card */}
              <Card 
                className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-red-50 to-red-100 border-red-200 group"
                onClick={() => handleCardClick('class-11-isc')}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-red-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <GraduationCap className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-2xl text-red-700 group-hover:text-red-800">Class 11th</CardTitle>
                  <CardDescription className="text-red-600">ISC & CBSE Board</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">Comprehensive coaching for Class 11th students following ISC and CBSE curriculum.</p>
                  <div className="bg-white/50 rounded-lg p-3 text-sm text-red-800 font-medium">
                    Click to select this course
                  </div>
                </CardContent>
              </Card>

              {/* Class 12th Card */}
              <Card 
                className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 group"
                onClick={() => handleCardClick('class-12-wb-1st')}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-blue-700 group-hover:text-blue-800">Class 12th (H.S.)</CardTitle>
                  <CardDescription className="text-blue-600">1st to 4th Semester, W.B. Board</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">Complete Higher Secondary education support for West Bengal Board students.</p>
                  <div className="bg-white/50 rounded-lg p-3 text-sm text-blue-800 font-medium">
                    Click to select this course
                  </div>
                </CardContent>
              </Card>

              {/* B.Com Card */}
              <Card 
                className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-green-50 to-green-100 border-green-200 group"
                onClick={() => handleCardClick('bcom-1st-hons')}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-700 group-hover:text-green-800">B.Com</CardTitle>
                  <CardDescription className="text-green-600">1st to 6th Semester (Hons & Gen)</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4">Bachelor of Commerce coaching for both Honours and General streams.</p>
                  <div className="bg-white/50 rounded-lg p-3 text-sm text-green-800 font-medium">
                    Click to select this course
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Digital Classes Info */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-8 mb-16 rounded-r-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              📚 FULLY DIGITAL CLASSES
            </h3>
            <p className="text-gray-700 mb-4 text-lg">We offer flexible learning options:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/70 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🏫</div>
                <h4 className="font-semibold text-gray-800">Offline Classes</h4>
                <p className="text-sm text-gray-600">In-person learning</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💻</div>
                <h4 className="font-semibold text-gray-800">Online Classes</h4>
                <p className="text-sm text-gray-600">Live interactive sessions</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📹</div>
                <h4 className="font-semibold text-gray-800">Recorded Classes</h4>
                <p className="text-sm text-gray-600">Learn at your own pace</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-blue-600 text-white p-6 rounded-xl mb-12 text-center shadow-lg">
            <h3 className="text-xl font-bold mb-4">📞 Contact for Admission</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <a href="https://wa.me/919088770040" className="hover:text-blue-200 transition-colors font-semibold">
                📱 Primary: +91 90887 70040
              </a>
              <span className="text-blue-200">•</span>
              <a href="https://wa.me/919163924237" className="hover:text-blue-200 transition-colors">
                📱 Secondary: +91 91639 24237
              </a>
            </div>
          </div>

          {/* Admission Form */}
          <Card className="max-w-2xl mx-auto shadow-2xl border-gray-200" id="admission-form">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
              <CardTitle className="text-3xl text-center">Admission Form</CardTitle>
              <CardDescription className="text-center text-blue-100">
                Fill out the form below to apply for admission
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={errors.fullName ? 'border-red-500' : ''}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="admissionClass">In which class admission *</Label>
                  <Select onValueChange={(value) => handleInputChange('admissionClass', value)} value={formData.admissionClass}>
                    <SelectTrigger className={errors.admissionClass ? 'border-red-500' : ''}>
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

                <div>
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className={errors.mobile ? 'border-red-500' : ''}
                    placeholder="Enter your mobile number"
                  />
                  {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                </div>

                <div>
                  <Label htmlFor="password">Create Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={errors.password ? 'border-red-500' : ''}
                    placeholder="Create a secure password"
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? 'border-red-500' : ''}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white text-lg py-3">
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
