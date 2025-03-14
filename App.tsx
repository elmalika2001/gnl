import React from 'react';
import { Shield, Users, Target, Award, ChevronRight, Globe, Clock, FileText, Phone, Mail, MapPin, Calendar, AlertCircle, Sword, Flag } from 'lucide-react';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-gray-200 hover:text-white transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10"
    >
      {children}
    </a>
  );
}

function ServiceCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
      <Icon className="h-8 w-8 text-emerald-400 mb-4" />
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

function NewsCard({ date, title, image }: { date: string; title: string; image: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="flex items-center text-emerald-400 mb-2">
        <Calendar className="h-4 w-4 mr-2" />
        <span className="text-sm">{date}</span>
      </div>
      <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors duration-200">
        {title}
      </h4>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#0A192F]">
      {/* Header */}
      <header className="relative bg-[#0A192F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Shield className="h-10 w-10 text-emerald-400" />
              <div className="ml-3">
                <h1 className="text-white font-bold text-xl">UAE National Guard</h1>
                <p className="text-emerald-400 text-sm">حرس الإمارات الوطني</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#news">News</NavLink>
              <NavLink href="#careers">Careers</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              Emergency Contact
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579912437766-7896df6d3cd6?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#0A192F]/80 backdrop-blur-sm" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Protecting the Nation's Security and Prosperity
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              The UAE National Guard stands as a pillar of national defense, ensuring the safety and security of our nation through excellence, dedication, and unwavering commitment.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors duration-200">
                Learn More <ChevronRight className="h-5 w-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Join Our Forces
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dedicated to maintaining national security through specialized services and strategic operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Shield}
              title="National Defense"
              description="Protecting vital installations and ensuring the safety of key national infrastructure."
            />
            <ServiceCard
              icon={Users}
              title="Crisis Management"
              description="Rapid response and coordination during national emergencies and crisis situations."
            />
            <ServiceCard
              icon={Target}
              title="Strategic Operations"
              description="Planning and executing strategic operations to maintain national security."
            />
            <ServiceCard
              icon={Globe}
              title="International Cooperation"
              description="Collaborating with international partners to enhance security capabilities."
            />
            <ServiceCard
              icon={Clock}
              title="24/7 Surveillance"
              description="Continuous monitoring and protection of critical national assets."
            />
            <ServiceCard
              icon={Sword}
              title="Special Forces"
              description="Elite units trained for specialized operations and tactical responses."
            />
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-white">Latest News</h2>
            <button className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2">
              View All News <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              date="March 15, 2025"
              title="UAE National Guard Conducts Joint Exercise with International Partners"
              image="https://images.unsplash.com/photo-1579912437766-7896df6d3cd6?auto=format&fit=crop&q=80"
            />
            <NewsCard
              date="March 10, 2025"
              title="New Training Program Launched for Special Operations Units"
              image="https://images.unsplash.com/photo-1542400935-70190c63c242?auto=format&fit=crop&q=80"
            />
            <NewsCard
              date="March 5, 2025"
              title="National Guard Modernization Program Enters Next Phase"
              image="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                For inquiries, emergency situations, or general information, please don't hesitate to reach out to us through any of the following channels.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-emerald-400 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold">Emergency Hotline</h4>
                    <p className="text-gray-300">+971 800 GUARD (48273)</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-emerald-400 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">contact@uaenationalguard.ae</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-emerald-400 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold">Headquarters</h4>
                    <p className="text-gray-300">Abu Dhabi, United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10">
              <form className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#112240] text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-emerald-400" />
                <div className="ml-3">
                  <h3 className="text-white font-bold">UAE National Guard</h3>
                  <p className="text-emerald-400 text-sm">حرس الإمارات الوطني</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Protecting the nation's security and prosperity through excellence, dedication, and unwavering commitment.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Our Services</a></li>
                <li><a href="#news" className="hover:text-emerald-400 transition-colors">Latest News</a></li>
                <li><a href="#careers" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Training Programs</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Publications</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Media Center</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">Connect</h3>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2025 UAE National Guard. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;