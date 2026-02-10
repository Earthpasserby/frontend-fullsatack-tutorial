import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3">
                    <img src="/logo.png" alt="Mantle-Gold Ltd" className="h-12" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-wide text-white leading-none">MANTLE-GOLD LTD</span>
                        <span className="text-[10px] text-gold tracking-widest uppercase mt-1">Oil, Gas & Energy Solutions</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`hover:text-gold transition-colors ${location.pathname === link.path ? 'text-gold' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="bg-gold text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10 py-4">
                    <div className="flex flex-col items-center gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-lg hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-gray-300'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
