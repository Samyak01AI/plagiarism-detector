import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Lightbulb } from "lucide-react"

export function AboutSection() {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead AI Researcher",
      description: "PhD in Computer Science, specializing in code analysis and machine learning algorithms.",
    },
    {
      name: "Michael Rodriguez",
      role: "Software Engineer",
      description: "Full-stack developer with expertise in building scalable detection systems.",
    },
    {
      name: "Emily Johnson",
      role: "Data Scientist",
      description: "Expert in natural language processing and code similarity algorithms.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">About CodeGuard</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We're dedicated to maintaining academic integrity and helping educators identify code plagiarism with
            cutting-edge AI technology.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-primary" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To provide educators and institutions with powerful, accurate, and easy-to-use tools for detecting code
                plagiarism across multiple programming languages, fostering a culture of academic honesty and original
                thinking.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-6 w-6 text-secondary" />
                <span>Our Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To become the leading platform for code integrity verification, empowering educational institutions
                worldwide to maintain high standards of academic excellence while supporting student learning and
                growth.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Why Choose CodeGuard?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">99% Accuracy</h4>
              <p className="text-muted-foreground text-sm">
                Industry-leading detection algorithms with minimal false positives
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-secondary/10 border border-secondary/20 w-fit mx-auto">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">10,000+ Users</h4>
              <p className="text-muted-foreground text-sm">Trusted by educators and institutions worldwide</p>
            </div>
            <div className="text-center space-y-4">
              <div className="p-4 rounded-full bg-accent/10 border border-accent/20 w-fit mx-auto">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Multi-Language</h4>
              <p className="text-muted-foreground text-sm">Support for 15+ programming languages and growing</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
