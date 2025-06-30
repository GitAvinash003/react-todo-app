import { FaClipboardList } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="py-6 mb-4 border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center">
          <FaClipboardList className="h-8 w-8 mr-3 text-indigo-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Task Manager
          </h1>
        </div>
        
        <p className="mt-2 text-gray-500 text-sm md:text-base text-center w-full px-4">
          Organize your tasks and boost productivity
        </p>
      </div>
    </header>
  );
}