import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'SERVICES', path: '/services' },
        { name: 'PROJECTS', path: '/projects' },
        { name: 'CERTIFICATIONS', path: '/certifications' },
        { name: 'CONTACT', path: '/contact' },
    ];

    return (
        <nav className="bg-[#011b26] border-b border-white/10 px-6 py-4 fixed w-full top-0 z-50">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <Link to="/" className="flex items-center space-x-3">
                    <div className="w-12 h-10 bg-white"></div> {/* Placeholder for the white box in image */}
                    <div className="flex flex-col leading-none">
                        <span className="text-white font-black text-2xl tracking-tighter">HPE</span>
                        <span className="text-[#ff8d00] font-bold text-[10px] tracking-widest uppercase mt-0.5">IT SOLUTIONS</span>
                    </div>
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

                {/* CTA Button */}
                <Link
                    to="/contact"
                    className="bg-[#ff8d00] hover:bg-[#e67e00] text-white px-8 py-3 rounded-full text-xs font-black tracking-widest transition-all transform active:scale-95 shadow-lg shadow-orange-500/20"
                >
                    GET STARTED
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;