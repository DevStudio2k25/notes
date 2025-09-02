'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faJs } from '@fortawesome/free-brands-svg-icons';
import { faCode, faHome, faChartLine, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';

const languages = [
  { id: 'java', name: 'Java', icon: faJava, gradient: 'from-orange-400 via-red-400 to-red-600', color: 'text-orange-500' },
  { id: 'python', name: 'Python', icon: faPython, gradient: 'from-blue-400 via-blue-500 to-green-500', color: 'text-blue-500' },
  { id: 'javascript', name: 'JavaScript', icon: faJs, gradient: 'from-yellow-400 via-orange-400 to-orange-600', color: 'text-yellow-500' },
  { id: 'cpp', name: 'C++', icon: faCode, gradient: 'from-purple-400 via-purple-500 to-blue-600', color: 'text-purple-500' },
];

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, setIsMobileMenuOpen]);

  return (
    <>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "w-56 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen fixed left-0 top-0 overflow-y-auto shadow-xl transition-transform duration-300 z-40",
        "md:translate-x-0", // Always visible on desktop
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full" // Mobile toggle
      )}>
      <div className="p-3">
        {/* Close Button for Mobile */}
        <div className="md:hidden mb-3 flex justify-end">
          <Button
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            size="sm"
          >
            <FontAwesomeIcon 
              icon={faTimes} 
              className="w-4 h-4" 
            />
          </Button>
        </div>

        {/* Header */}
        <div className="mb-4">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-lg p-3 text-white mb-3 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center backdrop-blur-sm">
                  <span className="text-sm">📚</span>
                </div>
                <h2 className="text-base font-bold">
                  Programming Notes
                </h2>
              </div>
              <p className="text-xs opacity-90">
                Coding resource hub
              </p>
            </div>
          </div>
        </div>

        {/* Home Button */}
        <div className="mb-3">
          <Button
            asChild
            variant={isHomePage ? "default" : "ghost"}
            className={cn(
              "w-full justify-start h-auto p-2 transition-all duration-300 group",
              isHomePage 
                ? "shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700" 
                : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
            )}
          >
            <Link href="/">
              <div className="flex items-center gap-2 w-full">
                <div className={cn(
                  "w-6 h-6 rounded flex items-center justify-center text-sm transition-all duration-300",
                  isHomePage 
                    ? "bg-white/20 text-white" 
                    : "bg-gradient-to-r from-blue-400 to-purple-500 text-white group-hover:scale-110"
                )}>
                  <FontAwesomeIcon icon={faHome} className="w-3 h-3" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-sm">Home</div>
                  <div className="text-xs opacity-70">
                    Overview
                  </div>
                </div>
              </div>
            </Link>
          </Button>
        </div>
        
        {/* Navigation */}
        <nav className="space-y-2 mb-4">
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-2 mb-2">
            Languages
          </div>
          {languages.map((language, index) => {
            const isActive = pathname === `/notes/${language.id}`;
            
            return (
              <Button
                key={language.id}
                asChild
                variant="ghost"
                className={cn(
                  "w-full justify-start h-auto p-2 transition-all duration-300 group relative overflow-hidden",
                  isActive 
                    ? "bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 shadow-md border border-gray-200 dark:border-gray-600" 
                    : "hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 hover:shadow-md"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link href={`/notes/${language.id}`}>
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-r"></div>
                  )}
                  <div className="flex items-center gap-2 w-full">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all duration-300 shadow-sm",
                      isActive 
                        ? `bg-gradient-to-br ${language.gradient} text-white shadow-lg` 
                        : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 group-hover:scale-110 group-hover:shadow-md"
                    )}>
                      <FontAwesomeIcon icon={language.icon} className="w-4 h-4" />
                    </div>
                    <div className="text-left flex-1">
                      <div className={cn(
                        "font-medium text-sm transition-colors duration-300",
                        isActive ? language.color : "text-gray-700 dark:text-gray-200"
                      )}>
                        {language.name}
                      </div>
                      <div className="text-xs opacity-70 text-gray-500 dark:text-gray-400">
                        4 PDFs
                      </div>
                    </div>
                    {isActive && (
                      <div className="text-blue-500">
                        <FontAwesomeIcon icon={faStar} className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </Link>
              </Button>
            );
          })}
        </nav>
        
        {/* Enhanced Stats */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-3 border border-gray-200 dark:border-gray-600">
          <div className="text-center mb-2">
            <div className="flex items-center justify-center gap-2 mb-1">
              <FontAwesomeIcon icon={faChartLine} className="w-3 h-3 text-green-500" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">Total Resources</span>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              16
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">PDF Downloads</div>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Updated</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
