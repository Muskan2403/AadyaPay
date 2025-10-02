import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="bg-blue-950 shadow-md sticky top-0 z-50 h-16">
      <div className="max-w-6xl mx-auto px-4 h-full flex justify-between items-center">
        
        {/* Logo + Title */}
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => navigate("/")}
        >
          <img 
            src="/logo2.jpeg"
            alt="AadyaPay Logo" 
            className="h-12 object-contain rounded-full border-2 border-white" 
          />
          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            AadyaPay
          </h1>
        </div>

        {/* Nav Links */}
        <div className="space-x-6 flex items-center h-full">
          <a 
            href="/" 
            className="text-white font-medium hover:text-gray-300 transition-colors"
          >
            Home
          </a>
          <a 
            href="/about" 
            className="text-white font-medium hover:text-gray-300 transition-colors"
          >
            About
          </a>
          <button 
            onClick={() => scrollToSection("download")} 
            className="text-white font-medium hover:text-gray-300 transition-colors"
          >
            Download
          </button>
          <button 
            onClick={() => scrollToSection("faqs")} 
            className="text-white font-medium hover:text-gray-300 transition-colors"
          >
            FAQs
          </button>
          <a 
            href="/contact" 
            className="text-white font-medium hover:text-gray-300 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
