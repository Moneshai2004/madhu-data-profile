
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-heading font-bold text-primary dark:text-primary"
        >
          Madhu<span className="text-gray-600 dark:text-gray-300">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
          <Button asChild className="ml-4">
            <a href="/resume.pdf" download>
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-3 text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary border-b border-gray-100 dark:border-gray-800"
                  >
                    {item.name}
                  </a>
                ))}
                <Button asChild className="mt-4">
                  <a 
                    href="/resume.pdf" 
                    download 
                    onClick={() => setIsOpen(false)}
                  >
                    Resume
                  </a>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
