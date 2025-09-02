import Link from 'next/link';

const languages = [
  { id: 'java', name: 'Java', icon: '☕', description: 'Object-oriented programming language' },
  { id: 'python', name: 'Python', icon: '🐍', description: 'Versatile and beginner-friendly language' },
  { id: 'javascript', name: 'JavaScript', icon: '⚡', description: 'Language of the web' },
  { id: 'cpp', name: 'C++', icon: '⚙️', description: 'System programming language' },
];

export default function NotesPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Welcome to Programming Notes Hub
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Select a programming language from the sidebar to view and download PDF notes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {languages.map((language) => (
          <Link
            key={language.id}
            href={`/notes/${language.id}`}
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
          >
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl">{language.icon}</span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {language.name}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {language.description}
            </p>
            <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium">
              View Notes →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
          📋 How to Use
        </h2>
        <ul className="text-blue-600 dark:text-blue-400 text-sm space-y-1">
          <li>• Click on any language from the sidebar or cards above</li>
          <li>• Browse available PDF notes for that language</li>
          <li>• Click “Download PDF” to save notes to your device</li>
          <li>• All notes are free and available offline</li>
        </ul>
      </div>
    </div>
  );
}
