import { TeacherSignupSection } from "@/components/teacher-signup-section"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <TeacherSignupSection />
      </main>
    </div>
  )
}
