import React from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { SmartButton } from "@/components/ui/smart-button";
import { ArrowRight, Zap, Sparkles, Code, Palette } from "lucide-react";

const Demo = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Blazing Fast",
      description: "Optimized for performance with Next.js 14 and Turbopack",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Type Safe",
      description: "Full TypeScript support with strict type checking",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Beautiful UI",
      description: "Tailwind CSS with your custom color palette",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Smooth Animations",
      description: "Framer Motion for delightful interactions",
    },
  ];
  return (
    <>
      {/* Hero Section */}

      <div className="text-3xl my-12 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        harum deleniti expedita facilis ipsa possimus perspiciatis! Dolorum,
        soluta obcaecati! Nostrum fugiat voluptate, nemo ipsum sint modi facere
        magni veniam. Rerum!
      </div>

      <div>
        <h1 className="text-title text-3xl font-bold">This uses title color</h1>
        <p className="my-blue font-light my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          commodi adipisci quae, magnam asperiores ad corporis dolorum numquam
          temporibus qui porro voluptates assumenda nisi harum est.
          Reprehenderit molestiae placeat veniam? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Repellendus numquam doloribus
          distinctio pariatur magni cumque, odio, molestiae optio rerum non
          officia ipsam. Repellat, porro molestias! Aliquam illum velit fugit
          animi.
        </p>
        <button className="bg-[#00A8E1] text-white px-4 py-2 rounded-md">
          This uses blue button color
        </button>
      </div>

      <section className="py-12 md:py-20">
        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-button/10 px-4 py-2 text-sm font-medium text-button">
              <Sparkles className="h-4 w-4" />
              Modern Stack, Smart Setup
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Build <span className="gradient-text">Smartly</span>
              <br />
              <span className="text-heading dark:text-white">From Day One</span>
            </h1>

            <p className="mb-8 text-lg text-paragraph md:text-xl">
              A professional codebase with TypeScript, Tailwind CSS, Framer
              Motion, and your carefully crafted color palette. Everything you
              need to build modern web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SmartButton size="lg" variant="gradient" icon={<ArrowRight />}>
                Get Started
              </SmartButton>

              <SmartButton size="lg" variant="outline" icon={<Code />}>
                View Source
              </SmartButton>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <FadeIn delay={0.2}>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight headings">
              Everything You Need
            </h2>
            <p className="text-lg text-paragraph">
              Built with best practices and modern tooling
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={0.3 + index * 0.1}>
              <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex rounded-lg bg-button/10 p-3">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-paragraph">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
};

export default Demo;
