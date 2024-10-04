import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, BookOpen, Brain, Users, Home } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">About Kiddy Quest</h1>
        
        <Card className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Introducing Kiddy Quest</h2>
          <p className="text-gray-700 mb-4">
            Kiddy Quest is a gamified learning app designed to improve first-grade students' math skills. Our mission is to make math fun and engaging, helping young learners build a strong foundation for their academic future.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
              <Brain className="mr-2" /> The Problem
            </h3>
            <p className="text-gray-700">
              Many first-graders struggle with math, which can impact their academic performance and overall well-being. Low mathematical intelligence at this crucial stage can have long-lasting effects on a child's educational journey.
            </p>
          </Card>

          <Card className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
              <BookOpen className="mr-2" /> Our Solution
            </h3>
            <p className="text-gray-700">
              Kiddy Quest addresses this challenge by incorporating game elements into math learning. Our app uses a combination of interactive activities, challenges, and rewards to motivate students and help them master essential math concepts.
            </p>
          </Card>
        </div>

        <Card className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Theoretical Framework</h3>
          <p className="text-gray-700">
            Kiddy Quest is built on solid educational theories, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Gamification</li>
            <li>Self-Efficacy Theory</li>
            <li>Mathematical Learning Theory</li>
          </ul>
        </Card>

        <Card className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
            <Users className="mr-2" /> Benefits for Everyone
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <ArrowRight className="mr-2 mt-1 text-blue-500" />
              <span><strong className="text-blue-700">Students:</strong> Fun and engaging math learning, leading to improved understanding and retention.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="mr-2 mt-1 text-blue-500" />
              <span><strong className="text-blue-700">Teachers:</strong> Valuable insights into student progress and personalized instruction tools.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="mr-2 mt-1 text-blue-500" />
              <span><strong className="text-blue-700">Parents:</strong> Support children's learning at home and track their progress.</span>
            </li>
            <li className="flex items-start">
              <ArrowRight className="mr-2 mt-1 text-blue-500" />
              <span><strong className="text-blue-700">Researchers:</strong> A platform for studying the effectiveness of gamification in education.</span>
            </li>
          </ul>
        </Card>

        <Card className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Key Features</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Engaging and interactive learning activities</li>
            <li>Customized math problems based on difficulty levels</li>
            <li>Progress tracking and feedback for students</li>
            <li>Performance data and reporting for teachers</li>
            <li>Daily challenges and rewards for motivation</li>
          </ul>
        </Card>

        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Ready to start the quest?</h3>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More About Kiddy Quest
          </Button>
          <div>
            <Link href="/" passHref>
              <Button variant="outline" className="mt-4 inline-flex items-center">
                <Home className="mr-2 h-4 w-4" /> Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}