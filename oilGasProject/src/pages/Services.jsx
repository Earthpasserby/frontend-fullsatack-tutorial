import { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const servicesData = [
        {
            icon: "ShieldCheck",
            title: "Asset Support & Integrity",
            desc: "Comprehensive maintenance and integrity management solutions to extend the lifecycle of your offshore and onshore assets.",
            details: [
                "Asset Life Extension Strategies",
                "Risk Based Inspection (RBI)",
                "Corrosion Management & Control",
                "Structural Integrity Management",
                "Facility Underwater Inspections and Audits",
                "Intelligent Pipeline Inspections",
                "Bolt Tensioning and Torquing",
                "Blasting, Painting and Specialist Coating"
            ]
        },
        {
            icon: "ClipboardCheck",
            title: "EPCI Project Execution",
            desc: "End-to-end Engineering, Procurement, Construction, and Installation services delivered with precision and safety.",
            details: [
                "Feasibility Studies",
                "Subsea Field Layouts",
                "Project Management",
                "Contract Management",
                "Strategic Planning and Partnering",
                "Basis of Design Preparation",
                "CAD Construction Drawings",
                "Cost Estimation & Scheduling",
                "Life Cycle Cost Estimation",
                "Construction Monitoring",
                "Management of Change Control"
            ]
        },
        {
            icon: "Hammer",
            title: "Fabrication & Construction Services",
            desc: "State-of-the-art fabrication capabilities for complex structures, pipelines, and subsea components.",
            details: [
                "Facility Access Modules",
                "Modular Facility Maintenance",
                "Offshore Crane Maintenance",
                "Material Load Out",
                "Mooring System Services",
                "Construction Support Services",
                "Heavy Lifting & Transport",
                "Onshore & Offshore Fabrication"
            ]
        },
        {
            icon: "Settings",
            title: "Engineering and Procurements",
            desc: "Technical design excellence combined with global supply chain management to deliver critical project components.",
            details: [
                "Front End Engineering Design (FEED)",
                "Detailed Engineering & Design",
                "Risk Management",
                "Equipment Specification & Selection",
                "Optimization and Upgrade",
                "As-Built and Field Verification",
                "Facility and Site Survey",
                "Material Procurement & Expediting",
                "Subsea Equipment Supply"
            ]
        },
        {
            icon: "Factory",
            title: "Facility Operations Support Services",
            desc: "Optimizing facility performance through expert operations management, staffing, and technical support.",
            details: [
                "Technical Assistant Staff",
                "Project Assistant Staff",
                "Specialist & Expatriate Staff",
                "HSE & Medical Personnel",
                "Turnaround Maintenance (Inspections, Testing)",
                "Debottlenecking & Facility Upgrade",
                "Strategic Project Planning",
                "Sustainability Consulting",
                "Project Due Diligence"
            ]
        },
        {
            icon: "Activity",
            title: "Pipeline Engineering and Field Services",
            desc: "Specialized pipeline design, installation, and field services ensuring flow assurance and infrastructure reliability.",
            details: [
                "Pipeline FEED & Project Management",
                "Main Line Valves & Tie-ins",
                "Metering Stations & Tank Farms",
                "Pipeline Integrity Management",
                "Pipeline Systems Risk Analysis",
                "Pigging & Corrosion Control",
                "Intelligent Pipeline Inspection (ILI)",
                "Offshore & Onshore Pipeline Laying"
            ]
        }
    ];

    return (
        <div className="font-sans bg-black min-h-screen text-white pt-20 relative">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our <span className="text-gold">Services</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Delivering excellence across the entire energy value chain.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            onClick={() => setSelectedService(service)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`service-${selectedService.title}`}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-slate border border-white/10 rounded-2xl p-8 max-w-2xl w-full relative z-10 shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-gold">
                                    {(() => {
                                        const IconComponent = Icons[selectedService.icon];
                                        return IconComponent ? (
                                            <div className="p-3 bg-black rounded-xl border border-white/10">
                                                <IconComponent size={32} />
                                            </div>
                                        ) : null;
                                    })()}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold">{selectedService.title}</h2>
                            </div>

                            <p className="text-gray-300 mb-8 text-lg leading-relaxed border-b border-white/10 pb-6">
                                {selectedService.desc}
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {selectedService.details.map((detail, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle className="text-gold w-5 h-5 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 text-sm">{detail}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Services;
