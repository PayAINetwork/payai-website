import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Simple Header Section */}
      <section className="pt-section pb-8">
        <div className="container-payai">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-heading md:text-display font-semibold text-midnight mb-6">
              Privacy Policy
            </h1>
            <p className="text-body-lg md:text-body-large text-gray-600 mb-4">
              Your privacy matters to us. Learn how we collect, use, and protect
              your personal information.
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
            {/* Introduction */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                1. Introduction
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                Welcome to PayAI. We respect your privacy and are committed to
                protecting your personal data. This privacy policy will inform
                you about how we look after your personal data when you visit
                our website and tell you about your privacy rights and how the
                law protects you.
              </p>
            </div>

            {/* Data Collection */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                2. Data We Collect
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-6 leading-relaxed">
                We may collect, use, store and transfer different kinds of
                personal data about you which we have grouped together as
                follows:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    Identity Data
                  </h4>
                  <p className="text-body text-gray-600">
                    Includes first name, last name, username or similar
                    identifier.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    Contact Data
                  </h4>
                  <p className="text-body text-gray-600">
                    Includes email address and telephone numbers.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    Technical Data
                  </h4>
                  <p className="text-body text-gray-600">
                    Includes internet protocol (IP) address, your login data,
                    browser type and version, time zone setting and location,
                    browser plug-in types and versions, operating system and
                    platform, and other technology on the devices you use to
                    access this website.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    Usage Data
                  </h4>
                  <p className="text-body text-gray-600">
                    Includes information about how you use our website, products
                    and services.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Usage */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                3. How We Use Your Data
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-6 leading-relaxed">
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="space-y-3">
                <li className="text-body text-gray-600">
                  • Where we need to perform the contract we are about to enter
                  into or have entered into with you.
                </li>
                <li className="text-body text-gray-600">
                  • Where it is necessary for our legitimate interests and your
                  interests do not override those interests.
                </li>
                <li className="text-body text-gray-600">
                  • Where we need to comply with a legal obligation.
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                4. Data Security
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used or
                accessed in an unauthorized way, altered or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors and other third parties who have
                a business need to know.
              </p>
            </div>

            {/* Legal Rights */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                5. Your Legal Rights
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-6 leading-relaxed">
                Under certain circumstances, you have rights under data
                protection laws in relation to your personal data, including the
                right to:
              </p>
              <ul className="space-y-3">
                <li className="text-body text-gray-600">
                  • Request access to your personal data
                </li>
                <li className="text-body text-gray-600">
                  • Request correction of your personal data
                </li>
                <li className="text-body text-gray-600">
                  • Request erasure of your personal data
                </li>
                <li className="text-body text-gray-600">
                  • Object to processing of your personal data
                </li>
                <li className="text-body text-gray-600">
                  • Request restriction of processing your personal data
                </li>
                <li className="text-body text-gray-600">
                  • Request transfer of your personal data
                </li>
                <li className="text-body text-gray-600">
                  • Right to withdraw consent
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                6. Contact Us
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-4 leading-relaxed">
                If you have any questions about this privacy policy or our
                privacy practices, please contact us at:
              </p>
              <p className="text-body font-medium text-midnight">
                Email: privacy@payai.network
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
