import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";

export function HeroSection() {
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
              Engineering Digital
            </span>{" "}
            <span className="text-primary heading-decoration">Excellence</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/80">
            Full Stack Development • Minecraft Plugins • Cross-Platform Solutions
          </p>

          {/* Description */}
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
            From enterprise web applications to high-performance Minecraft plugins, 
            we transform complex challenges into elegant solutions. Partner with Sear Development 
            for technology that scales with your ambitions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground gap-2">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Code2 className="h-5 w-5" />
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Implementations</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">Developer Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </section>
  );
}