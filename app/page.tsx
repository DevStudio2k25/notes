import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faJs } from '@fortawesome/free-brands-svg-icons';
import { faCode, faRocket, faDownload, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const languages = [
  { 
    id: 'java', 
    name: 'Java', 
    icon: faJava, 
    gradient: 'from-orange-400 via-red-400 to-red-600',
    description: 'Enterprise-grade programming with robust OOP concepts',
    pdfCount: 4,
    topics: ['Basics', 'OOP', 'Collections', 'Exception Handling']
  },
  { 
    id: 'python', 
    name: 'Python', 
    icon: faPython, 
    gradient: 'from-blue-400 via-blue-500 to-green-500',
    description: 'Versatile language for web development and data science',
    pdfCount: 4,
    topics: ['Fundamentals', 'Data Structures', 'Django', 'Machine Learning']
  },
  { 
    id: 'javascript', 
    name: 'JavaScript', 
    icon: faJs, 
    gradient: 'from-yellow-400 via-orange-400 to-orange-600',
    description: 'Dynamic web development and modern frameworks',
    pdfCount: 4,
    topics: ['Essentials', 'DOM', 'Async Programming', 'React.js']
  },
  { 
    id: 'cpp', 
    name: 'C++', 
    icon: faCode, 
    gradient: 'from-purple-400 via-purple-500 to-blue-600',
    description: 'High-performance programming and system development',
    pdfCount: 4,
    topics: ['Fundamentals', 'OOP', 'STL', 'Memory Management']
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-3xl"></div>
        <div className="relative px-4 py-8 mx-auto max-w-6xl">
          <div className="text-center mb-8 px-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:text-blue-400 dark:bg-blue-900/30">
              <FontAwesomeIcon icon={faRocket} className="w-4 h-4" />
              Programming Resources Hub
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Master Programming Languages
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Download comprehensive programming notes, tutorials, and guides. 
              Everything you need to excel in your coding journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBookOpen} className="w-4 h-4 text-blue-500" />
                <span>16 PDF Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faDownload} className="w-4 h-4 text-green-500" />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Updated Content</span>
              </div>
            </div>
          </div>

          {/* Language Cards Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {languages.map((language) => (
              <Card key={language.id} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${language.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative pb-2 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${language.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <FontAwesomeIcon icon={language.icon} className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">{language.pdfCount}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">PDFs</div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {language.name}
                  </CardTitle>
                  <CardDescription className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {language.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative pt-0 p-3">
                  <div className="mb-3">
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Topics:</div>
                    <div className="flex flex-wrap gap-1">
                      {language.topics.map((topic, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="w-full group-hover:scale-105 transition-all duration-300 shadow-md" size="sm">
                    <Link href={`/notes/${language.id}`}>
                      <FontAwesomeIcon icon={faBookOpen} className="w-3 h-3 mr-2" />
                      Explore {language.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
