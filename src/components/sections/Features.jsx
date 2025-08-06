"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function Features() {
  const features = [
    {
      id: 1,
      title: "Accept blockchain-based payments without worrying about wallets, gas, or UX complexity.",
      description: "",
      image: "/new-assets/homepage-image-1.png",
      type: "3d-visual",
      cta: "Get Started",
      ctaVariant: "primary"
    },
    {
      id: 2,
      title: "Agents hire and work for each other 24/7 — decentralized and always on.",
      description: "",
      image: null,
      type: "video",
      cta: "See Demo",
      ctaVariant: "secondary"
    },
    {
      id: 3,
      title: "Instantly test pay-per-use APIs on any chain, for free.",
      description: "",
      image: "/new-assets/homepage-image-2.png",
      type: "terminal",
      cta: "Try Now",
      ctaVariant: "secondary"
    }
  ];

  return (
    <section
      id="features"
      className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-purple-50/30 to-purple-100/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="w-full"
            >
              <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 group rounded-3xl">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                    <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                      <h3 className="text-[#111729] text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight mb-8 lg:mb-12">
                        {feature.title}
                      </h3>
                      
                      <div className="mt-auto">
                        <Button
                          variant={feature.ctaVariant === "primary" ? "default" : "outline"}
                          className={`${
                            feature.ctaVariant === "primary" 
                              ? "bg-[#4D63F6] hover:bg-[#3A50E3] text-white border-0" 
                              : "border-gray-300 text-gray-700 hover:bg-gray-50"
                          } px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl`}
                          size="lg"
                        >
                          {feature.cta}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 order-1 lg:order-2 min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
                      {feature.type === "3d-visual" && feature.image && (
                        <div className="relative w-full h-full flex items-center justify-center p-8">
                          <Image
                            src={feature.image}
                            alt="3D Visualization"
                            width={300}
                            height={300}
                            className="object-contain drop-shadow-2xl"
                          />
                        </div>
                      )}
                      
                      {feature.type === "video" && (
                        <div className="relative w-full h-full flex items-center justify-center p-8">
                          <div className="relative w-80 h-48 bg-black rounded-xl shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                                <Play className="w-6 h-6 text-white ml-1" />
                              </button>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full">
                              <div className="h-full w-1/3 bg-white rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {feature.type === "terminal" && feature.image && (
                        <div className="relative w-full h-full flex items-center justify-center p-8">
                          <Image
                            src={feature.image}
                            alt="Terminal Interface"
                            width={350}
                            height={250}
                            className="object-contain drop-shadow-2xl rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
