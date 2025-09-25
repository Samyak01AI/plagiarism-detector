"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Upload, FileCode, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { ProtectedRoute } from "@/components/protected-route"

function UploadPageContent() {
  const [code, setCode] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const router = useRouter()

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      const reader = new FileReader()
      reader.onload = (e) => {
        setCode(e.target?.result as string)
      }
      reader.readAsText(selectedFile)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      setFile(droppedFile)
      const reader = new FileReader()
      reader.onload = (e) => {
        setCode(e.target?.result as string)
      }
      reader.readAsText(droppedFile)
    }
  }

  const handleAnalyze = async () => {
    if (!code.trim()) return

    setIsAnalyzing(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    sessionStorage.setItem("analyzedCode", code)
    sessionStorage.setItem("fileName", file?.name || "Pasted Code")

    setIsAnalyzing(false)
    router.push("/results")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Upload Code for Analysis</h1>
            <p className="text-muted-foreground">Upload a file or paste your code directly to check for plagiarism</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload File
                </CardTitle>
                <CardDescription>Drag and drop a code file or click to browse</CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-accent/50 transition-colors cursor-pointer"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("file-upload")?.click()}
                >
                  <FileCode className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    {file ? file.name : "Drop your code file here or click to browse"}
                  </p>
                  <p className="text-xs text-muted-foreground">Supports .py, .js, .java, .cpp, .c, .txt and more</p>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".py,.js,.java,.cpp,.c,.txt,.html,.css,.php,.rb,.go,.rs"
                    onChange={handleFileUpload}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Paste Code Section */}
            <Card>
              <CardHeader>
                <CardTitle>Or Paste Code Directly</CardTitle>
                <CardDescription>Copy and paste your code in the text area below</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste your code here..."
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="min-h-[200px] font-mono text-sm"
                />
              </CardContent>
            </Card>
          </div>

          {/* Analysis Button */}
          <div className="mt-8 text-center">
            <Button onClick={handleAnalyze} disabled={!code.trim() || isAnalyzing} size="lg" className="min-w-[200px]">
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Code"
              )}
            </Button>
            {code.trim() && (
              <p className="text-sm text-muted-foreground mt-2">
                Ready to analyze {code.split("\n").length} lines of code
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function UploadPage() {
  return (
    <ProtectedRoute>
      <UploadPageContent />
    </ProtectedRoute>
  )
}
