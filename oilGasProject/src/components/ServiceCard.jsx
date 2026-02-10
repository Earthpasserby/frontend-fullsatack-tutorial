import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';

const ServiceCard = ({ icon, title, desc, onClick }) => {
    const IconComponent = Icons[icon] || Icons.Activity;

    // Common content for both modes
    const CardContent = () => (
        <>
            <div className="text-gold mb-6 transition-transform group-hover:scale-110 duration-300">
                <IconComponent size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
            <div className="inline-flex items-center text-gold text-sm font-semibold hover:tracking-wide transition-all mt-auto group-hover:underline">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </div>
        </>
    );

    // Styling class
    const cardClasses = "glass-card p-8 rounded-2xl group cursor-pointer h-full flex flex-col items-start w-full text-left";

    if (onClick) {
        return (
            <button className={cardClasses} onClick={onClick}>
                <CardContent />
            </button>
        );
    }

    return (
        <Link to="/services" className={cardClasses}>
            <CardContent />
        </Link>
    );
};

export default ServiceCard;
