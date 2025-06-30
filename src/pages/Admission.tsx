
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const message = `Hi! I want to apply for admission at Success Point Coaching Centre.

Student Details:
- Full Name: ${formData.fullName}
- Class: ${formData.admissionClass}
- Mobile: ${formData.mobile}
- Email: ${formData.email}

Please guide me through the admission process.`;

      const whatsappUrl = `https://wa.me/919163924237?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Admission Information</h1>

          {/* Admission Poster */}
          <div className="mb-12 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
              <img 
                src="/lovable-uploads/8d137088-a954-45fc-934d-f714104fd4dd.png" 
                alt="Success Point Admission Details" 
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Courses Offered */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Class 11th</CardTitle>
                <CardDescription>ISC, CBSE Board</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive coaching for Class 11th students following ISC and CBSE curriculum.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Class 12th (H.S.)</CardTitle>
                <CardDescription>1st to 4th Semester, W.B. Board</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Complete Higher Secondary education support for West Bengal Board students.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">B.Com</CardTitle>
                <CardDescription>1st to 6th Semester (Hons & Gen)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Bachelor of Commerce coaching for both Honours and General streams.</p>
              </CardContent>
            </Card>
          </div>

          {/* Digital Classes Info */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12 rounded-r-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📚 FULLY DIGITAL CLASSES</h3>
            <p className="text-gray-700 mb-2">We offer flexible learning options:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Offline Classes (In-person learning)</li>
              <li>Online Classes (Live interactive sessions)</li>
              <li>Recorded Classes (Learn at your own pace)</li>
            </ul>
          </div>

          {/* Admission Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Admission Form</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below to apply for admission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={errors.fullName ? 'border-red-500' : ''}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="admissionClass">In which class admission *</Label>
                  <Select onValueChange={(value) => handleInputChange('admissionClass', value)}>
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
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
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
