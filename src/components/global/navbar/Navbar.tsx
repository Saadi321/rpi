import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { NAV_ITEMS } from './NavbarData';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary leading-none">RPI</span>
              <span className="text-[10px] font-medium text-slate-500 tracking-widest">RAWALPINDI</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.subItems && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.subItems ? (
                  <>
                    <button
                      className="text-sm font-medium text-slate-600 hover:text-primary transition-colors flex items-center gap-1 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-100 py-2 z-[100]">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a 
                    href={item.href}
                    className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <Button size="sm" className="bg-secondary hover:bg-secondary/90">Apply Now</Button>
          </div>

          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="text-base font-medium text-slate-600 hover:text-primary py-2 border-b border-slate-50 w-full text-left flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-2">
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm text-slate-500 hover:text-primary py-1"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-slate-600 hover:text-primary py-2 border-b border-slate-50 last:border-0 block"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <Button className="w-full mt-2" onClick={() => setIsOpen(false)}>
                Apply Online
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
