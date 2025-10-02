import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer - White Background */}
      <div className="bg-gray-900 text-white py-0.5"></div>
      <div className="bg-white text-gray-500 py-6 text-center text-sm border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 ">
          
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">AadyaPay - Recharge App</h2>
            <p className="text-gray-700 font-medium">
              Our user-friendly interface allows you to easily recharge your mobile phones, DTH services, pay bills, book travel, and access city services — all from one secure app.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Important Links</h2>
            <ul className="space-y-2 text-gray-700 font-medium">
              <li>
                <Link to="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600 transition">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-blue-600 transition">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Details</h2>
            <div className="space-y-2 text-gray-700 font-medium">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-900" />
                <span className="w-[160px]">Jankapur, Asifabad</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-blue-900" />
                <span className="w-[150px]">support@aadyapay.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-blue-900" />
                <span className="w-[150px]">+91 83330 13869</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright - Gray Background */}
      <div className="bg-gray-900 text-white py-6 text-center text-sm border-t border-gray-300">
        <p>© {new Date().getFullYear()} AadyaPay. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
