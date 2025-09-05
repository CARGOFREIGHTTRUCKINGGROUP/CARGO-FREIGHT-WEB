'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Truck, 
  MapPin, 
  Clock, 
  Shield, 
  CheckCircle, 
  Phone, 
  Mail,
  Navigation,
  BarChart3,
  Award,
  DollarSign,
  Users,
  FileText
} from 'lucide-react';
import Link from 'next/link';
import { site } from '@/lib/config/site';
import { useState } from 'react';

export default function ShippersPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    commodity: '',
    weight: '',
    pickupDate: '',
    pickupTime: '',
    specialNotes: '',
    smsConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
        description: "Please consent to SMS communications to proceed with your quote request.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/forms/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Submitted",
          description: "We'll contact you within 24 hours with a competitive quote.",
        });
        
        // Reset form
        setFormData({
          company: '',
          contactName: '',
          email: '',
          phone: '',
          origin: '',
          destination: '',
          commodity: '',
          weight: '',
          pickupDate: '',
          pickupTime: '',
          specialNotes: '',
          smsConsent: false
        });
      } else {
        throw new Error('Failed to submit quote request');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your quote request. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const valueProps = [
    {
      icon: DollarSign,
      title: 'Competitive Rates',
      description: 'Market-leading pricing with transparent cost structure and no hidden fees',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Clock,
      title: 'On-Time Performance',
      description: '99.2% on-time delivery rate with proactive communication and contingency planning',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Shield,
      title: 'Full Insurance Coverage',
      description: 'Comprehensive cargo and liability insurance for complete peace of mind',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Tracking',
      description: 'Advanced GPS tracking with live updates and customer portal access',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 customer service with experienced logistics professionals',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Award,
      title: 'DOT Compliant',
      description: 'Fully licensed and compliant with all federal transportation regulations',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const serviceTypes = [
    {
      type: 'Dry Van',
      description: 'Standard enclosed trailers for general freight and non-perishable goods',
      typicalLanes: 'Regional and long-haul routes across all 48 states',
      trailerType: '53\' dry van trailers',
      notes: 'Most common freight type, flexible scheduling'
    },
    {
      type: 'Reefer',
      description: 'Temperature-controlled transportation for perishable goods',
      typicalLanes: 'Food distribution centers, pharmaceutical routes',
      trailerType: '53\' refrigerated trailers',
      notes: 'Temperature monitoring, food-grade certified'
    },
    {
      type: 'Power-Only',
      description: 'Tractor service for customer-owned or leased trailers',
      typicalLanes: 'Drop yards, distribution centers, customer facilities',
      trailerType: 'Customer-provided trailers',
      notes: 'Flexible capacity, reduced deadhead miles'
    },
    {
      type: 'Expedited',
      description: 'Time-critical shipments with priority handling and delivery',
      typicalLanes: 'Emergency freight, just-in-time manufacturing',
      trailerType: 'Various based on cargo requirements',
      notes: 'Team drivers available, 24/7 dispatch support'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                DOT: {site.usdot} | MC: {site.mc}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reliable Freight Solutions
              <span className="block text-blue-200">for Your Business</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Partner with a trusted freight carrier that delivers on time, every time. 
              Get competitive rates and exceptional service for all your shipping needs.
            </p>
          </div>
        </div>
      </section>

      {/* Value Propositions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Shippers Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference of working with a professional freight partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 ${prop.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <prop.icon className={`h-6 w-6 ${prop.color}`} />
                  </div>
                  <CardTitle className="text-xl">{prop.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    {prop.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Your Quote
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll provide a competitive quote within 24 hours
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Quote Request Form</CardTitle>
                <CardDescription>
                  Please provide detailed information about your shipment for an accurate quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Company Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Full Name"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>

                  {/* Shipment Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="origin">Origin (City, State) *</Label>
                      <Input
                        id="origin"
                        name="origin"
                        value={formData.origin}
                        onChange={handleInputChange}
                        required
                        placeholder="Chicago, IL"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination (City, State) *</Label>
                      <Input
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        required
                        placeholder="Atlanta, GA"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="commodity">Commodity *</Label>
                      <Input
                        id="commodity"
                        name="commodity"
                        value={formData.commodity}
                        onChange={handleInputChange}
                        required
                        placeholder="Electronics, Food Products, etc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (lbs) *</Label>
                      <Input
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        required
                        placeholder="45000"
                      />
                    </div>
                  </div>

                  {/* Pickup Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="pickupDate">Pickup Date *</Label>
                      <Input
                        id="pickupDate"
                        name="pickupDate"
                        type="date"
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickupTime">Pickup Time</Label>
                      <Input
                        id="pickupTime"
                        name="pickupTime"
                        type="time"
                        value={formData.pickupTime}
                        onChange={handleInputChange}
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="specialNotes">Special Notes</Label>
                    <Textarea
                      id="specialNotes"
                      name="specialNotes"
                      value={formData.specialNotes}
                      onChange={handleInputChange}
                      placeholder="Any special handling requirements, delivery instructions, or additional information..."
                      rows={4}
                    />
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
                          I consent to receive SMS communications from {site.name} regarding my quote request and shipment updates. *
                        </Label>
                        <p className="text-xs text-gray-600">
                          Message and data rates may apply. Reply STOP to opt out or HELP for assistance. 
                          You can also contact us at {site.phone} for support.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting || !formData.smsConsent}
                      className="bg-blue-600 hover:bg-blue-700 flex-1"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get Quote'}
                      <Truck className="w-4 h-4 ml-2" />
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link href="/contact">
                        <FileText className="w-4 h-4 mr-2" />
                        Request COI
                      </Link>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Types Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Types & Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Detailed breakdown of our transportation services and capabilities
            </p>
          </div>

          {/* Mobile-First Responsive Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Typical Lanes</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Trailer Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {serviceTypes.map((service, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Badge variant="outline" className="font-semibold">
                            {service.type}
                          </Badge>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{service.description}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{service.typicalLanes}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{service.trailerType}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{service.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4 p-4">
              {serviceTypes.map((service, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{service.type}</CardTitle>
                      <Badge variant="outline">{service.trailerType}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Description</p>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Typical Lanes</p>
                      <p className="text-sm text-gray-600">{service.typicalLanes}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Notes</p>
                      <p className="text-sm text-gray-600">{service.notes}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our logistics experts are standing by to help with your freight needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href={`tel:${site.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {site.phone}
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