// import { Button } from "@/components/ui/button";
export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 max-w-3xl w-full">
      <div className="bg-gray-200/20 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-3 backdrop-saturate-200">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-1">
            <span className="text-lg font-bold text-slate-900">Min.ly</span>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            <a
              href="#features"
              className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
            >
              About
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 flex-1 justify-end">
            <button className="text-sm hover:cursor-pointer hover:bg-gray-200/50 px-3 py-1 rounded-md bg-transparent border-none">
              Sign In
            </button>
            <button className="bg-black text-white hover:bg-gray-600 text-sm rounded-xl hover:cursor-pointer px-3 py-1">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
