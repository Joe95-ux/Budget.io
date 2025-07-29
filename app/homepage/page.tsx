"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, DollarSign, PieChart, TrendingUp, HelpCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function LandingPage() {
  const { theme } = useTheme();
  const [activeFeature, setActiveFeature] = useState("tracking");

  // Using placeholder images from online sources
  const images = {
    dashboard: {
      dark: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      light: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    featureTracking: {
      dark: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1911&q=80",
      light: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    featureAnalytics: {
      dark: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      light: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    featureSavings: {
      dark: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2093&q=80",
      light: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  };

  const features = [
    {
      id: "tracking",
      title: "Expense Tracking",
      description: "Real-time tracking of all your expenses with smart categorization.",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      id: "analytics",
      title: "Advanced Analytics",
      description: "Beautiful charts and insights to understand your spending patterns.",
      icon: <PieChart className="h-6 w-6" />,
    },
    {
      id: "savings",
      title: "Savings Goals",
      description: "Set and track progress toward your financial goals with ease.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
  ];

  const faqs = [
    {
      question: "Is Budget-IO free to use?",
      answer: "Yes, Budget-IO offers a free plan with all basic features. We also have premium plans with advanced analytics and additional features.",
    },
    {
      question: "How secure is my financial data?",
      answer: "We use bank-level encryption and never store your banking credentials. Your data is always protected.",
    },
    {
      question: "Can I access Budget-IO on mobile?",
      answer: "Absolutely! Budget-IO is fully responsive and works on all devices. We also have dedicated iOS and Android apps.",
    },
    {
      question: "How often is my data updated?",
      answer: "Budget-IO updates your transactions in real-time when connected to your bank, or immediately when you enter them manually.",
    },
  ];

  const getFeatureImage = (featureId: string) => {
    switch(featureId) {
      case "tracking":
        return theme === "dark" ? images.featureTracking.dark : images.featureTracking.light;
      case "analytics":
        return theme === "dark" ? images.featureAnalytics.dark : images.featureAnalytics.light;
      case "savings":
        return theme === "dark" ? images.featureSavings.dark : images.featureSavings.light;
      default:
        return images.featureTracking.dark;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 md:py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background -z-10" />
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <span className="mr-2">New</span> AI-powered budget suggestions
            <ChevronRight className="ml-1 h-4 w-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Take Control of Your <span className="text-primary">Finances</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Budget-IO helps you track spending, save money, and reach your financial goals with intuitive tools and powerful insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              See How It Works
            </Button>
          </div>
        </div>
        <div className="mt-16 md:mt-24 w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border shadow-xl">
          <Image
            src={theme === "dark" ? images.dashboard.dark : images.dashboard.light}
            alt="Budget-IO Dashboard"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your money effectively
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className={`cursor-pointer transition-all hover:border-primary ${activeFeature === feature.id ? "border-primary bg-primary/5" : ""}`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <CardHeader className="flex flex-row items-center space-y-0 space-x-4">
                  <div className={`p-3 rounded-lg ${activeFeature === feature.id ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border shadow-lg">
            <Image
              src={getFeatureImage(activeFeature)}
              alt={`${activeFeature} feature`}
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted by Thousands</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { stat: "10K+", label: "Active Users" },
              { stat: "$50M+", label: "Tracked Monthly" },
              { stat: "4.9/5", label: "App Rating" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-bold text-primary mb-2">{item.stat}</p>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-background p-8 rounded-xl shadow-sm border text-left">
            <p className="text-lg mb-6">
              "Budget-IO completely transformed how I manage my money. I've saved over $5,000 in just six months by following its insights and recommendations."
            </p>
            <div className="flex items-center">
              <div className="rounded-full bg-primary/10 p-2 mr-4">
                <Image
                  src={images.userAvatar}
                  alt="User"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Marketing Director, San Francisco</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Budget-IO
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-3 text-primary" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-10 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Finances?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of users who have taken control of their financial future with Budget-IO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}