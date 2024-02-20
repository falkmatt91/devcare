import React from "react";

const Header = () => {
    return (
        <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
            <div className="max-w-8xl mx-auto">
                <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
                    <div className="relative flex items-center">
                        <a className="flex title-font font-medium text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">dev.care</span>
                        </a>
                        <div className="relative hidden lg:flex items-center ml-auto">
                            <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                                <ul className="flex space-x-8">
                                    <li className="hover:text-sky-500 dark:hover:text-sky-400">Readme</li>
                                    <li className="hover:text-sky-500 dark:hover:text-sky-400">Product</li>
                                    <li className="hover:text-sky-500 dark:hover:text-sky-400">About</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header