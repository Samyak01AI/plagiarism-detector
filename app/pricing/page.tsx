import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"
import { ProtectedRoute } from "@/components/protected-route"

function PricingPageContent() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for trying out our service",
      features: ["3 checks per day", "Basic plagiarism detection", "File upload support", "Email support"],
      popular: false,
      cta: "Current Plan",
    },
    {
      name: "Basic",
      price: "₹99",
      period: "per month",
      description: "Great for individual educators",
      features: [
        "150 checks per month",
        "Advanced plagiarism detection",
        "Multiple file formats",
        "Detailed reports",
        "Priority email support",
        "Export results",
      ],
      popular: true,
      cta: "Upgrade",
    },
    {
      name: "Pro",
      price: "₹299",
      period: "per month",
      description: "Perfect for institutions and departments",
      features: [
        "Unlimited checks",
        "Advanced plagiarism detection",
        "All file formats supported",
        "Comprehensive analytics",
        "Priority support",
        "API access",
        "Bulk processing",
        "Custom integrations",
      ],
      popular: false,
      cta: "Upgrade",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your plagiarism detection needs. All plans include our core detection
              features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative ${plan.popular ? "border-accent shadow-lg scale-105" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent">Most Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    disabled={plan.name === "Free"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-left">Can I upgrade or downgrade my plan?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-left">
                    Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-left">What file formats are supported?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-left">
                    We support all major programming languages including Python, JavaScript, Java, C++, C, and many
                    more.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-left">Is there a free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-left">
                    Our Free plan allows you to try our service with 4 checks per day. No credit card required.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function PricingPage() {
  return (
    <ProtectedRoute>
      <PricingPageContent />
    </ProtectedRoute>
  )
}
