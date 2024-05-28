import { Github } from 'lucide-react';
import { GitBranch } from 'lucide-react';
import { GitFork } from 'lucide-react';
import { BookDown } from 'lucide-react';
import { GitMerge } from 'lucide-react';
import { Users } from 'lucide-react';
import { Tags } from 'lucide-react';
import { GitGraph } from 'lucide-react';
import { Star } from 'lucide-react';

import { useLocation } from 'react-router-dom';
export default function Sidebar() {
  const location = useLocation();
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pb-6 pt-7 transition-transform -translate-x-full 
      bg-sky-100 ml-12  border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 xl:w-1/6	"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white rounded-lg dark:bg-gray-800 shadow-2xl">
        <ul className="space-y-2 xl:space-y-6 font-medium lg:mt-10">
          <li>
            <a
              href="#"
              className={`flex items-center p-2 rounded-lg dark:text-white ${location.pathname === '/' || location.pathname.startsWith("/repositories/") ? 'bg-gray-100 text-sky-600' :
                'text-gray-900 hover:bg-gray-100'} dark:hover:bg-gray-700 group`}
            >
              <Github fill="#fb8d8d" className={`${location.pathname === '/' || location.pathname.startsWith("/repositories/") ? "text-red-500" : "text-gray-900"}`} />
              <span className="ms-3 xl:text-lg">Find by Language</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <BookDown className={`${location.pathname === '/owner' ? "text-sky-600" : "text-gray-900"}`} />
              <span className="flex-1 ms-3 whitespace-nowrap">Find Repository</span>
              <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Pro
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <GitMerge className={`${location.pathname === '/issue' ? "text-sky-600" : "text-gray-900"}`} />
              <span className="flex-1 ms-3 whitespace-nowrap">Find Issues</span>
              {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span> */}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Star className={`${location.pathname === '/user' ? "text-sky-600" : "text-gray-900"}`} />
              <span className="flex-1 ms-3 whitespace-nowrap">Popular Repo's</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Tags className={`${location.pathname === '/tags' ? "text-sky-600" : "text-gray-900"}`} />
              <span className="flex-1 ms-3 whitespace-nowrap">Find by Tags</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <Users className={`${location.pathname === '/contributors' ? "text-sky-600" : "text-gray-900"}`} />
              <span className="flex-1 ms-3 whitespace-nowrap">Find Contributor</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <GitGraph className={`${location.pathname === '/graph' ? "text-sky-600" : "text-gray-900"}`} />
              <span className="flex-1 ms-3 whitespace-nowrap">Git Graph Viewer</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <GitBranch className={`${location.pathname === '/pr' ? "text-sky-600" : "text-gray-900"}`} />
              <span className="flex-1 ms-3 whitespace-nowrap">PR Comparer</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
