import Link from 'next/link';
import { Truck, Phone, Mail, MapPin } from 'lucide-react';
import { site } from '@/lib/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">{site.name}</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional freight and trucking services with nationwide coverage. 
              Licensed, insured, and committed to safe, reliable transportation.
            </p>
            
            {/* NAP Information */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-gray-400 text-sm">{site.address}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a 
                    href={`tel:${site.phone}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a 
                    href={`mailto:${site.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm break-all"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/shippers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Shippers
                </Link>
              </li>
              <li>
                <Link href="/drivers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Drivers
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Credentials & Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Credentials</h3>
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">USDOT Number</p>
                <p className="font-mono text-blue-400 font-semibold">{site.usdot}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">MC Number</p>
                <p className="font-mono text-blue-400 font-semibold">{site.mc}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2 text-sm">Legal</h4>
              <ul className="space-y-1">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/sms-terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                    SMS Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} {site.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>DOT: {site.usdot}</span>
              <span>•</span>
              <span>MC: {site.mc}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}