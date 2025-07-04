
const skills =[
    //FrontEnd Skills
    { name: "HTML/CSS", level:95, category:"Frontend"},
    { name: "JavaScript", level:83, category:"Frontend"},
    { name: "React", level:88, category:"Frontend"},
    { name: "TypeScript", level:83, category:"Frontend"},
    { name: "TailWind CSS", level:95, category:"Frontend"},
    { name: "Next.js", level:82, category:"Frontend"},
    
    //BackEnd Skills
    { name: "Node.js", level:80, category:"Backend"},
    { name: "Express.js", level:75, category:"Backend"},
    { name: "MongoDB", level:70, category:"Backend"},
    { name: "MySQL", level:60, category:"Backend"},
    { name: "PostgreSQL", level:75, category:"Backend"},
    { name: "Enterprise java Beans", level:80, category:"Backend"},
    { name: "RESTful APIs", level:75, category:"Backend"},

    //Mobile Development
    { name: "React Native", level:70, category:"Mobile"},
    { name: "Flutter", level:60, category:"Mobile"},
    { name: "Kotlin", level:70, category:"Mobile"},


    //Tools and Technologies
    { name: "Git/Github", level:90, category:"Tools"},
    { name: "Docker", level:67, category:"Tools"},
    { name: "Agile", level:50, category:"Methodologies"},
    { name: "VsCode", level:90, category:"Tools"},
    { name: "Postman", level:70, category:"Tools"},
    { name: "Cursor", level:70, category:"Tools"},
    { name: "Netbeans", level:100, category:"Tools"},
];


export const SkillsSection = () => {
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xml md:text-4xl font-bold mb-12 text-center">
                <span className="text-glow text-foreground">My </span>
                <span className="text-primary">Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill,key) => (
                    <div key={key} className=" bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                            style={{ width: `${skill.level}%` }}
                            />
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">
                                {skill.level}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}