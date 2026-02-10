import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `New Message from ${formData.firstName} ${formData.lastName}`;
        const body = `Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
        window.location.href = `mailto:ekere_afia@yahoo.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="font-sans bg-black min-h-screen text-white pt-20">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Get in <span className="text-gold">Touch</span></h1>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Headquarters</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-gold mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg">Office</h3>
                                    <p className="text-gray-400">31 Discovery Garden Estate, Lekki Lagos Nigeria</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="text-gold mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg">Phone</h3>
                                    <p className="text-gray-400">08032368599</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="text-gold mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg">Email</h3>
                                    <p className="text-gray-400">ekere_afia@yahoo.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-slate rounded-xl border border-white/5">
                            <h3 className="font-bold mb-2">Investor Relations</h3>
                            <p className="text-gray-400 text-sm">
                                For investor inquiries, please contact our dedicated team at <span className="text-gold">investors@mantlegold.com</span>.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate p-8 rounded-2xl border border-white/5">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-400">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-gold focus:outline-none transition-colors"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-400">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-gold focus:outline-none transition-colors"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-400">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-gold focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-400">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-black border border-white/10 rounded-lg p-3 focus:border-gold focus:outline-none transition-colors"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gold text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
