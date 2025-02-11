import { Card } from "@/components/ui/card";
import { DollarSign, ShieldCheck, BarChart3, Gauge, LineChart, Lock, Clock, Activity } from "lucide-react";

const benefits = [
  {
    title: "Cost Efficiency",
    icon: DollarSign,
    benefits: [
      {
        title: "Predictable Billing",
        description: "Fixed monthly costs with no hidden charges",
        icon: Clock
      },
      {
        title: "Resource Optimization",
        description: "Pay only for the resources you need",
        icon: Gauge
      },
      {
        title: "Volume Pricing",
        description: "Competitive rates for larger deployments",
        icon: BarChart3
      }
    ]
  },
  {
    title: "Risk Management",
    icon: ShieldCheck,
    benefits: [
      {
        title: "Proactive Monitoring",
        description: "24/7 system and performance monitoring",
        icon: Activity
      },
      {
        title: "Security Compliance",
        description: "Regular security audits and updates",
        icon: Lock
      },
      {
        title: "Performance Reports",
        description: "Detailed monthly performance analytics",
        icon: LineChart
      }
    ]
  }
];

export function EnterpriseBenefits() {
  return (
    <section className="section-spacing bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="heading-decoration">Enterprise</span> Benefits
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Maximize value and minimize risk with our enterprise solutions
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((category, index) => (
            <Card 
              key={index}
              className="bg-background/50 backdrop-blur border-secondary/20"
            >
              <div className="p-6 space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg gradient-bg">
                    <category.icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>

                {/* Benefits List */}
                <div className="grid gap-6">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-muted">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All enterprise plans include our standard 99.9% uptime guarantee and priority support
          </p>
        </div>
      </div>
    </section>
  );
}