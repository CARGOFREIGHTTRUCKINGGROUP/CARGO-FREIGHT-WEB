import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck, Mail, Phone } from 'lucide-react';
import { site } from '@/lib/config/site';

export default function PrivacyPage() {
  const lastUpdated = 'September 5, 2025';

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: {lastUpdated}</p>
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
                    <li>IP address and browser details</li>
                    <li>Pages visited and time on site</li>
                    <li>Referring website and search terms</li>
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
                <p className="text-gray-600">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Provide freight services and respond to quote requests</li>
                  <li>Process driver applications and communicate about employment</li>
                  <li>Send service updates, shipment notifications, and business communications</li>
                  <li>Improve our website, services, and customer experience</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Protect our business interests and prevent fraud</li>
                </ul>
              </CardContent>
            </Card>

            {/* SMS Communications (TCR language) */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Phone className="w-6 h-6 mr-3 text-purple-600" />
                  SMS Communications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  When you provide your mobile number and consent to receive SMS messages from us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>We’ll send informational texts about quotes, applications, shipments, and service alerts</li>
                  <li><strong>Message frequency varies</strong>; message & data rates may apply</li>
                  <li><strong>Consent is not a condition of purchase</strong></li>
                  <li>You may opt out at any time by replying <strong>STOP, STOPALL, UNSUBSCRIBE, CANCEL, END,</strong> or <strong>QUIT</strong></li>
                  <li>Reply <strong>HELP</strong> for assistance or contact us at {site.phone} or {site.email}</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>No Third-Party Marketing Sharing:</strong> We do not sell or share mobile numbers, SMS opt-in data, or consent with third parties for their marketing or promotional use. Mobile carriers are not liable for delayed or undelivered messages.
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
                  We do not sell, trade, or rent your personal information. We may share your information only:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>With service providers who support our operations (under confidentiality obligations)</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>In connection with a merger, acquisition, or business transfer</li>
                </ul>
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
                  We implement administrative, technical, and physical safeguards to protect your information, but no method of transmission or storage is 100% secure.
                </p>
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
                <p className="text-gray-600">You may be able to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Request access, correction, or deletion of your data (subject to law)</li>
                  <li>Opt out of SMS anytime via the STOP keywords above</li>
                  <li>Withdraw consent for marketing communications</li>
                </ul>
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
                  We may update this privacy policy from time to time. Material changes will be posted here with an updated date. Your continued use of our services indicates acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
