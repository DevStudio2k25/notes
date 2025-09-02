'use client';

import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface AppBarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function AppBar({ isMobileMenuOpen, setIsMobileMenuOpen }: AppBarProps) {
  return (
    <div className={`bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-50 transition-transform duration-300 ${isMobileMenuOpen ? 'md:translate-y-0 -translate-y-full' : 'translate-y-0'}`}>
      <div className="flex items-center justify-between px-3 py-2">
        {/* Mobile Hamburger Button */}
        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300"
          size="sm"
        >
          <FontAwesomeIcon 
            icon={faBars} 
            className="w-4 h-4" 
          />
        </Button>

        {/* App Title */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
            <span className="text-white text-xs">📚</span>
          </div>
          <h1 className="text-base font-bold text-gray-900 dark:text-white">
            Notes
          </h1>
        </div>

        {/* Right side spacer */}
        <div className="w-10 md:w-auto">
        </div>
      </div>
    </div>
  );
}
