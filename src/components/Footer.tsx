
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold font-heading">
              Madhu<span className="text-primary">.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              Aspiring Data Scientist & Web Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-6 mb-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a 
                href="mailto:madhus272004@gmail.com" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Email
              </a>
            </div>
            
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
              © {currentYear} Made with <Heart size={14} className="mx-1 text-red-500" /> by Madhumitha S
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
