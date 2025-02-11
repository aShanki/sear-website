import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Layout, 
  Shield, 
  Server, 
  Zap 
} from "lucide-react";

const achievements = [
  {
    icon: Layout,
    title: "Complete Platform",
    description: "Architected comprehensive infrastructure"
  },
  {
    icon: Zap,
    title: "Real-Time Interactions",
    description: "Seamless player experience"
  },
  {
    icon: Shield,
    title: "Security Focus",
    description: "Custom anti-cheat systems"
  },
  {
    icon: Server,
    title: "Server Sync",
    description: "Cross-server synchronization"
  }
];

export function FeaturedProject() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Project
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our expertise in action: See how we delivered a complete Minecraft enhancement suite.
          </p>
        </div>

        {/* Project Showcase */}
        <Card className="bg-background/50 backdrop-blur border-secondary/20">
          <div className="p-8 space-y-8">
            {/* Project Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Flarial Stack</h3>
                <p className="text-lg text-muted-foreground">
                  A comprehensive gaming infrastructure solution
                </p>
              </div>
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://flarial.xyz" target="_blank" rel="noopener noreferrer">
                  Visit Project
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Project Description */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                Flarial represents our expertise in creating comprehensive gaming solutions. 
                This full-stack project showcases our ability to handle complex systems at scale, 
                implementing robust security measures while maintaining high performance.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-muted">
                    <achievement.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Impact Statement */}
            <div className="border-t border-secondary/20 pt-6">
              <p className="text-muted-foreground">
                Flarial demonstrates our capability to deliver complex gaming infrastructure 
                that performs at scale while maintaining security and user experience.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}