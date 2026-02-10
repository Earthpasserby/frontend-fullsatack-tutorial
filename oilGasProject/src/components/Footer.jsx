import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-darker pt-20 pb-10 border-t border-gold/20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logo.png" alt="Mantle-Gold Ltd" className="h-8" />
                            <span className="text-lg font-bold text-white">MANTLE-GOLD LTD</span>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Oil Gas & Energy Products & Engineering Solutions. Empowering the world with sustainable energy.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-gold">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-gold">Newsroom</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Operations</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link to="/services" className="hover:text-gold">Exploration</Link></li>
                            <li><Link to="/services" className="hover:text-gold">Production</Link></li>
                            <li><Link to="/services" className="hover:text-gold">Refining</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>31 Discovery Garden Estate, Lekki Lagos Nigeria</li>
                            <li>08032368599</li>
                            <li>ekere_afia@yahoo.com</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
                    &copy; 2026 MANTLE-GOLD LTD. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
