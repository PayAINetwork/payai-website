import FAQItem from "../ui/FAQItem";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema } from "@/lib/schema";
import { FAQ_DATA } from "@/data/faq";


export const FAQ = () => {
  return (
    <section id="faq" className="bg-white">
      {/* SEO: FAQPage structured data mirrors the questions rendered below. */}
      <JsonLd data={buildFaqSchema(FAQ_DATA)} id="ld-faq" />
      <div className="container-payai py-8 lg:py-20 flex flex-col items-center">
        <div className="max-w-[600px] flex flex-col items-center">
          <h2 className="text-2xl lg:text-[36px] text-[#09090B]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm lg:text-lg text-[#0A0A0A]/60 text-center mt-3 lg:mt-4">
            The questions we get most often about x402, supported networks,
            pricing, and integration. For the full protocol reference and
            language-specific quickstarts, see the documentation; agents can
            read the same answers as Markdown at payai.network/llms.txt.
          </p>
        </div>

        <div className="w-full max-w-[800px] mt-6 lg:mt-[60px] flex flex-col">
          {FAQ_DATA.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
