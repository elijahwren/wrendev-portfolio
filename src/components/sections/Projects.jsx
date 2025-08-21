import { RevealOnScroll } from './RevealOnScroll.jsx';

export const Projects = () => {
    return (
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            // section for projects
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4"> Portfolio Website </h3>
                        <p className="text-gray-400 mb-4">
                            Responsive portfolio website showcasing my skills and projects.
                        </p>
                        <div>
                            {["React", "Tailwind CSS", "EmailJS"].map((tech, key) => (
                                <span 
                                key={tech}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="#" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            > 
                                View Project  
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4"> Responsive Music Application </h3>
                        <p className="text-gray-400 mb-4">
                            Group project responsive music application with a modern UI and smooth animations.
                        </p>
                        <div>
                            {["React", "Express", "CSS", "JavaScript", "MongoDB"].map((tech, key) => (
                                <span 
                                key={tech}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/elijahwren/responsive-music-application" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            > 
                                View Project  
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4"> NFL Season Opener Timer </h3>
                        <p className="text-gray-400 mb-4">
                            Countdown timer for the NFL season opener with a sleek design.
                        </p>
                        <div>
                            {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                <span 
                                key={tech}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/elijahwren/NFL-Countdown" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            > 
                                View Project  
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4"> Pomodoro Timer </h3>
                        <p className="text-gray-400 mb-4">
                            Pomodoro timer application to boost productivity with a clean interface.
                        </p>
                        <div>
                            {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                <span 
                                key={tech}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all
                                "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://github.com/elijahwren/Pomodoro" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            > 
                                View Project 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};