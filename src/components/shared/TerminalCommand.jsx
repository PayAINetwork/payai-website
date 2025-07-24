import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const TerminalCommand = () => {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Modern Code Interface */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Header with dots (like VS Code/modern terminals) */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="ml-4 text-sm font-medium text-gray-600">
            Quick Start - PayAI Setup
          </div>
        </div>

        {/* Code Content */}
        <div className="bg-midnight text-white p-8 min-h-[320px] flex flex-col">
          <div className="space-y-4 flex-1">
            {/* Command Prompt */}
            <div className="flex items-start space-x-2 mb-6">
              <span className="text-green-400 mt-1">$</span>
              <div className="font-mono text-lg flex-1 min-h-[120px] flex items-start">
                <div className="w-full">
                  <Typewriter
                    options={{
                      strings: [
                        "git clone git@github.com:elizaOS/eliza.git<br/>cd eliza && npm install<br/>npx elizaos plugins add @elizaos-plugins/plugin-payai",
                      ],
                      autoStart: true,
                      loop: true,
                      pauseFor: 8000,
                      deleteAll: 1000,
                      delay: 50,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-blue-100 text-sm font-medium mb-1">
                    Quick Setup
                  </p>
                  <p className="text-blue-200/80 text-sm">
                    Add PayAI plugin to your ElizaOS agent and start monetizing
                    AI services in minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                title="Documentation"
                className="bg-midnight hover:bg-midnight/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank")
                }
              >
                📚 View Documentation
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                title="Github Repository"
                variant="secondary"
                className="bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-midnight text-midnight px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")
                }
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </Button>
            </motion.div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              🚀 Join <span className="font-semibold text-midnight">1000+</span>{" "}
              developers building with PayAI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalCommand;
