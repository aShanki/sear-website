import { Card } from "@/components/ui/card";
import { Building2, GraduationCap, Trophy, Video, Users2, Network} from "lucide-react";

const cases = [
  {
    icon: Building2,
    title: "Gaming Companies",
    description: "Scale your operations with reliable infrastructure. Perfect for gaming studios and publishers.",
    benefits: [
      "High-performance dedicated servers",
      "Custom plugin support",
      "Multiple region deployment"
    ]
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Create secure, managed environments for educational programs and student activities.",
    benefits: [
      "Controlled access management",
      "Education edition support",
      "Student safety features"
    ]
  },
  {
    icon: Trophy,
    title: "Event Organizations",
    description: "Host large-scale E-Sports tournaments and events with confidence and reliability.",
    benefits: [
      "High-capacity servers",
      "Real-time monitoring",
      "Event support team"
    ]
  },
  {
    icon: Video,
    title: "Content Creators",
    description: "Get reliable, high-performance servers for streaming and content creation.",
    benefits: [
      "Low-latency connections",
      "Dedicated resources",
      "Custom branding options"
    ]
  },
  {
    icon: Users2,
    title: "Gaming Communities",
    description: "Build and grow your community with scalable, professional hosting.",
    benefits: [
      "Flexible scaling options",
      "Community management tools",
      "Advanced moderation features"
    ]
  },
  {
    icon: Network,
    title: "Enterprise Solutions",
    description: "Secure and reliable infrastructure for business applications and services.",
    benefits: [
      "99.9% Uptime guarantee",
      "Enterprise-grade security",
      "24/7 Technical support"
    ]
  }
];

export function UseCases() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Can You Do?
            </h2>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((case_, index) => (
            <Card 
              key={index}
              className="bg-background/50 backdrop-blur border-secondary/20 transition-transform hover:scale-[1.02]"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg gradient-bg">
                    <case_.icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold">{case_.title}</h3>
                </div>
                
                <p className="text-muted-foreground">
                  {case_.description}
                </p>

                <ul className="space-y-2">
                  {case_.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground/80">{benefit}</span>
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