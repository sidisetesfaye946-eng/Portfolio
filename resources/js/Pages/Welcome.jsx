import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function Welcome({ auth }) {
    const [isOpen, setIsOpen] = useState(false);

  const { data, setData, post, processing, reset } = useForm({
    name: '',
    email: '',
    message: '',
});

const submitContact = (e) => {
    e.preventDefault();
    post('/contact', {
        preserveScroll: true,
        onSuccess: () => {
            alert('Thank you! Your message has been saved to the database.');
            reset();
        },
    });
};

    const projects = [
        {
            title: 'EEC Cost Management System',
            description: 'Custom enterprise Power Apps solutions integrated seamlessly with Power Automate flows and SharePoint backends.',
            tech: ['Power Apps', 'Power Automate', 'SharePoint'],
            link: 'https://github.com/sidisetesfaye946-eng',
        },
        {
            title: 'Full-Stack Web Platform',
            description: 'Modern, high-performance web application built with Laravel, PHP, React, and Vue.js architecture.',
            tech: ['Laravel', 'React', 'Vue.js', 'Tailwind'],
            link: 'https://github.com/sidisetesfaye946-eng',
        },
        {
            title: 'ERP Support & Administration',
            description: 'Comprehensive functional and technical support across SAP Finance, Procurement, and Material Management modules.',
            tech: ['SAP MM', 'SAP FI', 'User Management'],
            link: '#',
        },
    ];

    return (
        <div className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
            <Head title="Sidise Tesfaye - Portfolio" />

            {/* Background Aesthetic Glowing Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#030712]/70 border-b border-gray-800/60">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Sidise.dev
                    </span>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
                        <a href="#about" className="hover:text-indigo-400 transition">About</a>
                        <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
                        <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
                        {auth.user ? (
                            <a href="/dashboard" className="bg-indigo-600 px-4 py-2 rounded-xl text-white hover:bg-indigo-500 transition shadow-lg shadow-indigo-600/20 font-semibold">Dashboard</a>
                        ) : (
                            <a href="/login" className="text-indigo-400 hover:text-indigo-300 transition font-semibold">Admin Login</a>
                        )}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-400 hover:text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="md:hidden bg-gray-900/95 backdrop-blur border-b border-gray-800 px-6 py-5 space-y-4 shadow-xl">
                        <a href="#about" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-indigo-400">About</a>
                        <a href="#projects" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-indigo-400">Projects</a>
                        <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-indigo-400">Contact</a>
                        {auth.user ? (
                            <a href="/dashboard" className="block text-indigo-400 font-semibold">Dashboard</a>
                        ) : (
                            <a href="/login" className="block text-indigo-400 font-semibold">Admin Login</a>
                        )}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <header id="about" className="max-w-6xl mx-auto px-6 py-28 md:py-36 flex flex-col items-center text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 border border-indigo-500/20 shadow-inner">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                    Full-Stack Developer & Junior IT Specialist
                </div>
                
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 max-w-4xl leading-tight">
                    Building digital products with <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">precision & style.</span>
                </h1>
                
                <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                    Hi, I'm <strong className="text-gray-200">Sidise Tesfaye</strong>. Computer Science graduate (Great Distinction, CGPA: 3.67)[cite: 1] specializing in scalable web apps, cloud administration, and enterprise tools.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                    <a href="#projects" className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 hover:scale-[1.02] transition duration-200">
                        Explore My Work
                    </a>
                    <a href="#contact" className="bg-gray-900/80 border border-gray-800 text-gray-300 font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 hover:text-white hover:scale-[1.02] transition duration-200">
                        Let's Talk
                    </a>
                </div>
            </header>

            {/* Projects Section */}
            <section id="projects" className="max-w-6xl mx-auto px-6 py-24 relative z-10">
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-indigo-400 font-semibold uppercase tracking-wider text-sm mb-2">Portfolio</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Featured Projects & Experience</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/80 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition duration-300 flex flex-col justify-between group relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition rounded-2xl pointer-events-none"></div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition">{project.title}</h4>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                            </div>
                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs bg-gray-800/90 text-indigo-300 px-3 py-1 rounded-lg border border-gray-700/50 font-medium">{t}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition">
                                    View Project Repository 
                                    <span className="ml-1.5 transform group-hover:translate-x-1 transition">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="max-w-2xl mx-auto px-6 py-24 relative z-10">
                <div className="bg-gray-900/60 backdrop-blur-2xl border border-gray-800/80 rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-500/5">
                    <div className="text-center mb-10">
                        <h2 className="text-indigo-400 font-semibold uppercase tracking-wider text-sm mb-2">Get In Touch</h2>
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Let's Build Something Together</h3>
                        <p className="text-gray-400 text-sm">Have a question or want to discuss an opportunity? Send a message below.</p>
                    </div>

                    <form onSubmit={submitContact} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Your Name</label>
                            <input 
                                type="text" 
                                value={data.name} 
                                onChange={e => setData('name', e.target.value)}
                                required
                                className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3.5 text-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Your Email</label>
                            <input 
                                type="email" 
                                value={data.email} 
                                onChange={e => setData('email', e.target.value)}
                                required
                                className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3.5 text-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Message</label>
                            <textarea 
                                rows="4" 
                                value={data.message} 
                                onChange={e => setData('message', e.target.value)}
                                required
                                className="w-full bg-[#030712] border border-gray-800 rounded-xl px-4 py-3.5 text-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none"
                                placeholder="Hello Sidise, I would love to talk about..."
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-indigo-600/25 transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-10 border-t border-gray-800/60 text-gray-500 text-sm relative z-10">
                &copy; {new Date().getFullYear()} Sidise Tesfaye Desta. Built with Laravel, React, & Inertia.
            </footer>
        </div>
    );
}