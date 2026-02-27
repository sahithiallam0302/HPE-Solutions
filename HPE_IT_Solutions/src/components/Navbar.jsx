import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'SERVICES', path: '/services' },
        { name: 'PROJECTS', path: '/projects' },
        { name: 'CERTIFICATIONS', path: '/certifications' },
        { name: 'CONTACT', path: '/contact' },
    ];

    return (
        <nav className="bg-[#011b26] border-b border-white/10 px-6 h-20 fixed w-full top-0 z-50">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between h-full relative">
                {/* Logo Section */}
                <Link to="/" className="relative flex items-center h-full">
                    <img
                        src="/HPE LOGO.png"
                        alt="HPE IT Solutions Logo"
                        className="h-32 w-auto object-contain transition-transform hover:scale-105 brightness-110"
                    />
                </Link>

                {/* Nav Links */}
                <ul className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <li key={link.name} className="relative group">
                                <Link
                                    to={link.path}
                                    className={`text-xs font-black tracking-widest transition-colors duration-200 ${isActive ? 'text-[#00b0d4]' : 'text-white hover:text-[#00b0d4]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                                {isActive && (
                                    <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#ff8d00]"></div>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center space-x-4">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white cursor-pointer group"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-4 h-4 text-[#ff8d00] group-hover:rotate-45 transition-transform" />
                        ) : (
                            <Moon className="w-4 h-4 text-[#00b0d4] group-hover:-rotate-12 transition-transform" />
                        )}
                    </button>

                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="bg-[#ff8d00] hover:bg-[#e67e00] text-white px-8 py-3 rounded-full text-xs font-black tracking-widest transition-all transform active:scale-95 shadow-lg shadow-orange-500/20"
                    >
                        GET STARTED
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;