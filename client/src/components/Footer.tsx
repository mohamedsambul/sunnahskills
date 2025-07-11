import { Link } from "wouter";
import { Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-poppins font-bold text-2xl mb-4">Sunnah Skills</h3>
            <p className="text-gray-300 mb-4">
              Building confident, skilled, and resilient young people through traditional martial arts 
              and outdoor education.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/sunnahskills" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:mysunnahskill@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/programs/bjj" className="hover:text-white transition-colors duration-200">Brazilian Jiu-Jitsu</Link></li>
              <li><Link href="/programs/archery" className="hover:text-white transition-colors duration-200">Archery</Link></li>
              <li><Link href="/programs/outdoor-workshops" className="hover:text-white transition-colors duration-200">Outdoor Workshops</Link></li>
              <li><Link href="/programs/bullyproofing" className="hover:text-white transition-colors duration-200">Bullyproofing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/schedule" className="hover:text-white transition-colors duration-200">Schedule</Link></li>
              <li><Link href="/registration" className="hover:text-white transition-colors duration-200">Registration</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors duration-200">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Sunnah Skills. All rights reserved. Building character through traditional skills.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
