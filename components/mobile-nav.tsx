"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-0 w-10 h-10">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[80%] sm:w-[350px] pt-10">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">Biomechanics Research</span>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link 
              href="#introduction" 
              className="text-base py-2 hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Introduction
            </Link>
            <Link 
              href="#objective" 
              className="text-base py-2 hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Objective
            </Link>
            <Link 
              href="#methodology" 
              className="text-base py-2 hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Methodology
            </Link>
            <Link 
              href="#results" 
              className="text-base py-2 hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Results
            </Link>
            <Link 
              href="#gait-videos" 
              className="text-base py-2 hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Gait Videos
            </Link>
            <Link 
              href="#3d-simulation" 
              className="text-base py-2 hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              3D Simulation Videos
            </Link>
            <Link 
              href="#presentation" 
              className="text-base py-2 hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Presentation
            </Link>
            <Link 
              href="#conclusion" 
              className="text-base py-2 hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Conclusion
            </Link>
            <Link 
              href="#contact" 
              className="text-base py-2 hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
