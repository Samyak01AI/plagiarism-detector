import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Sarang Rajput",
    designation: "Project Lead",
    role: "ML Developer",
    contribution:"Leading the project and implementing Machine Learning algorithms.",
    image:"/images/sarang.jpg",
    linkedin:"https://www.linkedin.com/in/sarang-rajput?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ", 
  },
  {
    name: "Roshan Bhadane",
    designation: "Backend Developer",
    role: "Backend + Database Developer",
    contribution: "Building robust backend infrastructure and database architecture",
    image: "/images/roshan.jpg",
    linkedin:"https://www.linkedin.com/in/roshan-bhadane-32669525b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  },
  {
    name: "Vedant Gawali",
    designation: "Frontend Developer",
    role: "Frontend Developer",
    contribution: "Creating intuitive user interfaces and responsive web design",
    image: "/images/vedant.jpg",
    linkedin:"https://www.linkedin.com/in/vedant-gawali",
  },
  {
    name: "Samyak Pawar",
    designation: "Research & Documentation",
    role: "Research & Testing",
    contribution:"Conducting research on plagiarism detection methods and comprehensive documentation",
    image: "/images/samyak.jpg",
    linkedin:"https://www.linkedin.com/in/samyak-pawar",
  },
  {
    name: "Pranit Adhangale",
    designation: "Backend Developer",
    role: "Backend Developer",
    contribution: "Developing server-side logic and Firebase integrations",
    image: "/images/pranit.jpg",
    linkedin:"https://www.linkedin.com/in/pranit-adhangle-590718322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Meet Our Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our dedicated team of developers and researchers working together to
            create the most accurate and reliable code plagiarism detection
            system.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Member Photo */}
                <div className="w-28 h-28 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover border-2 border-muted"
                  />
                </div>

                {/* Member Info */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>

                  <Badge variant="secondary" className="text-sm">
                    {member.designation}
                  </Badge>

                  <p className="text-sm font-medium text-accent">{member.role}</p>

                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    {member.contribution}
                  </p>

                  {/* LinkedIn Link */}
                  {member.linkedin && (
                    <div className="flex justify-center mt-3">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Our Mission
          </h2>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            We are committed to maintaining academic integrity by providing
            educators with powerful, accurate, and easy-to-use plagiarism
            detection tools. Our team combines expertise in machine learning,
            software development, and educational technology to deliver the best
            possible solution.
          </p>
        </div>
      </div>
    </div>
  )
}
