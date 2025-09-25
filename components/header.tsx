"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Menu, X, User, LogOut } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-accent" />
          <span className="font-bold text-xl">CodeCheck</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
            About
          </Link>
          {user ? (
            <>
              <Link href="/upload" className="text-sm font-medium hover:text-accent transition-colors">
                Upload
              </Link>
              <Link href="/pricing" className="text-sm font-medium hover:text-accent transition-colors">
                Pricing
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium hover:text-accent transition-colors">
                Login
              </Link>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-3">
            <Link href="/about" className="block text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
            {user ? (
              <>
                <Link href="/upload" className="block text-sm font-medium hover:text-accent transition-colors">
                  Upload
                </Link>
                <Link href="/pricing" className="block text-sm font-medium hover:text-accent transition-colors">
                  Pricing
                </Link>
                <div className="pt-2 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Signed in as {user.name}</p>
                  <Button variant="outline" onClick={logout} className="w-full bg-transparent">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link href="/login" className="block text-sm font-medium hover:text-accent transition-colors">
                  Login
                </Link>
                <Button asChild className="w-full">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
