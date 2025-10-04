"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Users,
  TrendingUp,
  Target,
  ArrowRight,
  CheckCircle,
  Search,
  Brain,
  PhoneCall,
  Globe,
  Languages,
  Shield,
  Heart,
  Zap,
  TrendingDown,
  ChevronLeft,
  ChevronRight,
  Banknote,
  HandHeart,
  Building,
  Star,
  Flag,
} from "lucide-react";
import LandingNavbar from "@/components/landing/LandingNavbar";
import Threads from "@/components/landing/Threads";

import { Badge } from "@/components/ui/badge";
import RotatingText from "@/components/landing/RotatingText";
import { GradientBars } from "@/components/landing/GradientBg";
import CTAButton from "@/components/landing/CTAButton";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function ReachWiseLanding() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const ImageCarousel = () => {
    const images = [
      {
        src: "https://i.postimg.cc/2S0yZ1sm/Whats-App-Image-2025-07-13-at-00-14-02.jpg",
        alt: "Breaking barriers to financial inclusion",
        caption: "Bridging the gap between banking and underserved communities",
      },
      {
        src: "https://i.postimg.cc/nhFMr4w0/Whats-App-Image-2025-07-13-at-00-49-00.jpg",
        alt: "Overcoming language barriers",
        caption: "Speaking your language, understanding your needs",
      },
      {
        src: "https://i.postimg.cc/VN56BYwt/Whats-App-Image-2025-07-13-at-00-53-51.jpg",
        alt: "Promoting economic growth",
        caption: "Empowering lives through accessible financial services",
      },
    ];

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);

      return () => clearInterval(timer);
    }, []);

    const goToPrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
      <div className="relative w-full h-full">
        <div className="relative overflow-hidden rounded-xl shadow-2xl h-full">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0 relative h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const handleFeatureClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="min-h-screen relative">
      <LandingNavbar />

      <div id="hero" className="relative overflow-hidden pt-20 bg-gradient-to-br from-slate-50 via-blue-50 via-purple-50 to-pink-50 min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        </div>
        <GradientBars />
        <div className="relative z-20 container mx-auto px-6">
          <div className="flex flex-col items-center justify-center mt-20 mb-60">
            <div className="text-center max-w-3xl">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <Badge
                  variant="outline"
                  className="relative mb-5 px-6 py-3 text-base font-bold border-2 border-gradient-to-r from-amber-400 to-orange-600 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600 bg-white/90 backdrop-blur inline-flex items-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Star className="h-5 w-5 mr-2 text-yellow-500 animate-spin" />
                  🇮🇳 Empowering Digital India's Financial Future
                </Badge>
              </div>
              <div className="mb-8 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-lg blur opacity-30 animate-pulse"></div>
                <h1 className="relative text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-amber-400 via-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
                    भारत वाणी
                  </span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-slate-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
                    Bharat Vani
                  </span>
                </h2>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                  <div className="h-2 w-2 bg-yellow-400 rounded-full animate-ping"></div>
                  <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <h3 className="relative text-4xl md:text-6xl font-black mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-lg">
                    Banking for Every Indian
                  </span>
                </h3>
                <div className="flex items-center justify-center gap-3 mt-6">
                  <span className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">in</span>
                  <RotatingText
                    texts={[
                      "हिन्दी",
                      "বাংলা",
                      "தமிழ்",
                      "తెলుగు",
                      "मराठी",
                      "ગુજરાતી",
                      "ಕನ್ನಡ",
                      "മലയാളം",
                    ]}
                    mainClassName="inline-block px-4 py-2 rounded-lg text-blue-900"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-1"
                    elementLevelClassName="leading-relaxed"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </div>
              </div>
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 rounded-3xl blur-xl opacity-30"></div>
                <p className="relative text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-semibold bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
                  <span className="text-3xl mr-2">🚀</span>
                  <strong className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent text-2xl">70% of India's population</strong> 
                  <span className="text-gray-800"> still lacks access to basic financial services.</span><br/><br/>
                  <span className="text-3xl mr-2">✨</span>
                  <strong className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent text-2xl">Bharat Vani</strong>
                  <span className="text-gray-800"> revolutionizes banking by connecting every Indian through </span>
                  <strong className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">AI-powered intelligence</strong>
                  <span className="text-gray-800"> and </span>
                  <strong className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">multilingual communication</strong><br/><br/>
                  <span className="text-3xl mr-2">🎯</span>
                  <strong className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-xl">
                    Making financial inclusion a reality for every Indian, everywhere.
                  </strong>
                </p>
              </div>
              <div className="flex flex-wrap gap-6 justify-center mb-12">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <Badge
                    variant="outline"
                    className="relative px-8 py-4 text-lg font-bold border-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:-rotate-1"
                  >
                    <TrendingDown className="h-6 w-6 mr-3 animate-bounce" />
                    85% Success Rate
                  </Badge>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <Badge
                    variant="outline"
                    className="relative px-8 py-4 text-lg font-bold border-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:rotate-1"
                  >
                    <Languages className="h-6 w-6 mr-3 animate-pulse" />
                    11+ Indian Languages
                  </Badge>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                  <Badge
                    variant="outline"
                    className="relative px-8 py-4 text-lg font-bold border-0 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:-rotate-1"
                  >
                    <Target className="h-6 w-6 mr-3 animate-spin" />
                    AI-Powered Precision
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 justify-center mt-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:blur-lg"></div>
                  <button
                    onClick={() => handleFeatureClick("/dashboard")}
                    className="relative px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-3 group"
                  >
                    <Brain className="h-6 w-6 group-hover:animate-pulse" />
                    🤖 Start AI Intelligence
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 group-hover:blur-lg"></div>
                  <button
                    onClick={() => handleFeatureClick("/products")}
                    className="relative px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl flex items-center gap-3 group"
                  >
                    <PhoneCall className="h-6 w-6 group-hover:animate-bounce" />
                    🗣️ Explore Voice Solutions
                    <Globe className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add this section before the Feature Cards section */}
      <div id="challenges">
        <ContainerScroll
          titleComponent={
            <div className="max-w-3xl mx-auto mb-8 ">
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                <Badge
                  variant="outline"
                  className="relative mb-6 px-8 py-4 text-lg font-bold border-2 bg-gradient-to-r from-red-50 to-orange-50 border-red-300 text-red-800 mx-auto shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <HandHeart className="h-6 w-6 mr-3 animate-pulse" />
                  💪 The Challenge We're Conquering
                </Badge>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
                  Breaking Banking Barriers
                </span>
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl leading-relaxed font-semibold text-gray-800">
                  <span className="text-3xl mr-2">🎆</span>
                  Witness how <strong className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent text-2xl">Bharat Vani</strong> is revolutionizing financial services by making banking
                  accessible to millions of underserved Indians through cutting-edge
                  <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI technology</strong> and deep cultural understanding.
                </p>
              </div>
            </div>
          }
        >
          <ImageCarousel />
        </ContainerScroll>
      </div>

      <div id="solutions" className="relative z-10 container mx-auto px-6 py-16 mt-[-10rem]">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="relative mb-8">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            <Badge
              variant="outline"
              className="relative mb-8 px-10 py-5 text-xl font-bold border-2 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-400 text-blue-800 mx-auto inline-flex items-center shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Zap className="h-7 w-7 mr-3 animate-bounce text-yellow-500" />
              ⚡ Our Revolutionary Solutions
            </Badge>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent drop-shadow-xl animate-gradient">
              AI-Powered Financial Revolution
            </span>
          </h2>
          <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl leading-relaxed font-semibold text-gray-800">
              <span className="text-3xl mr-2">🚀</span>
              Our innovative platform revolutionizes how financial institutions connect with customers through 
              <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">data-driven insights</strong> and 
              <strong className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">multilingual AI capabilities</strong>.
            </p>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our innovative platform helps financial institutions bridge
            communication gaps and expand their reach through data-driven
            insights and multilingual capabilities.
          </p>
        </div>

        <div className="relative mx-auto mb-16">
          <div className="absolute inset-0 z-0 pointer-events-none w-[120%] ml-[-10%] h-full">
            <Threads color={[0.8, 0.4, 0.1]} amplitude={1} distance={0.5} />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <article
              className="bg-background flex w-full flex-col items-start justify-start border-4 border-black p-6 shadow-[8px_8px_0_0_#000] transition-shadow duration-300 hover:shadow-[12px_12px_0_0_#000] dark:border-white dark:shadow-[8px_8px_0_0_#fff] dark:hover:shadow-[12px_12px_0_0_#fff] min-h-[450px]"
              onClick={() => handleFeatureClick("/dashboard")}
            >
              <div className="flex flex-col h-full w-full">
                <div className="mb-4 flex items-center gap-x-2 text-xs">
                  <div className="text-foreground border-2 border-black bg-orange-500 px-3 py-1 font-bold">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div className="border-border text-foreground border-2 bg-orange-500 px-3 py-1 font-bold">
                    FinSutra
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-foreground text-2xl leading-7 font-black uppercase mb-4">
                    Intelligent Product Recommendations
                  </h3>
                  <p className="text-md border-l-4 border-orange-500 pl-4 leading-6 text-gray-800 mb-6">
                    AI-powered insights that match suitable banking products to
                    underserved communities based on their unique needs and
                    circumstances.
                  </p>
                  <div className="space-y-4">
                    {/* Feature points */}
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-orange-600" />
                      <p className="text-sm text-gray-700">
                        Deep understanding of rural and urban marginalized
                        communities
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-orange-600" />
                      <p className="text-sm text-gray-700">
                        Data-driven recommendations that break traditional
                        banking barriers
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-orange-600" />
                      <p className="text-sm text-gray-700">
                        Track real impact on financial inclusion and SDG-8
                        progress
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article
              className="bg-background flex w-full flex-col items-start justify-start border-4 border-black p-6 shadow-[8px_8px_0_0_#000] transition-shadow duration-300 hover:shadow-[12px_12px_0_0_#000] dark:border-white dark:shadow-[8px_8px_0_0_#fff] dark:hover:shadow-[12px_12px_0_0_#fff] min-h-[450px]"
              onClick={() => handleFeatureClick("/products")}
            >
              <div className="flex flex-col h-full w-full">
                <div className="mb-4 flex items-center gap-x-2 text-xs">
                  <div className="text-foreground border-2 border-black bg-green-500 px-3 py-1 font-bold">
                    <PhoneCall className="h-4 w-4" />
                  </div>
                  <div className="border-border text-foreground border-2 bg-green-500 px-3 py-1 font-bold">
                    VaniConnect
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-foreground text-2xl leading-7 font-black uppercase mb-4">
                    Native Language Communication
                  </h3>
                  <p className="text-md border-l-4 border-green-500 pl-4 leading-6 text-gray-800 mb-6">
                    Break down language barriers that prevent millions from
                    accessing financial services. Communication in their comfort
                    language builds trust and understanding.
                  </p>
                  <div className="space-y-4">
                    {/* Feature points */}
                    <div className="flex items-start gap-3">
                      <Languages className="h-5 w-5 text-green-600" />
                      <p className="text-sm text-gray-700">
                        Support for 11+ Indian languages from Hindi to Tamil
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-green-600" />
                      <p className="text-sm text-gray-700">
                        Reach daily wage workers, farmers, and small business
                        owners
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <p className="text-sm text-gray-700">
                        Build trust through cultural sensitivity and local
                        understanding
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div id="team" className="py-16 text-center">
          <div className="container mx-auto px-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl blur opacity-30 animate-pulse"></div>
              <h2 className="relative text-5xl md:text-7xl font-black">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent drop-shadow-xl">
                  Pixel Pirates
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="w-full py-8 mt-16 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">भारत वाणी</span>
              <span className="text-gray-600">•</span>
              <span className="font-semibold text-gray-800">Bharat Vani</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              Breaking barriers in financial inclusion across India
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by</span>
              <span className="font-medium">Char-মগজ</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}