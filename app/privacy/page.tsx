import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck, Mail, Phone } from 'lucide-react';
import { site } from '@/lib/config/site';
import Link from 'next/link';

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2025';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                  <p className="text-gray-600 mb-3">
                    When you use our services, request quotes, or apply for employment, we may collect:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                    <li>Name, email address, and phone number</li>
                    <li>Company information and business details</li>
                    <li>Shipping addresses and freight details</li>
                    <li>Employment history and qualifications (for driver applications)</li>
                    <li>Communication preferences and consent records</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-600 mb-3">
                    We may automatically collect certain information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website and search terms used</li>
                    <li>Device type and operating system</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <UserCheck className="w-6 h-6 mr-3 text-green-600" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>To provide freight transportation services and respond to quote requests</li>
                  <li>To process driver applications and conduct employment-related communications</li>
                  <li>To send service updates, shipment notifications, and important business communications</li>
                  <li>To improve our website, services, and customer experience</li>
                  <li>To comply with legal obligations and regulatory requirements</li>
                  <li>To protect our business interests and prevent fraud</li>
                </ul>
              </CardContent>
            </Card>

            {/* SMS Communications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Phone className="w-6 h-6 mr-3 text-purple-600" />
                  SMS Communications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  When you provide consent to receive SMS communications from us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>We will send you updates about your quote requests, applications, or shipments</li>
                  <li>Message and data rates may apply based on your mobile carrier plan</li>
                  <li>You can opt out at any time by replying STOP to any message</li>
                  <li>Reply HELP for assistance or contact us at {site.phone}</li>
                  <li><strong>We do not share your mobile number with third parties for marketing purposes</strong></li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>No Third-Party Sharing:</strong> Your mobile consent and phone number are never 
                    shared with third-party marketing companies or used for purposes other than our direct 
                    business communications with you.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Lock className="w-6 h-6 mr-3 text-red-600" />
                  Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>With service providers who assist us in operating our business (under strict confidentiality agreements)</li>
                  <li>When required by law, regulation, or legal process</li>
                  <li>To protect our rights, property, or safety, or that of our customers or others</li>
                  <li>In connection with a business transfer, merger, or acquisition</li>
                </ul>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Your mobile consent is never shared with third-party marketing companies.</strong> 
                    We respect your privacy and use your contact information solely for our direct business purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Lock className="w-6 h-6 mr-3 text-orange-600" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Secure data transmission using industry-standard encryption</li>
                  <li>Access controls limiting who can view your information</li>
                  <li>Regular security assessments and updates</li>
                  <li>Secure storage of physical and electronic records</li>
                  <li>Employee training on data protection and privacy practices</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <UserCheck className="w-6 h-6 mr-3 text-indigo-600" />
                  Your Rights and Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Request access to the personal information we have about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information (subject to legal requirements)</li>
                  <li>Opt out of SMS communications at any time by replying STOP</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Mail className="w-6 h-6 mr-3 text-blue-600" />
                  Contact Us About Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If you have questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href={`tel:${site.phone}`} className="text-blue-600 hover:text-blue-700">
                        {site.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href={`mailto:${site.email}`} className="text-blue-600 hover:text-blue-700 break-all">
                        {site.email}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Policy Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time to reflect changes in our practices 
                  or applicable laws. We will notify you of any material changes by posting the updated 
                  policy on our website and updating the "Last updated" date. Your continued use of our 
                  services after any changes indicates your acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}