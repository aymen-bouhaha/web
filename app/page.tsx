"use client"

import { useState, useEffect } from "react"
import { Menu, Smartphone, Download, Apple, Play, ChevronRight, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
                <img
                    src="/logo-white.svg"
                    alt="App Screenshot"
                    className="w-[44px] object-contain"
                />
              <span className="text-xl font-bold text-white">Darraja</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white/87 hover:text-[#5200FF] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-white/87 hover:text-[#5200FF] transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="text-white/87 hover:text-[#5200FF] transition-colors"
              >
                Download
              </button>
              <button
                onClick={() => scrollToSection("how-to")}
                className="text-white/87 hover:text-[#5200FF] transition-colors"
              >
                How to
              </button>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-gray-800">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gray-900 border-gray-800">
                <div className="flex flex-col space-y-4 mt-8">
                  <button onClick={() => scrollToSection("home")} className="text-left text-lg font-medium text-white">
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-left text-lg font-medium text-white"
                  >
                    Features
                  </button>
                  <button
                    onClick={() => scrollToSection("download")}
                    className="text-left text-lg font-medium text-white"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => scrollToSection("how-to")}
                    className="text-left text-lg font-medium text-white"
                  >
                    How to
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-[#5200FF]/20 text-[#CBB2FF] hover:bg-[#5200FF]/20 border border-[#5200FF]/30 animate-bounce">
                  Available Now
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Simple, Local & <span className="bg-gradient-to-r from-[#5200FF] to-[#FF904C] bg-clip-text text-transparent animate-gradient">
                    {" "}
                    Effortless{" "}
                  </span>
                </h1>
                <p className="text-xl text-white/60 leading-relaxed">
                  Explore Tunisia’s hidden gems one smooth ride at a time.
                  Darraja makes discovering Tunisia easy, fun, and truly local. No hassle, just hop on and go.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#5200FF] hover:bg-[#310099] text-white transform hover:scale-105 transition-all duration-200"
                  onClick={() => scrollToSection("download")}
                >
                  Download Now
                  <Download className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("features")}
                  className="border-[#8C8C8C] text-white/87 hover:bg-[#5200FF]/10 hover:text-white hover:border-[#5200FF] transform hover:scale-105 transition-all duration-200"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-br from-gray-800 to-gray-600 rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden border border-[#8C8C8C]/30">
                  <Image
                    src="/login.svg?height=500&width=250"
                    alt="App Screenshot"
                    width={250}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#5200FF]/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#FF904C]/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section 1 - Phone on Left */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in-left">
              <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-br from-[#5200FF] to-[#310099] rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden border border-[#8C8C8C]/30">
                  <Image
                    src="/vehicle-sel.svg?height=500&width=250"
                    alt="Lightning Fast Performance"
                    width={250}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#CBB2FF]/30 rounded-full animate-ping"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FF904C]/20 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-6 animate-slide-in-right">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  🌍 Designed for <span className="bg-gradient-to-r from-[#5200FF] to-[#FF904C] bg-clip-text text-transparent animate-gradient">
                  {" "}Travelers{""}</span>
                </h2>
                <p className="text-lg text-white/60 leading-relaxed">
                  Multilingual app, flexible pricing, and total freedom. Whether you're here for a day or a week, Darraja is made for exploring on your terms.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#5200FF] hover:bg-[#310099] text-white transform hover:scale-105 transition-all duration-200"
                  onClick={() => scrollToSection("download")}
                >
                  Try It Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section 2 - Phone on Right */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5AD363]/5 to-[#36C941]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  📱 Scan & Ride <span className="bg-gradient-to-r from-[#5200FF] to-[#FF904C] bg-clip-text text-transparent animate-gradient">
                  {" "}in Seconds{""}</span> 
                </h2>
                <p className="text-lg text-white/60 leading-relaxed">
                  No lines, no confusion. Just scan any Darraja bike with your phone and go. It's as easy as taking a photo.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#5AD363] hover:bg-[#36C941] text-white transform hover:scale-105 transition-all duration-200"
                  onClick={() => scrollToSection("download")}
                >
                  Secure Download
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-br from-[#5AD363] to-[#36C941] rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden border border-[#8C8C8C]/30">
                  <Image
                    src="/scan.svg?height=500&width=250"
                    alt="Secure and Private"
                    width={250}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#87E08D]/25 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#5AD363]/15 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section 3 - Phone on Left */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5CF3F]/5 to-[#FFE47D]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in-left">
              <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-br from-[#F5CF3F] to-[#BFA131] rounded-[3rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden border border-[#8C8C8C]/30">
                  <Image
                    src="/ride-progress.svg?height=500&width=250"
                    alt="Team Collaboration"
                    width={250}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#FFE47D]/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#F5CF3F]/30 rounded-full animate-pulse"></div>
            </div>
            <div className="space-y-6 animate-slide-in-right">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  🚲 <span className="bg-gradient-to-r from-[#5200FF] to-[#FF904C] bg-clip-text text-transparent animate-gradient">
                  {" "}Effortless{""}</span> E-Biking
                </h2>
                <p className="text-lg text-white/60 leading-relaxed">
                  Glide through Tunisia with zero effort. Darraja’s electric bikes are built for smooth, comfortable rides, uphill, downtown, or along the coast.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#F5CF3F] hover:bg-[#BFA131] text-black font-semibold transform hover:scale-105 transition-all duration-200"
                  onClick={() => scrollToSection("download")}
                >
                  Start Riding
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How To Section */}
      <section id="how-to" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5200FF]/5 to-[#CBB2FF]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How It
              <span className="bg-gradient-to-r from-[#5200FF] to-[#FF904C] bg-clip-text text-transparent animate-gradient">
                    {" "} Works{" "}</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Get started in just three simple steps and begin your journey with our innovative mobile experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Step 1 - Localiser */}
            <div className="text-center space-y-6 animate-slide-in-left">
              <div className="relative mx-auto w-48 h-48 group">
                <div className="w-full h-full bg-gradient-to-br from-indigo-800/50 to-cyan-800/50 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-gray-700">
                  <img
                    src="/localize.jpg?height=150&width=150"
                    alt="Localiser - Step 1"
                    className="w-32 h-32 object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  1
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-indigo-400/30 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">Localise</h3>
                <p className="text-gray-300 leading-relaxed">
                Darraja bikes are everywhere, just open the app and spot one nearby.
                With stations placed all around the city, finding your next ride takes seconds.
                </p>
              </div>
            </div>

            {/* Step 2 - Scanner */}
            <div className="text-center space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative mx-auto w-48 h-48 group">
                <div className="w-full h-full bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-gray-700">
                  <img
                    src="/qr.png?height=150&width=150"
                    alt="Scanner - Step 2"
                    className="w-32 h-32 object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  2
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-400/30 rounded-full animate-bounce"></div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">Scan</h3>
                <p className="text-gray-300 leading-relaxed">
                Unlock your ride instantly.
                Just scan the QR code on any Darraja bike and you’re ready to go no hassle, no waiting.
                </p>
              </div>
            </div>

            {/* Step 3 - Rouler */}
            <div className="text-center space-y-6 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
              <div className="relative mx-auto w-48 h-48 group">
                <div className="w-full h-full bg-gradient-to-br from-green-800/50 to-teal-800/50 rounded-3xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 border border-gray-700">
                  <img
                    src="/roll.jpg?height=150&width=150"
                    alt="Rouler - Step 3"
                    className="w-32 h-32 object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  3
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-green-400/30 rounded-full animate-spin-slow"></div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">Roll</h3>
                <p className="text-gray-300 leading-relaxed">
                Cruise safely and freely.
                Comfortable, stylish e-bikes take you wherever you want at your own pace, your own time.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="transform hover:scale-105 transition-all duration-200 bg-[#5200FF] text-white"
              onClick={() => scrollToSection("download")}
            >
              Commencer Maintenant
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download"className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5200FF]/5 to-[#CBB2FF]/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Your ride. Your route. Your Tunisia.</h2>
              
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="transform hover:scale-105 transition-all duration-200 bg-[#5200FF] text-white"
              >
                <Apple className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              <Button
                size="lg"
                className="transform hover:scale-105 transition-all duration-200 bg-[#FF904C] text-white"
              >
                <Play className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" style={{ color: '#5AD363' }} />
                <span className="text-white">Free to download</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" style={{ color: '#5AD363' }} />
                <span className="text-white">No ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5" style={{ color: '#5AD363' }} />
                <span className="text-white">Regular updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t" style={{ background: '#18122B', borderColor: '#310099', color: '#CBB2FF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                  <img
                      src="/logo-white.svg"
                      alt="App Screenshot"
                      className="w-[44px] object-contain"
                  />
                <span className="text-xl font-bold" style={{ color: '#CBB2FF' }}>Darraja</span>
              </div>
              <p style={{ color: '#CBB2FF' }}>
                Discover Tunisia with Darraja, the effortless way to explore, ride, and connect with local gems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Updates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Beta
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Bug Report
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p style={{ color: '#CBB2FF' }}>© 2025 Darraja. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  )
}
