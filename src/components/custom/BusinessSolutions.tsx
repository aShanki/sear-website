import { Card } from "@/components/ui/card";
import { Server, Shield, HeadsetIcon, Database, Network, Lock, Scale, Users } from "lucide-react";

const solutions = [
  {
    title: "Infrastructure",
    description: "Enterprise-grade hardware and networking solutions",
    features: [
      {
        icon: Server,
        title: "Dedicated Environment",
        description: "Exclusive hardware resources for optimal performance",
      },
      {
        icon: Database,
        title: "Custom Resources",
        description: "Tailored CPU, RAM, and storage configurations",
      },
      {
        icon: Network,
        title: "High Availability",
        description: "Load-balanced infrastructure across multiple regions",
      },
    ],
  },
  {
    title: "Service Level",
    description: "Premium support and management solutions",
    features: [
      {
        icon: Users,
        title: "Account Executive",
        description: "Dedicated business relationship manager",
      },
      {
        icon: HeadsetIcon,
        title: "24/7 Priority Support",
        description: "Immediate response to critical issues",
      },
      {
        icon: Scale,
        title: "Custom SLA",
        description: "Tailored service level agreements for your needs",
      },
    ],
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security measures",
    features: [
      {
        icon: Shield,
        title: "DDoS Protection",
        description: "Advanced mitigation against network attacks",
      },
      {
        icon: Lock,
        title: "Security Audits",
        description: "Regular security assessments and updates",
      },
      {
        icon: Database,
        title: "Backup Solutions",
        description: "Automated backup and disaster recovery",
      },
    ],
  },
];

export function BusinessSolutions() {
  return (
    <section className="section-spacing bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="heading-decoration">Business-Class</span> Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise solutions designed for scalability, security, and performance
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur border-secondary/20">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-primary">{solution.title}</h3>
                <p className="text-muted-foreground mb-8">{solution.description}</p>
                
                <div className="space-y-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-2 rounded-lg gradient-bg">
                          <feature.icon className="h-5 w-5 text-background" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
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