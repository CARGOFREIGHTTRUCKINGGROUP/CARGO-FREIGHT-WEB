import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  FileText, 
  Download, 
  Clock, 
  Truck, 
  Snowflake,
  CheckCircle,
  AlertTriangle,
  Award,
  Phone,
  Mail,
  Calendar,
  Info
} from 'lucide-react';
import Link from 'next/link';
import { site } from '@/lib/config/site';

export default function SafetyPage() {
  const safetyPolicies = [
    {
      title: 'Pre-Trip Inspections',
      description: 'Comprehensive vehicle inspection procedures required before every trip',
      icon: CheckCircle,
      details: [
        'Daily Vehicle Inspection Report (DVIR) completion',
        'Brake system and tire condition checks',
        'Lights, signals, and safety equipment verification',
        'Load securement and weight distribution review'
      ]
    },
    {
      title: 'Hours of Service (HOS)',
      description: 'Strict compliance with federal driving time regulations',
      icon: Clock,
      details: [
        '11-hour driving limit within 14-hour window',
        'Mandatory 10-hour rest period between shifts',
        'Electronic Logging Device (ELD) monitoring',
        '70-hour weekly limit with 34-hour restart'
      ]
    },
    {
      title: 'Chain Laws (Seasonal)',
      description: 'Winter weather driving requirements and equipment standards',
      icon: Snowflake,
      details: [
        'Tire chain installation and inspection procedures',
        'Weather monitoring and route planning',
        'Emergency equipment and communication protocols',
        'Seasonal training and certification requirements'
      ]
    }
  ];

  const announcements = [
    {
      id: 1,
      date: '2025-01-15',
      title: 'Winter Weather Safety Reminder',
      content: 'All drivers must carry approved tire chains and emergency supplies during winter months. Review chain installation procedures before departure.',
      type: 'warning',
      priority: 'high'
    },
    {
      id: 2,
      date: '2025-01-10',
      title: 'ELD System Update Completed',
      content: 'Electronic Logging Device software has been updated across all fleet vehicles. Contact dispatch if you experience any technical issues.',
      type: 'info',
      priority: 'medium'
    },
    {
      id: 3,
      date: '2025-01-05',
      title: 'Safety Bonus Program Extended',
      content: 'Due to excellent safety performance, our quarterly safety bonus program has been extended through Q2 2025. Keep up the great work!',
      type: 'success',
      priority: 'medium'
    },
    {
      id: 4,
      date: '2024-12-20',
      title: 'Holiday Schedule Reminder',
      content: 'Office hours will be modified during the holiday period. Emergency dispatch remains available 24/7 for urgent matters.',
      type: 'info',
      priority: 'low'
    }
  ];

  const getAnnouncementIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return AlertTriangle;
      case 'success':
        return CheckCircle;
      default:
        return Info;
    }
  };

  const getAnnouncementColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'border-l-orange-500 bg-orange-50';
      case 'success':
        return 'border-l-green-500 bg-green-50';
      default:
        return 'border-l-blue-500 bg-blue-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Safety First
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our commitment to safety drives everything we do. From comprehensive training 
              to strict compliance standards, we maintain the highest safety protocols in the industry.
            </p>

            {/* USDOT/MC Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-6 py-3 text-lg">
                <Award className="w-5 h-5 mr-2" />
                USDOT: {site.usdot}
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-6 py-3 text-lg">
                <Shield className="w-5 h-5 mr-2" />
                MC: {site.mc}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & COI Section */}
      <section id="insurance" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Insurance & Coverage
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive insurance coverage for complete peace of mind
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Shield className="w-6 h-6 mr-3 text-green-600" />
                    Insurance Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">$1M</div>
                      <div className="text-sm text-gray-600">Auto Liability</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">$100K</div>
                      <div className="text-sm text-gray-600">Cargo Coverage</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      General Liability Coverage
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Workers' Compensation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Environmental Liability
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <FileText className="w-6 h-6 mr-3 text-blue-600" />
                    Certificate of Insurance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Need a Certificate of Insurance (COI) for your shipment? 
                    We can provide current insurance certificates quickly and easily.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Same-day COI processing
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Additional insured options available
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Electronic delivery via email
                    </div>
                  </div>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact">
                      <FileText className="w-4 h-4 mr-2" />
                      Request COI
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Policies Section */}
      <section id="policies" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Safety Policies & Procedures
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive safety policies ensure compliance and protect our drivers, 
              cargo, and the public
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {safetyPolicies.map((policy, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <policy.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{policy.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {policy.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {policy.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Safety Documents & Resources
              </h2>
              <p className="text-lg text-gray-600">
                Download important safety documents and training materials
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">Driver Handbook</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Comprehensive safety policies and procedures manual
                  </CardDescription>
                  <Button variant="outline" className="w-full" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">Coming Soon</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Pre-Trip Checklist</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Daily vehicle inspection checklist and procedures
                  </CardDescription>
                  <Button variant="outline" className="w-full" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">Coming Soon</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">Emergency Procedures</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Emergency response and incident reporting guidelines
                  </CardDescription>
                  <Button variant="outline" className="w-full" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">Coming Soon</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Safety Announcements
              </h2>
              <p className="text-lg text-gray-600">
                Important updates and reminders for our drivers and partners
              </p>
            </div>

            <div className="space-y-6">
              {announcements.map((announcement) => {
                const IconComponent = getAnnouncementIcon(announcement.type);
                return (
                  <Card key={announcement.id} className={`border-l-4 ${getAnnouncementColor(announcement.type)} hover:shadow-lg transition-all duration-300`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <IconComponent className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{announcement.title}</CardTitle>
                            <div className="flex items-center space-x-2 mt-1">
                              <Calendar className="h-4 w-4 text-gray-500" />
                              <span className="text-sm text-gray-500">
                                {new Date(announcement.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge 
                          variant={announcement.priority === 'high' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {announcement.priority.toUpperCase()}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{announcement.content}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Safety Questions or Concerns?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our safety team is available to address any questions or concerns
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
                  Email Safety Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}