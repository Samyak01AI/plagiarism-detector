<<<<<<< HEAD
import { TeacherSignupSection } from "@/components/teacher-signup-section"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <TeacherSignupSection />
      </main>
=======
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Upload, BarChart3, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance"> Code Plagiarism Detection</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Advanced plagiarism detection tool designed specifically for educators. Analyze code submissions with
              precision and maintain academic integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/upload">Start Checking Code</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose CodeCheck?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Accurate Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advanced algorithms detect code similarities with high precision and minimal false positives.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Upload className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Easy Upload</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Simple drag-and-drop interface supports multiple file formats and direct code pasting.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Detailed Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive analysis with highlighted similarities and plagiarism percentage scores.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Educator Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Built specifically for teachers and professors with academic integrity in mind.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of educators who trust CodeCheck for maintaining academic integrity.
            </p>
            <Button asChild size="lg">
              <Link href="/signup">Create Your Account</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
>>>>>>> db_backend
    </div>
  )
}
