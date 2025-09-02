import { notFound } from 'next/navigation';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faJs } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

// Sample data for programming languages and their PDFs
const languageData = {
  java: {
    name: 'Java',
    icon: faJava,
    gradient: 'from-orange-400 to-red-500',
    pdfs: [
      { title: 'Java Basics', description: 'Introduction to Java programming', url: 'https://github.com/example/java-notes/raw/main/java-basics.pdf' },
      { title: 'Object Oriented Programming', description: 'OOP concepts in Java', url: 'https://github.com/example/java-notes/raw/main/java-oop.pdf' },
      { title: 'Java Collections', description: 'Working with Java Collections Framework', url: 'https://github.com/example/java-notes/raw/main/java-collections.pdf' },
      { title: 'Exception Handling', description: 'Error handling in Java', url: 'https://github.com/example/java-notes/raw/main/java-exceptions.pdf' }
    ]
  },
  python: {
    name: 'Python',
    icon: faPython,
    gradient: 'from-blue-400 to-green-500',
    pdfs: [
      { title: 'Python Fundamentals', description: 'Getting started with Python', url: 'https://github.com/example/python-notes/raw/main/python-basics.pdf' },
      { title: 'Data Structures', description: 'Lists, dictionaries, and more', url: 'https://github.com/example/python-notes/raw/main/python-data-structures.pdf' },
      { title: 'Web Development with Django', description: 'Building web apps with Django', url: 'https://github.com/example/python-notes/raw/main/python-django.pdf' },
      { title: 'Machine Learning with Python', description: 'ML libraries and concepts', url: 'https://github.com/example/python-notes/raw/main/python-ml.pdf' }
    ]
  },
  javascript: {
    name: 'JavaScript',
    icon: faJs,
    gradient: 'from-yellow-400 to-orange-500',
    pdfs: [
      { title: 'JavaScript Essentials', description: 'Core JavaScript concepts', url: 'https://github.com/example/js-notes/raw/main/js-basics.pdf' },
      { title: 'DOM Manipulation', description: 'Working with the Document Object Model', url: 'https://github.com/example/js-notes/raw/main/js-dom.pdf' },
      { title: 'Async JavaScript', description: 'Promises, async/await, and callbacks', url: 'https://github.com/example/js-notes/raw/main/js-async.pdf' },
      { title: 'React.js Guide', description: 'Building UIs with React', url: 'https://github.com/example/js-notes/raw/main/js-react.pdf' }
    ]
  },
  cpp: {
    name: 'C++',
    icon: faCode,
    gradient: 'from-purple-400 to-blue-500',
    pdfs: [
      { title: 'C++ Fundamentals', description: 'Basic C++ programming', url: 'https://github.com/example/cpp-notes/raw/main/cpp-basics.pdf' },
      { title: 'Object Oriented C++', description: 'Classes and objects in C++', url: 'https://github.com/example/cpp-notes/raw/main/cpp-oop.pdf' },
      { title: 'STL Guide', description: 'Standard Template Library', url: 'https://github.com/example/cpp-notes/raw/main/cpp-stl.pdf' },
      { title: 'Memory Management', description: 'Pointers and memory in C++', url: 'https://github.com/example/cpp-notes/raw/main/cpp-memory.pdf' }
    ]
  }
};

export default async function LanguagePage({ params }: { params: Promise<{ language: string }> }) {
  const { language: languageParam } = await params;
  const language = languageData[languageParam as keyof typeof languageData];
  
  if (!language) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="p-4 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-6">
          <div className={`relative overflow-hidden bg-gradient-to-br ${language.gradient} rounded-xl p-4 text-white mb-4 shadow-xl`}>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-3 text-center sm:text-left">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-lg">
                  <FontAwesomeIcon icon={language.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-3xl font-bold mb-1">
                    {language.name} Notes
                  </h1>
                  <p className="text-sm sm:text-base opacity-90 leading-relaxed">
                    Download comprehensive {language.name} programming notes and tutorials
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center sm:justify-start">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
                  <span>📚</span>
                  <span className="text-sm">{language.pdfs.length} PDF Resources</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* PDF Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {language.pdfs.map((pdf, index) => (
          <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${language.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-[1px] rounded-lg bg-white dark:bg-gray-800"></div>
            
            <div className="relative">
              <CardHeader className="pb-2 p-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${language.gradient} animate-pulse`}></div>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {language.name}
                      </span>
                    </div>
                    <CardTitle className="text-base font-bold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                      {pdf.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                      {pdf.description}
                    </CardDescription>
                  </div>
                  <div className="ml-2">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${language.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <span className="text-sm">📄</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardFooter className="pt-0 p-3">
                <Button 
                  asChild 
                  className="w-full group-hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  size="sm"
                >
                  <a href={pdf.url} download>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm">⬇️</span>
                      <span className="font-medium">Download PDF</span>
                    </div>
                  </a>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
      </div>
    </div>
  );
}

// Generate static params for all languages
export function generateStaticParams() {
  return Object.keys(languageData).map((language) => ({
    language: language,
  }));
}
