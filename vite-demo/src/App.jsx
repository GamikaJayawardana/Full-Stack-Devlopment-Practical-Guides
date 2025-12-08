import React, { useState } from 'react';
import { 
  Search, Heart, ShoppingCart, User, 
  MapPin, Phone, Mail, Facebook, 
  Instagram, Twitter, Youtube, ChevronDown, 
  Leaf, Utensils, ShieldCheck, Truck, 
  Star, Plus, Minus, Send
} from 'lucide-react';

// --- Components ---

const TopBar = () => (
  <div className="bg-[#1a4d2e] text-white py-2 text-xs">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex gap-4">
        <span className="flex items-center gap-1"><Phone size={14} /> +94 76 123 4567</span>
        <span className="flex items-center gap-1"><Mail size={14} /> info@harvestlink.lk</span>
      </div>
      <div className="flex gap-3">
        <Facebook size={14} />
        <Instagram size={14} />
        <Twitter size={14} />
        <Youtube size={14} />
      </div>
    </div>
  </div>
);

const Navbar = () => (
  <header className="bg-white shadow-sm sticky top-0 z-50">
    <TopBar />
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-[#1a4d2e] flex items-center">
            <Leaf className="text-[#8cc63f] mr-1" fill="#8cc63f" />
            Harvest<span className="text-[#8cc63f]">Link</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 font-medium text-gray-700 text-sm">
          <a href="#" className="text-[#8cc63f]">Home</a>
          <a href="#" className="hover:text-[#8cc63f]">Shop</a>
          <a href="#" className="hover:text-[#8cc63f]">About</a>
          <a href="#" className="hover:text-[#8cc63f]">Contact</a>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 max-w-md w-full relative">
          <div className="flex border border-gray-300 rounded-full overflow-hidden">
            <button className="bg-[#1a4d2e] text-white px-4 py-2 text-sm flex items-center gap-1">
              All Categories <ChevronDown size={14} />
            </button>
            <input 
              type="text" 
              placeholder="Search..." 
              className="flex-1 px-4 py-2 outline-none text-sm"
            />
            <button className="pr-4 text-gray-500">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-4 text-[#1a4d2e]">
          <Heart className="cursor-pointer hover:text-[#8cc63f]" />
          <ShoppingCart className="cursor-pointer hover:text-[#8cc63f]" />
          <User className="cursor-pointer hover:text-[#8cc63f]" />
        </div>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative h-[500px] w-full bg-gray-100">
    {/* Placeholder for the Banner Image */}
    <img 
      src="https://images.unsplash.com/photo-1595116701556-9b76eb1f32de?q=80&w=2070&auto=format&fit=crop" 
      alt="Farmer in field" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-xl text-white">
          <h2 className="text-yellow-400 font-semibold mb-2">CONNECTING</h2>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            LOCAL FARMS <span className="font-light">WITH</span><br />
            LOCAL BUSINESSES
          </h1>
          <p className="mb-8 text-gray-200">Discover Fresh, Local Produce<br />Directly From The Source</p>
          <button className="bg-[#8cc63f] text-[#1a4d2e] px-8 py-3 rounded-full font-bold hover:bg-[#7ab52b] transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const steps = [
    { icon: <Leaf size={32} />, title: "Farmers List Available Harvests" },
    { icon: <Utensils size={32} />, title: "Businesses Discover & Order" },
    { icon: <ShieldCheck size={32} />, title: "Secure Transaction Via Gateway" },
    { icon: <Truck size={32} />, title: "Enjoy Fresh Local Delivery" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#1a4d2e] mb-2">"Seamless Sourcing, Freshly Delivered."</h2>
        <p className="text-gray-500 mb-12">Here's How HarvestLink Brings Farm-Fresh Produce<br/>Directly To Your Business, Simply And Securely</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="border border-green-200 rounded-lg p-8 flex flex-col items-center hover:shadow-lg transition">
              <div className="text-[#1a4d2e] mb-4">{step.icon}</div>
              <p className="font-semibold text-gray-700 w-2/3">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = () => (
  <div className="bg-white rounded-lg p-4 hover:shadow-xl transition border border-gray-100 group">
    <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gray-100">
      <img 
        src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1000&auto=format&fit=crop" 
        alt="Tomato" 
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />
    </div>
    <div className="text-center">
      <h3 className="text-lg font-medium text-gray-600">Tomato</h3>
      <p className="text-gray-400 text-xs mb-1">10KG SOLD <span className="text-[#1a4d2e] font-bold text-lg">LKR 300</span> PER 1KG</p>
      <div className="flex justify-center text-yellow-400 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
      </div>
      <button className="border border-[#1a4d2e] text-[#1a4d2e] px-6 py-1 rounded-full text-sm hover:bg-[#1a4d2e] hover:text-white transition">
        Buy Now
      </button>
    </div>
  </div>
);

const Products = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-[#1a4d2e] mb-8">"We Love Trend"</h2>
      
      <div className="flex justify-center gap-4 mb-10">
        <button className="bg-gray-200 px-6 py-1 rounded-full text-sm font-medium hover:bg-[#1a4d2e] hover:text-white transition">Featured</button>
        <button className="bg-[#1a4d2e] text-white px-6 py-1 rounded-full text-sm font-medium">Latest</button>
        <button className="bg-gray-200 px-6 py-1 rounded-full text-sm font-medium hover:bg-[#1a4d2e] hover:text-white transition">Popular</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
        {[1, 2, 3, 4, 5, 6].map((item) => <ProductCard key={item} />)}
      </div>

      <button className="bg-[#8cc63f] text-[#1a4d2e] px-8 py-3 rounded-full font-bold hover:bg-[#7ab52b] transition">
        Shop More
      </button>
    </div>
  </section>
);

const FAQItem = ({ question, isOpen, onClick }) => (
  <div className="mb-4 border border-gray-300 rounded-lg overflow-hidden">
    <button 
      className="w-full flex justify-between items-center p-4 bg-white text-left"
      onClick={onClick}
    >
      <span className="font-medium text-gray-700 text-sm md:text-base">{question}</span>
      <div className={`p-1 rounded bg-[#1a4d2e] text-white`}>
        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
      </div>
    </button>
    {isOpen && (
      <div className="p-4 bg-gray-50 text-sm text-gray-600 border-t">
        Here is how HarvestLink brings farm-fresh produce directly to your business, simply and securely. HarvestLink connects local farmers to businesses efficiently.
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-[#1a4d2e] text-center mb-10">"Got Questions? We've Got You Covered"</h2>
        
        {[1, 2, 3, 4, 5].map((_, index) => (
          <FAQItem 
            key={index} 
            question="Here's How HarvestLink Brings Farm-Fresh Produce Directly To Your Business, Simply And Securely."
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
        <div className="p-8 text-center">
           <h2 className="text-2xl font-bold text-[#1a4d2e] mb-8">"Have questions? Feel free to reach out"</h2>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Image Side */}
          <div className="w-full md:w-1/2 h-80 md:h-auto relative">
             <img 
              src="https://images.unsplash.com/photo-1625246333195-58f214f7758c?q=80&w=2000&auto=format&fit=crop" 
              alt="Man with phone in field" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Side */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name *" className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#1a4d2e]" />
              <input type="email" placeholder="Your Email *" className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#1a4d2e]" />
              <input type="tel" placeholder="Phone Number *" className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#1a4d2e]" />
              <textarea placeholder="Enter Your Message" rows={4} className="w-full p-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-[#1a4d2e] resize-none"></textarea>
              
              <button className="w-full bg-[#1a4d2e] text-white py-3 rounded-lg font-bold hover:bg-[#143d24] transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1a4d2e] text-white py-12 border-t border-[#8cc63f]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="text-2xl font-bold mb-4 flex items-center">
            <Leaf className="text-[#8cc63f] mr-1" fill="#8cc63f" />
            Harvest<span className="text-[#8cc63f]">Link</span>
          </div>
          <p className="text-sm text-gray-300">
            We connect local farmers with businesses to ensure fresh, high-quality produce with secure transactions.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold mb-4 text-[#8cc63f]">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2"><MapPin size={16} /> 123 Farm Road, Colombo</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +94 76 123 4567</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@harvestlink.lk</li>
          </ul>
        </div>

        <div>
           <h3 className="font-bold mb-4 text-[#8cc63f]">Links</h3>
           <ul className="text-sm text-gray-300 space-y-2">
             <li><a href="#" className="hover:text-[#8cc63f]">Home</a></li>
             <li><a href="#" className="hover:text-[#8cc63f]">Shop</a></li>
             <li><a href="#" className="hover:text-[#8cc63f]">About Us</a></li>
             <li><a href="#" className="hover:text-[#8cc63f]">Contact</a></li>
           </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-[#8cc63f]">Newsletter</h3>
          <div className="flex bg-[#143d24] rounded overflow-hidden border border-gray-600">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent px-3 py-2 text-sm outline-none w-full text-white placeholder-gray-400"
            />
            <button className="bg-white px-3">
              <Send size={16} className="text-[#1a4d2e]" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>Copyright © 2025 HarvestLink. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Facebook size={18} className="hover:text-[#8cc63f] cursor-pointer" />
          <Instagram size={18} className="hover:text-[#8cc63f] cursor-pointer" />
          <Twitter size={18} className="hover:text-[#8cc63f] cursor-pointer" />
          <Youtube size={18} className="hover:text-[#8cc63f] cursor-pointer" />
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}