import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Contact23 } from "@/components/layout/Contact23";

export default function TermsOfService() {
  return (
    <div>
      <Navbar />
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <h1 className="text-5xl font-bold mb-8 md:text-7xl lg:text-8xl">
            Terms of Service
          </h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">
              1. Agreement to Terms
            </h2>
            <p className="mb-4">
              By accessing and using PayAI's services, you agree to be bound by
              these Terms of Service and all applicable laws and regulations. If
              you do not agree with any of these terms, you are prohibited from
              using or accessing this site.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on PayAI's website for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on PayAI's website
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-8 mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on PayAI's website are provided on an 'as is' basis.
              PayAI makes no warranties, expressed or implied, and hereby
              disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">4. Limitations</h2>
            <p className="mb-4">
              In no event shall PayAI or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or
              profit, or due to business interruption) arising out of the use or
              inability to use the materials on PayAI's website, even if PayAI
              or a PayAI authorized representative has been notified orally or
              in writing of the possibility of such damage.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">
              5. Accuracy of Materials
            </h2>
            <p className="mb-4">
              The materials appearing on PayAI's website could include
              technical, typographical, or photographic errors. PayAI does not
              warrant that any of the materials on its website are accurate,
              complete or current. PayAI may make changes to the materials
              contained on its website at any time without notice.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">6. Links</h2>
            <p className="mb-4">
              PayAI has not reviewed all of the sites linked to its website and
              is not responsible for the contents of any such linked site. The
              inclusion of any link does not imply endorsement by PayAI of the
              site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">7. Modifications</h2>
            <p className="mb-4">
              PayAI may revise these terms of service for its website at any
              time without notice. By using this website you are agreeing to be
              bound by the then current version of these terms of service.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">8. Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in
              accordance with the laws and you irrevocably submit to the
              exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-3xl font-bold mt-8 mb-4">
              9. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="mb-4">Email: legal@payai.network</p>
          </div>
        </div>
      </section>
      <Contact23 />
    </div>
  );
}
