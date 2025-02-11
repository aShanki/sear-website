import { Card } from "@/components/ui/card";
import { Code2, Database, Library } from "lucide-react";

const techStack = [
  {
    icon: Code2,
    title: "Languages",
    description: "From type-safe TypeScript to high-performance Go, we choose the right language for your needs.",
    technologies: [
      {
        name: "TypeScript/JavaScript",
        description: "Modern web development"
      },
      {
        name: "Java",
        description: "Enterprise-grade solutions"
      },
      {
        name: "Go",
        description: "High-performance systems"
      }
    ]
  },
  {
    icon: Library,
    title: "Frameworks",
    description: "Best-in-class frameworks that accelerate development without compromising quality.",
    technologies: [
      {
        name: "Next.js",
        description: "React-based web applications"
      },
      {
        name: "Flutter",
        description: "Cross-platform mobile apps"
      }
    ]
  },
  {
    icon: Database,
    title: "Databases",
    description: "Flexible data solutions for any scale.",
    technologies: [
      {
        name: "MongoDB",
        description: "Scalable NoSQL solutions"
      },
      {
        name: "PostgreSQL",
        description: "Reliable relational data"
      }
    ]
  }
];

export function TechStackSection() {
  return (
    <section className="section-spacing bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built on Modern Technology
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our carefully selected tech stack ensures scalable, maintainable, and efficient solutions.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techStack.map((category, index) => (
            <Card 
              key={index}
              className="bg-background/50 backdrop-blur border-secondary/20"
            >
              <div className="p-6 space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg gradient-bg">
                    <category.icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <p className="text-muted-foreground">
                  {category.description}
                </p>

                {/* Technologies List */}
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="flex items-start gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <div>
                        <h4 className="font-medium">{tech.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}