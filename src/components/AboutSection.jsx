import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text=4xl font-bold mb-12 text-center">
                <span className="text-glow text-foreground">About </span>
                <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Devoted Software Engineer and Web Developer.
                    </h3>
                    <p className="text-muted-foreground">
                        I'm a full-time Software Developer and Web Developer with a strong focus on building scalable, responsive, and impactful digital experiences. I specialize in front-end and full-stack development using modern technologies and frameworks. My work is guided by a passion for clean design, efficient code, and user-centered functionality.
                    </p>
                    <p className="text-muted-foreground">
                        I hold a Diploma in Computer Science, but it’s been the real-world projects and continuous learning that have truly shaped my journey. I'm passionate about solving problems and always pushing to build software that makes a real impact.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get in Touch
                        </a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/18 transition-colors duration-300">
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semiBold text-lg">
                                    Web Development
                                </h4>
                                <p className="text-muted-foreground">
                                    Creating responsive, dynamic websites and web applications, with the use of modern frameworks and technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semiBold text-lg">
                                    Software Engineering
                                </h4>
                                <p className="text-muted-foreground">
                                    Designing and implementing software solutions, with a focus on scalability, performance, and maintainability.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semiBold text-lg">
                                    Project Management
                                </h4>
                                <p className="text-muted-foreground">
                                     Leading and being led through projects from inception to completion, with the use of Agile methodologies and tools.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}