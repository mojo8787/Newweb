import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 border-b border-[#00f7ff]/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#00f7ff] to-[#6a00ff] bg-clip-text text-transparent">
          Webna Labs
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-[#00f7ff]"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-[#00f7ff]"
          >
            Services
          </Button>
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-[#00f7ff]"
          >
            About
          </Button>
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-[#00f7ff]"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
