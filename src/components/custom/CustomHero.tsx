    import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Server, HeadsetIcon, LineChart } from "lucide-react";

const stats = [
  {
    value: "99.9%",
    label: "SLA Guaranteed",
    icon: Shield,
  },
  {
    value: "24/7",
    label: "Priority Support",
    icon: HeadsetIcon,
  },
  {
    value: "100%",
    label: "Resource Dedication",
    icon: Server,
  },
  {
    value: "∞",
    label: "Scalability",
    icon: LineChart,
  },
];

export function CustomHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[#0f0e1b]">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      {/* Content */}
      <div className="container-custom relative">
        <div className="flex flex-col items-center text-center py-20 md:py-32 space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary heading-decoration">
              Enterprise
            </span>{" "}
            Minecraft{" "}
            <span className="text-accent heading-decoration">
              Solutions
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto">
            Scale your gaming infrastructure with confidence. Enterprise-grade hosting backed by dedicated support and custom configurations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              Download Info Pack
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 w-full">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-background/50 backdrop-blur border-secondary/20">
                <div className="space-y-2 text-center">
                  <stat.icon className="h-6 w-6 mx-auto text-primary mb-2" />
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </section>
  );
}