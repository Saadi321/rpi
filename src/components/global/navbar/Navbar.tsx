import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, ChevronDown, Bell, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NAV_ITEMS } from './NavbarData';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setOpenDropdown("About");
      } else {
        setOpenDropdown(null);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href?: string) => {
    if (!href) return;

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
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

          {/* DESKTOP MENU */}
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
                      onClick={() => handleNavClick(item.href)}
                      className="text-sm font-medium text-slate-600 hover:text-primary transition-colors flex items-center gap-1 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>

                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-100 py-2 z-[100]">
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => {
                              handleNavClick(subItem.href);
                              setOpenDropdown(null);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}

            {/* USER ICON WITH ACCENT BORDER */}
            <button
              onClick={() => navigate('/login')}
              className="p-2 rounded-full border-2 border-secondary hover:bg-slate-100 text-slate-600 hover:text-primary transition-colors"
              aria-label="User Login"
            >
              <User className="w-5 h-5" />
            </button>

            {/* BELL ICON */}
            <button
              onClick={() => navigate('/announcements')}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-600 hover:text-primary transition-colors relative group"
              aria-label="Announcements"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>

            <Button
              size="sm"
              className="bg-secondary hover:bg-secondary/90"
              onClick={() => navigate('/admission')}
            >
              Apply Now
            </Button>
          </div>

          {/* ⭐ MOBILE LEFT-SIDE BELL ICON ⭐ */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => navigate('/announcements')}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-600 hover:text-primary transition-colors relative"
              aria-label="Announcements"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="p-2 text-slate-600 hover:text-primary"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN */}
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
                        onClick={() => {
                          if (item.href && !item.href.startsWith('#')) {
                            handleNavClick(item.href);
                            setIsOpen(false);
                          } else {
                            setOpenDropdown(openDropdown === item.label ? null : item.label);
                          }
                        }}
                        className="text-base font-medium text-slate-600 hover:text-primary py-2 border-b border-slate-50 w-full text-left flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-2">
                          {item.subItems.map((subItem) => (
                            <button
                              key={subItem.label}
                              onClick={() => {
                                handleNavClick(subItem.href);
                                setIsOpen(false);
                              }}
                              className="block text-sm text-slate-500 hover:text-primary py-1 w-full text-left"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        handleNavClick(item.href);
                        setIsOpen(false);
                      }}
                      className="text-base font-medium text-slate-600 hover:text-primary py-2 border-b border-slate-50 last:border-0 block w-full text-left"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

              {/* MOBILE LOGIN BUTTON */}
              <Button
                className="w-full"
                onClick={() => {
                  navigate('/login');
                  setIsOpen(false);
                }}
              >
                Login
              </Button>

              {/* MOBILE APPLY ONLINE BUTTON */}
              <Button
                className="w-full mt-2"
                onClick={() => {
                  navigate('/admission');
                  setIsOpen(false);
                }}
              >
                Apply Online
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
