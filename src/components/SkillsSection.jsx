import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  // FrontEnd Skills
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 83, category: "Frontend" },
  { name: "React", level: 88, category: "Frontend" },
  { name: "TypeScript", level: 83, category: "Frontend" },
  { name: "TailWind CSS", level: 95, category: "Frontend" },
  { name: "Next.js", level: 82, category: "Frontend" },
  // BackEnd Skills
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express.js", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  { name: "MySQL", level: 60, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Backend" },
  { name: "Enterprise java Beans", level: 80, category: "Backend" },
  { name: "RESTful APIs", level: 75, category: "Backend" },
  // Mobile Development
  { name: "React Native", level: 70, category: "Mobile" },
  { name: "Flutter", level: 60, category: "Mobile" },
  { name: "Kotlin", level: 70, category: "Mobile" },
  // Tools and Technologies
  { name: "Git/Github", level: 90, category: "Tools" },
  { name: "Docker", level: 67, category: "Tools" },
  { name: "Agile", level: 50, category: "Methodologies" },
  { name: "VsCode", level: 90, category: "Tools" },
  { name: "Postman", level: 70, category: "Tools" },
  { name: "Cursor", level: 70, category: "Tools" },
  { name: "Netbeans", level: 100, category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Mobile", "Tools", "Methodologies"];

// Note: Ensure `framer-motion` is installed: `npm install framer-motion`
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const handleCategoryClick = (category) => {
    if (category === activeCategory) return;

    const currentIndex = categories.indexOf(activeCategory);
    const newIndex = categories.indexOf(category);

    // Determine animation direction based on category order
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveCategory(category);
  };

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  const variants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction * 50, // Move left (-50) or right (+50)
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Stagger each skill by 0.1s
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    exit: (direction) => ({
      opacity: 0,
      x: direction * -50, // Exit in opposite direction of entry
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    }),
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-glow text-foreground">My </span>
          <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                custom={direction}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};