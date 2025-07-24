"use client";

import { Button } from "@relume_io/relume-ui";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function Tokenomics() {
  // Chart data for Recharts
  const chartData = [
    {
      name: "Community",
      value: 80,
      tokens: "800M",
      color: "#8b5cf6",
    },
    {
      name: "Treasury",
      value: 20,
      tokens: "200M",
      color: "#10b981",
    },
  ];

  const features = [
    { icon: "🚀", title: "Fair Launch", desc: "No pre-mine, no private sales" },
    { icon: "💎", title: "Fixed Supply", desc: "1B tokens maximum, immutable" },
    {
      icon: "🔄",
      title: "Utility Token",
      desc: "Platform fees & agent rewards",
    },
    { icon: "🏛️", title: "Treasury", desc: "20% for ecosystem growth" },
  ];

  return (
    <section
      id="tokenomics"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <Badge
                variant="secondary"
                className="mb-6 text-midnight bg-gray-100 px-4 py-2 rounded-full font-semibold text-sm"
              >
                Token Economics
              </Badge>
              <h1 className="text-midnight text-4xl font-extrabold font-heading md:text-6xl lg:text-7xl mb-6">
                Tokenomics
              </h1>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                  <div className="text-3xl font-bold text-midnight mb-2">
                    1,000,000,000
                  </div>
                  <div className="text-lg font-semibold text-blue-700 mb-2">
                    $PAYAI Tokens
                  </div>
                  <div className="text-sm text-gray-600">
                    Maximum supply - cannot be changed
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed font-body md:text-lg">
                  Fair launched on{" "}
                  <a
                    href="https://pump.fun/coin/E7NgL19JbN8BhUDgWjkH8MtnbhJoaGaWJqosxZZepump"
                    target="_blank"
                    className="text-midnight hover:text-midnight/80 transition-colors underline font-semibold"
                  >
                    pump.fun
                  </a>{" "}
                  with 100% of tokens liquid at launch. No private sales, no
                  pre-mine.
                </p>
              </div>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="font-semibold text-midnight text-sm mb-1">
                    {feature.title}
                  </div>
                  <div className="text-xs text-gray-600">{feature.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  title="Docs"
                  variant="secondary"
                  className="bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-midnight transition-all duration-300 px-6 py-3 font-medium rounded-xl shadow-lg hover:shadow-xl text-midnight"
                  onClick={() =>
                    window.open(
                      process.env.NEXT_PUBLIC_DOCS_URL +
                        "/project-info/fees-and-token-utility",
                      "_blank"
                    )
                  }
                >
                  Read Docs
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  title="Buy Token"
                  className="bg-midnight hover:bg-midnight/90 transition-all duration-300 px-6 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl text-white border-0"
                  onClick={() =>
                    window.open(process.env.NEXT_PUBLIC_BUY_TOKEN_URL, "_blank")
                  }
                >
                  Buy $PAYAI
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Visual representation */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Inspired by Aave's colorful visualization */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-midnight text-xl font-bold mb-6">
                Token Distribution
              </h3>

              {/* Professional Chart with Recharts */}
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        startAngle={90}
                        endAngle={450}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-midnight">1B</div>
                      <div className="text-sm text-gray-600">Total Supply</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-4">
                {chartData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-3"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-medium text-midnight">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-gray-600">
                      {item.value}% ({item.tokens})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Token Utility */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h4 className="text-midnight text-lg font-bold mb-4">
                Token Utility
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">
                    Platform transaction fees
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">
                    Agent marketplace rewards
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">
                    Governance participation
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Ecosystem incentives</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
