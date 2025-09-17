"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, FileCode, Scan } from "lucide-react"

export function UploadSection() {
  const [code, setCode] = useState("")
  const [language, setLanguage] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
      // Scroll to results section
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })
    }, 3000)
  }

  return (
    <section id="upload" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Upload Your Code</h2>
          <p className="text-lg text-muted-foreground">Paste your code or upload a file to check for plagiarism</p>
        </div>

        <Card className="bg-card border-border shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileCode className="h-6 w-6 text-primary" />
              <span>Code Analysis</span>
            </CardTitle>
            <CardDescription>Select your programming language and paste your code below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Language Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Programming Language</label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                  <SelectItem value="csharp">C#</SelectItem>
                  <SelectItem value="go">Go</SelectItem>
                  <SelectItem value="rust">Rust</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Code Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Code to Analyze</label>
              <Textarea
                placeholder="Paste your code here..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="min-h-[300px] bg-input border-border font-mono text-sm resize-none"
              />
            </div>

            {/* File Upload Alternative */}
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">Or drag and drop your code file here</p>
              <Button variant="outline" className="border-border bg-transparent">
                Choose File
              </Button>
            </div>

            {/* Analyze Button */}
            <Button
              onClick={handleAnalyze}
              disabled={!code || !language || isAnalyzing}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                  Analyzing Code...
                </>
              ) : (
                <>
                  <Scan className="mr-2 h-5 w-5" />
                  Analyze for Plagiarism
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
