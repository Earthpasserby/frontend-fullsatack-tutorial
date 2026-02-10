import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Stats from '../components/Stats';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    return (
        <div className="font-sans">
            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/oil.jpg"
                        alt="Offshore Rig"
                        className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center mt-16">
                    <span className="text-gold uppercase tracking-[0.2em] text-sm font-bold mb-6 block animate-fade-in-up">
                        MANTLE-GOLD LTD
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight animate-fade-in-up delay-100">
                        OIL GAS AND ENERGY PRODUCTS <br />
                        <span className="text-gradient">AND ENGINEERING SOLUTIONS</span>.
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up delay-200">
                        Leading the global transition with innovative extraction technologies and a commitment to environmental stewardship.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                        <Link to="/services" className="bg-gold text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all hover:scale-105 flex items-center justify-center gap-2">
                            Explore Our Operations <ArrowRight size={20} />
                        </Link>
                        <Link to="/contact" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                            Investor Relations
                        </Link>
                    </div>
                </div>
            </div>

            <Stats />

            {/* Mission Section */}
            <div className="py-24 bg-darker">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Redefining Energy <br /><span className="text-gold">Production</span>
                        </h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            MANTLE-GOLD LTD strives to be the community partner of choice as we develop oil and natural gas in a sustainable, innovative way. We focus on low-risk development opportunities combined with rigorous regulatory standards.
                        </p>
                        <Link to="/about" className="text-gold font-semibold hover:underline">Read Our Story &rarr;</Link>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gold/20 rounded-2xl filter blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <img src="/images/oil.jpg" alt="Production Site" className="relative rounded-2xl shadow-2xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                </div>
            </div>

            {/* Services Preview */}
            <div className="py-24 bg-black relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">What We Do</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3">Comprehensive Solutions</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon="ClipboardCheck"
                            title="EPCI Project Execution"
                            desc="End-to-end Engineering, Procurement, Construction, and Installation services delivered with precision and safety."
                        />
                        <ServiceCard
                            icon="ShieldCheck"
                            title="Asset Support & Integrity"
                            desc="Comprehensive maintenance and integrity management solutions to extend the lifecycle of your offshore and onshore assets."
                        />
                        <ServiceCard
                            icon="Activity"
                            title="Pipeline Engineering"
                            desc="Specialized pipeline design, installation, and field services ensuring flow assurance and infrastructure reliability."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
