import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Shield, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-foreground">Code Plagiarism</span>
              <br />
              <span className="text-primary neon-glow">Detector</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Detecting Code Similarity Made Simple
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Advanced AI-powered plagiarism detection for Python, Java, C++, JavaScript, and more. Identify code
            similarities with precision and maintain academic integrity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card bg-transparent">
              View Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Multi-Language</h3>
              <p className="text-muted-foreground text-center text-sm">
                Support for Python, Java, C++, JavaScript, and more
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-secondary/10 border border-secondary/20">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Secure & Private</h3>
              <p className="text-muted-foreground text-center text-sm">
                Your code is processed securely and never stored
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 rounded-full bg-accent/10 border border-accent/20">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground text-center text-sm">
                Get results in seconds with our optimized algorithms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
