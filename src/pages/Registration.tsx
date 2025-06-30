
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    admissionClass: '',
    mobile: '',
    password: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const generateConfirmationCode = () => {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000);
    return `SP${timestamp.toString().slice(-6)}${randomNum.toString().padStart(3, '0')}`;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.admissionClass) newErrors.admissionClass = 'Please select a class';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const code = generateConfirmationCode();
      setConfirmationCode(code);
      setIsRegistered(true);

      const message = `Hi! I have successfully registered at Success Point Coaching Centre.

Registration Details:
- Full Name: ${formData.fullName}
- Class: ${formData.admissionClass}
- Mobile: ${formData.mobile}
- Email: ${formData.email}
- Confirmation Code: ${code}

Please confirm my registration.`;

      const whatsappUrl = `https://wa.me/919163924237?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      admissionClass: '',
      mobile: '',
      password: '',
      email: ''
    });
    setErrors({});
    setConfirmationCode('');
    setIsRegistered(false);
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Student Registration</h1>

          {isRegistered ? (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-green-600 text-center">Registration Successful!</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Alert className="mb-6">
                  <AlertDescription>
                    <strong>Your Confirmation Code: {confirmationCode}</strong>
                    <br />
                    Please save this code for your records. We have also sent your details via WhatsApp.
                  </AlertDescription>
                </Alert>
                <p className="text-gray-600 mb-6">
                  Thank you for registering with Success Point Coaching Centre! 
                  We will contact you soon with further instructions.
                </p>
                <Button onClick={resetForm} className="bg-blue-600 hover:bg-blue-700">
                  Register Another Student
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Student Registration Form</CardTitle>
                <CardDescription className="text-center">
                  Register now to join Success Point Coaching Centre
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
                      placeholder="Enter your full name"
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

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Complete Registration
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
