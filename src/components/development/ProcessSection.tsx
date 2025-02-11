import { Card } from "@/components/ui/card";
import { 
  ClipboardList, 
  Compass, 
  GitBranch, 
  ShieldCheck, 
  Rocket 
} from "lucide-react";

const processSteps = [
  {
    icon: ClipboardList,
    title: "Requirements Analysis",
    description: "We dive deep into your needs, ensuring we understand every aspect of your project.",
    details: [
      "Project scope definition",
      "Technical requirements gathering",
      "Timeline and milestone planning"
    ]
  },
  {
    icon: Compass,
    title: "Architecture Design",
    description: "Creating scalable foundations that support your current and future needs.",
    details: [
      "System architecture planning",
      "Technology stack selection",
      "Scalability considerations"
    ]
  },
  {
    icon: GitBranch,
    title: "Agile Development",
    description: "Iterative development with regular updates and feedback integration.",
    details: [
      "Sprint-based development",
      "Regular progress updates",
      "Continuous integration"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your solution performs flawlessly.",
    details: [
      "Comprehensive testing",
      "Performance optimization",
      "Security validation"
    ]
  },
  {
    icon: Rocket,
    title: "Deployment & Maintenance",
    description: "Smooth deployment and ongoing support to keep your system running optimally.",
    details: [
      "Production deployment",
      "Performance monitoring",
      "Ongoing maintenance"
    ]
  }
];

export function ProcessSection() {
  return (
    <section className="section-spacing bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precision in Process
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our methodology ensures consistent, high-quality results through every phase of development.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-6">
          {processSteps.map((step, index) => (
            <Card 
              key={index}
              className="bg-background/50 backdrop-blur border-secondary/20"
            >
              <div className="p-6 flex flex-col md:flex-row gap-6">
                {/* Step Number and Icon */}
                <div className="flex md:flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-2xl font-bold text-background">
                    {index + 1}
                  </div>
                  <div className="p-2 rounded-lg bg-muted">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Details */}
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {step.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex} 
                        className="flex items-center gap-2"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}