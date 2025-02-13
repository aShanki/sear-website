"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Building2, Mail, Users, Phone } from "lucide-react";

const regions = [
  { value: "na", label: "North America" },
  { value: "eu", label: "Europe" },
  { value: "asia", label: "Asia Pacific" },
  { value: "global", label: "Global (Multiple Regions)" },
];

const contactMethods = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "meeting", label: "Schedule Meeting" },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // For static site, just simulate form submission
    setTimeout(() => {
      alert("Thank you for your interest! We'll contact you within one business day.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section className="section-spacing">
      <div className="container-custom max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Enterprise Sales
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Discuss Your Requirements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our enterprise team will get back to you within one business day
          </p>
        </div>

        {/* Contact Form */}
        <Card className="bg-background/50 backdrop-blur border-secondary/20">
          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Company Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Company Information
              </h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Input
                    id="industry"
                    placeholder="e.g. Gaming, Education, Entertainment"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Contact Information
              </h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Contact Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Business Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Server Requirements
              </h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="users">Expected Concurrent Users</Label>
                  <Input
                    id="users"
                    type="number"
                    placeholder="e.g. 1000"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label>Preferred Region</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region.value} value={region.value}>
                          {region.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="requirements">Additional Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="Describe your specific needs, including any custom configurations or security requirements"
                  className="min-h-[100px]"
                />
              </div>
            </div>

            {/* Contact Preference */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Contact Preference
              </h3>
              
              <div className="space-y-2">
                <Label>Preferred Contact Method</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select contact method" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactMethods.map((method) => (
                      <SelectItem key={method.value} value={method.value}>
                        {method.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Enterprise Consultation"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By submitting this form, you agree to be contacted about Sear Hosting enterprise solutions
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}
