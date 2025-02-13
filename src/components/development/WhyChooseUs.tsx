import { Card } from "@/components/ui/card";
import { 
  Code2, 
  LayoutGrid, 
  Globe, 
  Trophy,
  Scale,
  HeartHandshake
} from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    description: "Comprehensive solutions from one team",
    benefits: [
      "Frontend and backend development",
      "Database architecture",
      "API design and implementation"
    ]
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "Successfully delivered projects like Flarial",
    benefits: [
      "Complex system architecture",
      "High-performance solutions",
      "Satisfied enterprise clients"
    ]
  },
  {
    icon: Globe,
    title: "Technology Leaders",
    description: "Up-to-date with latest development practices",
    benefits: [
      "Modern tech stack",
      "Best practice implementation",
      "Innovation-driven approach"
    ]
  },
  {
    icon: Scale,
    title: "Scalable Solutions",
    description: "Built for growth and performance",
    benefits: [
      "Future-proof architecture",
      "Performance optimization",
      "Flexible infrastructure"
    ]
  },
  {
    icon: LayoutGrid,
    title: "Cross-Domain Experience",
    description: "Diverse project portfolio",
    benefits: [
      "Web applications",
      "Minecraft plugins",
      "Mobile development"
    ]
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Partnership",
    description: "Long-term success focus",
    benefits: [
      "Continuous support",
      "Regular updates",
      "Proactive maintenance"
    ]
  }
];

export function WhyChooseUs() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with Excellence
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Choose a development team that understands your technology needs and delivers results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="bg-background/50 backdrop-blur border-secondary/20 transition-transform hover:scale-[1.02]"
            >
              <div className="p-6 space-y-4">
                {/* Reason Header */}
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg gradient-bg">
                    <reason.icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                </div>

                <p className="text-muted-foreground">
                  {reason.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2">
                  {reason.benefits.map((benefit, benefitIndex) => (
                    <li 
                      key={benefitIndex} 
                      className="flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}