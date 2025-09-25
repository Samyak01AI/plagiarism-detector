"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AlertTriangle, CheckCircle, FileText, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ProtectedRoute } from "@/components/protected-route"

function ResultsPageContent() {
  const [code, setCode] = useState("")
  const [fileName, setFileName] = useState("")
  const [plagiarismScore] = useState(Math.floor(Math.random() * 40) + 10) // Random score between 10-50%
  const router = useRouter()

  useEffect(() => {
    const storedCode = sessionStorage.getItem("analyzedCode")
    const storedFileName = sessionStorage.getItem("fileName")

    if (!storedCode) {
      router.push("/upload")
      return
    }

    setCode(storedCode)
    setFileName(storedFileName || "Unknown File")
  }, [router])

  const getSeverityColor = (score: number) => {
    if (score < 20) return "text-green-600"
    if (score < 40) return "text-yellow-600"
    return "text-red-600"
  }

  const getSeverityBadge = (score: number) => {
    if (score < 20)
      return (
        <Badge variant="secondary" className="bg-green-100 text-green-800">
          Low Risk
        </Badge>
      )
    if (score < 40)
      return (
        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
          Medium Risk
        </Badge>
      )
    return <Badge variant="destructive">High Risk</Badge>
  }

  const highlightSimilarities = (code: string) => {
    const lines = code.split("\n")
    return lines.map((line, index) => {
      // Simulate highlighting some lines as similar (random for demo)
      const isSimilar = Math.random() < plagiarismScore / 100
      return (
        <div key={index} className={`${isSimilar ? "bg-red-100 dark:bg-red-900/20" : ""} px-2 py-1`}>
          <span className="text-muted-foreground text-xs mr-4 select-none">{index + 1}</span>
          <span className="font-mono text-sm">{line || " "}</span>
        </div>
      )
    })
  }

  if (!code) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/upload">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Upload
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-2">Analysis Results</h1>
            <p className="text-muted-foreground">File: {fileName}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Results Summary */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {plagiarismScore < 20 ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    )}
                    Plagiarism Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${getSeverityColor(plagiarismScore)}`}>
                      {plagiarismScore}%
                    </div>
                    <Progress value={plagiarismScore} className="mb-4" />
                    {getSeverityBadge(plagiarismScore)}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Analysis Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Lines of Code:</span>
                    <span className="text-sm font-medium">{code.split("\n").length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Similar Lines:</span>
                    <span className="text-sm font-medium">
                      {Math.floor((code.split("\n").length * plagiarismScore) / 100)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Unique Content:</span>
                    <span className="text-sm font-medium">{100 - plagiarismScore}%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {plagiarismScore < 20
                      ? "This code appears to be mostly original. Good work!"
                      : plagiarismScore < 40
                        ? "Some similarities detected. Review highlighted sections for potential issues."
                        : "High similarity detected. This code may require further investigation."}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Code Display */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Code Analysis</CardTitle>
                  <CardDescription>Highlighted lines show potential similarities with existing code</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 max-h-[600px] overflow-auto">
                    <div className="space-y-0">{highlightSimilarities(code)}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/upload">Analyze Another File</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function ResultsPage() {
  return (
    <ProtectedRoute>
      <ResultsPageContent />
    </ProtectedRoute>
  )
}
