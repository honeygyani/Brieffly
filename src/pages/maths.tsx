"use client"

import { motion } from "framer-motion"
import { Book, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import "src/app/globals.css"
import { useState } from "react"

function GridBackgroundDemo() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}


const chapters = [
  { id: 1, title: "Sets and Functions", class: 11 },
  { id: 2, title: "Trigonometric Functions", class: 11 },
  { id: 3, title: "Principle of Mathematical Induction", class: 11 },
  { id: 4, title: "Complex Numbers and Quadratic Equations", class: 11 },
  { id: 5, title: "Linear Inequalities", class: 11 },
  { id: 6, title: "Permutations and Combinations", class: 11 },
  { id: 7, title: "Binomial Theorem", class: 11 },
  { id: 8, title: "Sequences and Series", class: 11 },
  { id: 9, title: "Straight Lines", class: 11 },
  { id: 10, title: "Conic Sections", class: 11 },
  { id: 11, title: "Introduction to Three-dimensional Geometry", class: 11 },
  { id: 12, title: "Limits and Derivatives", class: 11 },
  { id: 13, title: "Mathematical Reasoning", class: 11 },
  { id: 14, title: "Statistics", class: 11 },
  { id: 15, title: "Probability", class: 11 },
  { id: 16, title: "Relations and Functions", class: 12 },
  { id: 17, title: "Inverse Trigonometric Functions", class: 12 },
  { id: 18, title: "Matrices", class: 12 },
  { id: 19, title: "Determinants", class: 12 },
  { id: 20, title: "Continuity and Differentiability", class: 12 },
  { id: 21, title: "Applications of Derivatives", class: 12 },
  { id: 22, title: "Integrals", class: 12 },
  { id: 23, title: "Applications of Integrals", class: 12 },
  { id: 24, title: "Differential Equations", class: 12 },
  { id: 25, title: "Vector Algebra", class: 12 },
  { id: 26, title: "Three-dimensional Geometry", class: 12 },
  { id: 27, title: "Linear Programming", class: 12 },
  { id: 28, title: "Probability", class: 12 },
]

export default function Component() {
  const words = [
    { text: "IIT JEE Mathematics", className: "text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500" },
    { text: "Chapters", className: "text-xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500" },
  ]

  return (
    <div className="relative min-h-screen bg-black font-inter overflow-hidden">
      <GridBackgroundDemo />
      <div className="relative z-10">
        <nav className="w-full p-4 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Brieffly
            </Link>

             <Link href="/" passHref>
            <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/20 hover:text-white transition-colors duration-300"
              >
            Back to Home
          </Button>
        </Link>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center mb-12">
            <TypewriterEffectSmooth words={words} />
          </div>

          {[11, 12].map((classNum) => (
            <div key={classNum} className="mb-12">
              <h2 className="text-3xl font-inter mb-6  sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">Class {classNum}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chapters
                  .filter((chapter) => chapter.class === classNum)
                  .map((chapter, index) => (
                    <motion.div
                      key={chapter.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ChapterCard chapter={chapter} />
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}

function ChapterCard({ chapter }: { chapter: { id: number; title: string; class: number } }) {
  return (
    <Card className="bg-black/50 border-gray-800 hover:bg-black/70 transition-colors duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 font-inter flex items-center">
          <Book className="mr-2 h-5 w-5" color="white" />
          {chapter.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary" className="bg-primary/20 text-l sm:text-l font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral800-200 to-neutral-200">
          Class {chapter.class}
        </Badge>
      </CardContent>
      <CardFooter className="pt-3 text-white">
        <Link href={`/home?subject=${encodeURIComponent(chapter.title)}`} passHref className="w-full">
          <Button
            variant="secondary"
            className="w-full bg-primary/10 hover:bg-primary/20 text-primary-foreground"
          >
            Start
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}