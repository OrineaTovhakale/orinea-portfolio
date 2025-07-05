import { Typewriter } from 'react-simple-typewriter';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left md:w-1/2">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1"> Orinea</span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1"> Tovhakale</span>
            </h1>

            {/* Typewriter Subheading */}
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground opacity-0 animate-fade-in-delay-2 text-glow text-foreground">
              I am a{' '}
              <Typewriter
                className="text-primary"
                words={[
                  ' Software Engineer',
                  ' Web Developer',
                  ' Problem Solver',
                  ' Tech Enthusiast',
                  ' Visionary Coder',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I create elegant and efficient software solutions that make a difference.
              Specializing in full-stack development, I bring ideas to life with code.
              I build interfaces that are not only functional but also delightful to use.
            </p>

            {/* Button */}
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Image - hidden on small screens */}
          <div className="md:w-1/2 justify-center md:justify-end hidden md:flex">
            <img
              src="/Picture.jpeg"
              alt="Orinea Tovhakale Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-lg opacity-0 animate-fade-in-delay-2"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
