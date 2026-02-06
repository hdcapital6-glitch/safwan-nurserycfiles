import React from 'react';
import { Youtube, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-slate-400 font-semibold text-sm">
          © {new Date().getFullYear()} SAFWAN NURSERY
        </p>

        <div className="flex items-center gap-6 opacity-50">
           <Youtube className="w-5 h-5 hover:text-red-500 transition-colors cursor-pointer" />
           <Instagram className="w-5 h-5 hover:text-pink-600 transition-colors cursor-pointer" />
           <Facebook className="w-5 h-5 hover:text-blue-600 transition-colors cursor-pointer" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;