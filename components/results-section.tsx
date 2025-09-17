"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, XCircle, Eye } from "lucide-react"

export function ResultsSection() {
  // Mock results data
  const plagiarismScore = 23
  const matches = [
    {
      id: 1,
      source: "GitHub Repository: user/project-name",
      similarity: 89,
      lines: "15-28",
      code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`,
    },
    {
      id: 2,
      source: "Stack Overflow Answer",
      similarity: 76,
      lines: "45-52",
      code: `function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}`,
    },
    {
      id: 3,
      source: "Academic Paper Implementation",
      similarity: 45,
      lines: "78-85",
      code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None`,
    },
  ]

  const getScoreColor = (score: number) => {
    if (score < 30) return "text-secondary"
    if (score < 70) return "text-yellow-500"
    return "text-destructive"
  }

  const getScoreIcon = (score: number) => {
    if (score < 30) return <CheckCircle className="h-6 w-6 text-secondary" />
    if (score < 70) return <AlertTriangle className="h-6 w-6 text-yellow-500" />
    return <XCircle className="h-6 w-6 text-destructive" />
  }

  return (
    <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Analysis Results</h2>
          <p className="text-lg text-muted-foreground">Detailed plagiarism detection results for your code</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Overall Score */}
          <div className="lg:col-span-1">
            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center space-x-2">
                  {getScoreIcon(plagiarismScore)}
                  <span>Plagiarism Score</span>
                </CardTitle>
                <CardDescription>Overall similarity percentage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className={`text-6xl font-bold ${getScoreColor(plagiarismScore)}`}>{plagiarismScore}%</div>
                  <Progress value={plagiarismScore} className="mt-4" />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Unique Code</span>
                    <Badge variant="secondary">{100 - plagiarismScore}%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Similar Code</span>
                    <Badge variant="destructive">{plagiarismScore}%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sources Found</span>
                    <Badge variant="outline">{matches.length}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Matches */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Similar Code Segments</h3>

              {matches.map((match) => (
                <Card key={match.id} className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{match.source}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant={match.similarity > 70 ? "destructive" : "secondary"}>
                          {match.similarity}% match
                        </Badge>
                        <Badge variant="outline">Lines {match.lines}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Eye className="h-4 w-4" />
                        <span>Matched code segment:</span>
                      </div>

                      <div className="code-highlight rounded-lg p-4 bg-muted/20">
                        <pre className="text-sm font-mono text-foreground overflow-x-auto">
                          <code>{match.code}</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
