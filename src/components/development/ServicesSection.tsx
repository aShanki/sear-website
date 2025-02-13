import { Card } from "@/components/ui/card";
import { Globe, Server, Smartphone, Code2, Gauge, Layout } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full Stack Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies.",
    features: [
      {
        title: "Responsive frontends",
        description: "Next.js and TypeScript powered applications",
        icon: Layout
      },
      {
        title: "Robust backends",
        description: "Go and Node.js server systems",
        icon: Code2
      },
      {
        title: "Real-time features",
        description: "API integrations and live updates",
        icon: Gauge
      }
    ]
  },
  {
    icon: Server,
    title: "Minecraft Plugin Development",
    description: "High-performance plugins that enhance server capabilities.",
    features: [
      {
        title: "Optimized plugins",
        description: "Java-based server enhancements",
        icon: Code2
      },
      {
        title: "Performance tuning",
        description: "Server-side optimization",
        icon: Gauge
      },
      {
        title: "Custom mechanics",
        description: "Unique gameplay features",
        icon: Layout
      }
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native-quality mobile applications that work everywhere.",
    features: [
      {
        title: "Cross-platform",
        description: "Flutter-powered development",
        icon: Layout
      },
      {
        title: "Native experience",
        description: "Seamless platform integration",
        icon: Smartphone
      },
      {
        title: "Feature-rich",
        description: "Complete mobile solutions",
        icon: Code2
      }
    ]
  }
];

export function ServicesSection() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="heading-decoration">Development</span> Services
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            End-to-end development solutions crafted with modern technologies and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-background/50 backdrop-blur border-secondary/20 transition-transform hover:scale-[1.02]"
            >
              <div className="p-6 space-y-6">
                {/* Service Header */}
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg gradient-bg">
                    <service.icon className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>

                <p className="text-muted-foreground">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-muted">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
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