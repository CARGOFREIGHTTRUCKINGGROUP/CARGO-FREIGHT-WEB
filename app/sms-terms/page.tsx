import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Phone, AlertTriangle, Shield, HelpCircle, StopCircle, Mail } from 'lucide-react';
import { site } from '@/lib/config/site';

export default function SmsTermsPage() {
  const lastUpdated = 'September 5, 2025';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              SMS Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Terms and conditions for SMS communications from {site.name}
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* SMS Program Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageSquare className="w-6 h-6 mr-3 text-blue-600" />
                  SMS Program Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  {site.name} offers SMS text messaging services to provide you with important updates
                  about your freight shipments, quote requests, driver applications, and other
                  business-related communications.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-blue-800">
                    <strong>Consent Required:</strong> You must explicitly opt in to receive SMS messages from us.
                  </p>
                  <p className="text-sm text-blue-800">
                    <strong>Consent is not a condition of purchase.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Message Types */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Types of Messages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">We may send you the following types of SMS messages:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Quote Updates:</strong> Status updates on your freight quote requests</li>
                  <li><strong>Shipment Notifications:</strong> Pickup confirmations, delivery updates, tracking</li>
                  <li><strong>Driver Communications:</strong> Application status and employment info</li>
                  <li><strong>Service Alerts:</strong> Delays, schedule changes, or service issues</li>
                  <li><strong>Account Information:</strong> Security alerts and account notices</li>
                </ul>
              </CardContent>
            </Card>

            {/* Opt-Out Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <StopCircle className="w-6 h-6 mr-3 text-red-600" />
                  How to Opt Out (STOP)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">You can stop receiving SMS messages from us at any time:</p>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3">To Stop SMS Messages:</h3>
                  <ul className="list-disc list-inside space-y-2 text-red-700 ml-4">
                    <li><strong>Reply with any of these keywords:</strong> STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, or QUIT</li>
                    <li>You will receive a confirmation message that you have been unsubscribed</li>
                    <li>You will no longer receive SMS messages from {site.name}</li>
                    <li>To re-subscribe, you will need to opt in again</li>
                  </ul>
                </div>
                <p className="text-gray-600">
                  <strong>Alternative:</strong> You can also contact us at {site.phone} or {site.email} to request removal.
                </p>
              </CardContent>
            </Card>

            {/* Help Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <HelpCircle className="w-6 h-6 mr-3 text-green-600" />
                  Getting Help (HELP)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">If you need assistance with our SMS program:</p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">For Help:</h3>
                  <ul className="list-disc list-inside space-y-2 text-green-700 ml-4">
                    <li><strong>Reply HELP</strong> to any SMS message from us</li>
                    <li>You will receive our support contact info and program basics</li>
                    <li>Call us at <a href={`tel:${site.phone}`} className="underline">{site.phone}</a></li>
                    <li>Email us at <a href={`mailto:${site.email}`} className="underline">{site.email}</a></li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Third-Party Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="w-6 h-6 mr-3 text-purple-600" />
                  Privacy and Third-Party Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-3">No Third-Party Marketing Sharing</h3>
                  <p className="text-purple-700">
                    <strong>We do not sell or share mobile numbers, SMS opt-in data, or consent with third parties for their marketing or promotional use.</strong>
                  </p>
                </div>
                <p className="text-gray-600">We may share your information only with:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Service providers who help us deliver SMS messages (under strict privacy agreements)</li>
                  <li>Legal authorities when required by law or to protect our legitimate business interests</li>
                  <li>Business partners directly involved in your freight transaction (with your consent)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Message Frequency and Costs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <AlertTriangle className="w-6 h-6 mr-3 text-orange-600" />
                  Message Frequency and Costs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Message Frequency</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Quote requests: 1–3 messages per inquiry</li>
                      <li>Active shipments: 2–5 messages per load</li>
                      <li>Driver applications: 1–4 messages during process</li>
                      <li>Service alerts: As needed for important updates</li>
                    </ul>
                    <p className="text-gray-600 mt-2"><strong>Message frequency varies based on activity.</strong></p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Message Costs</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Message and data rates may apply</li>
                      <li>Costs depend on your mobile carrier plan</li>
                      <li>We do not charge for SMS messages</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carrier Liability Disclaimer */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Carrier Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mobile carriers are not liable for delayed or undelivered messages.
                </p>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Questions About SMS Terms?</h3>
              <p className="text-blue-100 mb-6">We’re here to help with any questions about our SMS communications.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
