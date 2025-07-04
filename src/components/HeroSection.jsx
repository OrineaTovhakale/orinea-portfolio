import { Typewriter } from 'react-simple-typewriter';
import { ArrowDown } from 'lucide-react';
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Orinea</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1"> Tovhakale</span>
          </h1>

          {/* Typewriter Subheading */}
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground opacity-0 animate-fade-in-delay-2 text-glow text-foreground">
            <Typewriter
              words={[
                'Software Engineer',
                'Web Developer',
                'Problem Solver',
                'Tech Enthusiast',
                'Visionary Coder',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create elegant and efficient software solutions that make a difference.
            Specializing in full-stack development, I bring ideas to life with code.
            I build interfaces that are not only functional but also delightful to use.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
};
