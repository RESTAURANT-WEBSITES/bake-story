import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Delivery", href: "#delivery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* SVG Gooey Filter */}
      <svg className="hidden absolute">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="relative flex items-center justify-between">
            {/* Gooey background blob */}
            <div className="absolute inset-0 -mx-4 -my-1 bg-background/80 backdrop-blur-xl rounded-2xl nav-gooey-blob shadow-bakery" />

            <div className="relative z-10 flex items-center gap-3">
              <img src="/logo.png" alt="BakeStory Logo" className="h-20 md:h-24 w-auto drop-shadow-md -my-4 md:-my-6" />
              <span className="text-2xl font-display font-bold text-gradient-warm">BakeStory</span>
            </div>

            {/* Desktop nav */}
            <div className="relative z-10 hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary rounded-xl transition-colors duration-200 hover:bg-primary/5"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => window.open("https://wa.me/919961155166?text=Hi%2C%20I'd%20like%20to%20place%20an%20order%20from%20BakeStory.", "_blank")}
                className="ml-2 px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-xl shadow-bakery hover:shadow-bakery-lg transition-all duration-300 hover:scale-105"
              >
                Order Now
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-10 md:hidden p-2 text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mx-4 mt-2 p-4 bg-background/95 backdrop-blur-xl rounded-2xl shadow-bakery-lg"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => window.open("https://wa.me/919961155166?text=Hi%2C%20I'd%20like%20to%20place%20an%20order%20from%20BakeStory.", "_blank")}
                className="w-full mt-2 px-5 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-xl"
              >
                Order Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
