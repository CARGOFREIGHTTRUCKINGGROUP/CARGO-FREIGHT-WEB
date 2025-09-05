'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building,
  MessageSquare,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { site } from '@/lib/config/site';
import { useState } from 'react';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    smsConsent: false,
    honeypot: '' // Spam protection field
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
    
    // Honeypot spam protection
    if (formData.honeypot) {
      // Silent fail for spam bots
      return;
    }

    if (!formData.smsConsent) {
      toast({
        title: "SMS Consent Required",
        description: "Please consent to SMS communications to proceed with your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/forms/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          smsConsent: formData.smsConsent
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us! We'll respond within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          smsConsent: false,
          honeypot: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Message Failed",
        description: "There was an error sending your message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get in touch with our team for freight quotes, driver opportunities, 
              or any questions about our transportation services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our team is ready to assist you with all your freight and transportation needs. 
                  Contact us today for personalized service and competitive rates.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <Link href={`tel:${site.phone}`} className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          Phone
                        </h3>
                        <p className="text-blue-600 font-medium">{site.phone}</p>
                        <p className="text-sm text-gray-500">Available 24/7 for urgent freight needs</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <Link href={`mailto:${site.email}`} className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                          Email
                        </h3>
                        <p className="text-green-600 font-medium break-all">{site.email}</p>
                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <Link 
                      href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <MapPin className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                          Address
                        </h3>
                        <p className="text-red-600 font-medium">{site.address}</p>
                        <p className="text-sm text-gray-500">Click to view on Google Maps</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Business Hours</h3>
                        <p className="text-purple-600 font-medium">24/7 Dispatch Available</p>
                        <p className="text-sm text-gray-500">Office: Monday-Friday 8AM-6PM EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Building className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                      <p className="text-blue-800 font-semibold">Interactive Map</p>
                      <p className="text-blue-600 text-sm">Cincinnati, OH Office Location</p>
                      <Link 
                        href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm underline mt-2 inline-block"
                      >
                        View on Google Maps
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageSquare className="w-6 h-6 mr-2 text-blue-600" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field for spam protection - hidden from users */}
                    <div className="hidden">
                      <Label htmlFor="honeypot">Leave this field empty</Label>
                      <Input
                        id="honeypot"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleInputChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Full Name"
                      />
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

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us about your freight needs, questions, or how we can help you..."
                        rows={6}
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
                            I consent to receive SMS communications from {site.name} regarding my inquiry and follow-up communications. *
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
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-gray-600">
              Choose the service that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Shippers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Need to ship freight? Get competitive quotes and reliable service.
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/shippers">
                    Get Quote
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Drivers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Join our team of professional drivers with competitive pay and benefits.
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/drivers">
                    Apply Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>General Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Have questions about our services or need assistance?
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#contact-form">
                    Contact Us
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}