import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Simple Header Section */}
      <section className="pt-section pb-8">
        <div className="container-payai">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-heading md:text-display font-semibold text-midnight mb-6">
              Terms of Service
            </h1>
            <p className="text-body-lg md:text-body-large text-gray-600 mb-4">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-body text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-8 pb-section">
        <div className="container-payai">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Agreement to Terms */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                1. Agreement to Terms
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                By accessing and using PayAI's services, you agree to be bound
                by these Terms of Service and all applicable laws and
                regulations. If you do not agree with any of these terms, you
                are prohibited from using or accessing this site.
              </p>
            </div>

            {/* Use License */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                2. Use License
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-6 leading-relaxed">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on PayAI's website for
                personal, non-commercial transitory viewing only. This is the
                grant of a license, not a transfer of title, and under this
                license you may not:
              </p>
              <ul className="space-y-3">
                <li className="text-body text-gray-600">
                  • Modify or copy the materials
                </li>
                <li className="text-body text-gray-600">
                  • Use the materials for any commercial purpose or for any
                  public display
                </li>
                <li className="text-body text-gray-600">
                  • Attempt to decompile or reverse engineer any software
                  contained on PayAI's website
                </li>
                <li className="text-body text-gray-600">
                  • Remove any copyright or other proprietary notations from the
                  materials
                </li>
                <li className="text-body text-gray-600">
                  • Transfer the materials to another person or mirror the
                  materials on any other server
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                3. Disclaimer
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                The materials on PayAI's website are provided on an 'as is'
                basis. PayAI makes no warranties, expressed or implied, and
                hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of
                merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </div>

            {/* Limitations */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                4. Limitations
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                In no event shall PayAI or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on PayAI's website, even
                if PayAI or a PayAI authorized representative has been notified
                orally or in writing of the possibility of such damage.
              </p>
            </div>

            {/* Accuracy of Materials */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                5. Accuracy of Materials
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                The materials appearing on PayAI's website could include
                technical, typographical, or photographic errors. PayAI does not
                warrant that any of the materials on its website are accurate,
                complete or current. PayAI may make changes to the materials
                contained on its website at any time without notice.
              </p>
            </div>

            {/* Links */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                6. Links
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                PayAI has not reviewed all of the sites linked to its website
                and is not responsible for the contents of any such linked site.
                The inclusion of any link does not imply endorsement by PayAI of
                the site. Use of any such linked website is at the user's own
                risk.
              </p>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                7. Modifications
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                PayAI may revise these terms of service for its website at any
                time without notice. By using this website you are agreeing to
                be bound by the then current version of these terms of service.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                8. Governing Law
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in
                accordance with the laws and you irrevocably submit to the
                exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                9. Contact Information
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-4 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <p className="text-body font-medium text-midnight">
                Email: legal@payai.network
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
