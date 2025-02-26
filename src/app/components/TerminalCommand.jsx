import { Button } from "@relume_io/relume-ui";
import Typewriter from 'typewriter-effect';

const TerminalCommand = () => {
    return (
      <div className="relative mx-auto max-w-2xl rounded-lg shadow-lg font-mono text-lg overflow-hidden">
        
        {/* Solid black background for text */}
        <div className="bg-midnight text-white relative pt-32">
            <Typewriter
            options={{
                strings: ['pnpm install @elizaos/eliza<br>pnpm add @eliza-plugins/payai'],
                autoStart: true,
                loop: true,
                pauseFor: 20000,
                deleteAll: 1000,
            }}
            />

            {/* CTA buttons */}
            <div className="flex items-center justify-center gap-4 p-16 relative">
                <Button 
                    title="Docs" 
                    className="bg-white text-black" 
                    onClick={() => window.open(process.env.NEXT_PUBLIC_DOCS_URL, "_blank")}
                >
                    Docs
                </Button>
                <Button 
                    title="Github" 
                    className="bg-white text-black" 
                    onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_URL, "_blank")}
                >
                    Github
                </Button>
            </div>
        </div>
      </div>
    );
  };
  
  export default TerminalCommand;