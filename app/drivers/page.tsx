'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { 
  Truck, 
  DollarSign, 
  Home, 
  Wrench, 
  CheckCircle, 
  Phone, 
  Mail,
  MapPin,
  Clock,
  Shield,
  Award,
  Users,
  FileText
} from 'lucide-react';
import Link from 'next/link';
import { site } from '@/lib/config/site';
import { useState } from 'react';

export default function DriversPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cityState: '',
    cdlClass: '',
    experience: '',
    currentlyEmployed: '',
    smsConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, smsConsent: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.smsConsent) {
      toast({
        title: "SMS Consent Required",
        description: "Please consent to SMS communications to proceed with your application.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/forms/driver-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Application Submitted",
          description: "Thank you for your interest! We'll contact you within 24 hours to discuss opportunities.",
        });
        
        // Reset form
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          cityState: '',
          cdlClass: '',
          experience: '',
          currentlyEmployed: '',
          smsConsent: false
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const highlights = [
    {
      icon: DollarSign,
      title: 'Competitive Pay',
      description: 'Top industry rates with performance bonuses and weekly pay options',
      features: ['$0.65-$0.75 per mile', 'Performance bonuses', 'Weekly pay available', 'Fuel card provided'],
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Home,
      title: 'Home Time',
      description: 'Balanced work-life schedule with guaranteed home time',
      features: ['Home every weekend', 'Regional routes available', 'Flexible scheduling', 'Family-friendly policies'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Wrench,
      title: 'Modern Equipment',
      description: 'Well-maintained fleet with latest safety and comfort features',
      features: ['2020+ model trucks', 'APU equipped', 'GPS navigation', 'Regular maintenance'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const requirements = [
    'Valid Class A CDL with clean driving record',
    'Minimum 2 years of verifiable OTR experience',
    'DOT physical and drug screening (company paid)',
    'Professional attitude and strong work ethic',
    'Ability to pass background check',
    'Reliable communication and smartphone required',
    'Flexibility for various route assignments',
    'Commitment to safety and compliance standards'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Now Hiring Professional Drivers
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Drive Your Career Forward
              <span className="block text-blue-200">with CFTI</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our team of professional drivers and enjoy competitive pay, excellent benefits, 
              and the respect you deserve. We're committed to your success on and off the road.
            </p>
            
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link href="#apply">
                <Users className="w-5 h-5 mr-2" />
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Drive with Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference of working with a company that values its drivers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${highlight.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <highlight.icon className={`h-8 w-8 ${highlight.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{highlight.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {highlight.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Driver Requirements
              </h2>
              <p className="text-lg text-gray-600">
                We maintain high standards to ensure safety and professionalism
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-blue-600" />
                  Minimum Qualifications
                </CardTitle>
                <CardDescription>
                  All drivers must meet these requirements to join our team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Driver Application
              </h2>
              <p className="text-lg text-gray-600">
                Take the first step toward joining our professional driving team
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Apply to Drive with CFTI</CardTitle>
                <CardDescription>
                  Complete the form below and we'll contact you to discuss opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your Full Legal Name"
                    />
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="cityState">City, State *</Label>
                    <Input
                      id="cityState"
                      name="cityState"
                      value={formData.cityState}
                      onChange={handleInputChange}
                      required
                      placeholder="Cincinnati, OH"
                    />
                  </div>

                  {/* CDL Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cdlClass">CDL Class *</Label>
                      <Select onValueChange={(value) => handleSelectChange('cdlClass', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select CDL Class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="class-a">Class A</SelectItem>
                          <SelectItem value="class-b">Class B</SelectItem>
                          <SelectItem value="class-c">Class C</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Select onValueChange={(value) => handleSelectChange('experience', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2-3">2-3 years</SelectItem>
                          <SelectItem value="4-5">4-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Employment Status */}
                  <div className="space-y-4">
                    <Label>Currently Employed? *</Label>
                    <RadioGroup 
                      value={formData.currentlyEmployed} 
                      onValueChange={(value) => handleSelectChange('currentlyEmployed', value)}
                      className="flex space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="employed-yes" />
                        <Label htmlFor="employed-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="employed-no" />
                        <Label htmlFor="employed-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* SMS Consent */}
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="smsConsent"
                        checked={formData.smsConsent}
                        onCheckedChange={handleCheckboxChange}
                        required
                      />
                      <div className="space-y-2">
                        <Label htmlFor="smsConsent" className="text-sm font-medium leading-relaxed cursor-pointer">
                          I consent to receive SMS communications from {site.name} regarding my driver application and employment opportunities. *
                        </Label>
                        <p className="text-xs text-gray-600">
                          Message and data rates may apply. Reply STOP to opt out or HELP for assistance. 
                          You can also contact us at {site.phone} for support.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting || !formData.smsConsent}
                      className="bg-blue-600 hover:bg-blue-700 w-full"
                      size="lg"
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                      <Truck className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Driver Benefits & Support
            </h2>
            <p className="text-lg text-gray-600">
              We invest in our drivers with comprehensive benefits and ongoing support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Health Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive medical, dental, and vision coverage for you and your family
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Paid Time Off</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Generous PTO policy with vacation days and sick leave that increases with tenure
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Safety Bonuses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Monthly and quarterly safety bonuses for accident-free driving and compliance
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Round-the-clock dispatch and roadside assistance to keep you moving safely
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Team?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Questions about driving opportunities? Our recruiting team is here to help
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href={`tel:${site.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Recruiting
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href={`mailto:${site.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}