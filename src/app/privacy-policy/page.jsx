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
              Last Updated: 10 December 2025
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
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                PayAI Network, LLC ("PayAI," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, disclose, and safeguard information when you visit our website, use our software or services, or otherwise interact with us (collectively, the "Services").
              </p>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed mt-4">
                By using the Services, you consent to the practices described in this Privacy Policy.
              </p>
            </div>

            {/* Data We Collect */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                1. Data We Collect
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-6 leading-relaxed">
                We may collect, use, store, and transfer the following categories of personal data:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    1.1 Identity Data
                  </h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-body text-gray-600">– First name</li>
                    <li className="text-body text-gray-600">– Last name</li>
                    <li className="text-body text-gray-600">– Username or similar identifier</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    1.2 Contact Data
                  </h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-body text-gray-600">– Email address</li>
                    <li className="text-body text-gray-600">– Telephone number</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    1.3 Technical Data
                  </h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-body text-gray-600">– IP address</li>
                    <li className="text-body text-gray-600">– Login data</li>
                    <li className="text-body text-gray-600">– Browser type and version</li>
                    <li className="text-body text-gray-600">– Time zone setting and location</li>
                    <li className="text-body text-gray-600">– Browser plug-in types and versions</li>
                    <li className="text-body text-gray-600">– Operating system and platform</li>
                    <li className="text-body text-gray-600">– Device and technology identifiers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    1.4 Usage Data
                  </h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-body text-gray-600">– Information about how you use our website, products, APIs, and other Services</li>
                    <li className="text-body text-gray-600">– Session information, page interactions, referring URLs, and similar behavioral metrics</li>
                  </ul>
                </div>
              </div>
              <p className="text-body md:text-body-lg text-gray-600 mt-6 leading-relaxed">
                We may also collect non-personal, aggregated, or de-identified information, which is not considered personal data.
              </p>
            </div>

            {/* How We Collect Data */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                2. How We Collect Data
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-4 leading-relaxed">
                We collect personal data through:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    2.1 Direct Interactions
                  </h4>
                  <p className="text-body text-gray-600 mb-2">
                    You provide Identity Data and Contact Data when you:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-body text-gray-600">– Create an account</li>
                    <li className="text-body text-gray-600">– Subscribe to Services</li>
                    <li className="text-body text-gray-600">– Request support</li>
                    <li className="text-body text-gray-600">– Communicate with us</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    2.2 Automated Technologies
                  </h4>
                  <p className="text-body text-gray-600">
                    We automatically collect Technical Data and Usage Data through cookies, server logs, analytics tools, and similar technologies.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    2.3 Third Parties
                  </h4>
                  <p className="text-body text-gray-600">
                    We may receive Technical Data or Usage Data from analytics providers, hosting providers, and payment processors.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Personal Data */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                3. How We Use Your Personal Data
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-4 leading-relaxed">
                We use personal data for the following purposes:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    3.1 Service Delivery
                  </h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-body text-gray-600">– Providing, operating, and maintaining the Services</li>
                    <li className="text-body text-gray-600">– Managing user accounts and authentication</li>
                    <li className="text-body text-gray-600">– Processing transactions</li>
                    <li className="text-body text-gray-600">– Delivering software updates and improvements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    3.2 Communication
                  </h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-body text-gray-600">– Sending notices related to your account or transactions</li>
                    <li className="text-body text-gray-600">– Providing technical or administrative support</li>
                    <li className="text-body text-gray-600">– Responding to inquiries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    3.3 Service Improvement
                  </h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-body text-gray-600">– Monitoring and analyzing usage</li>
                    <li className="text-body text-gray-600">– Developing new functionality</li>
                    <li className="text-body text-gray-600">– Enhancing security, troubleshooting, and debugging</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    3.4 Legal and Compliance
                  </h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-body text-gray-600">– Enforcing our Terms and Conditions</li>
                    <li className="text-body text-gray-600">– Protecting the rights, property, or safety of PayAI and users</li>
                    <li className="text-body text-gray-600">– Complying with legal obligations, court orders, or law enforcement requests</li>
                  </ul>
                </div>
              </div>
              <p className="text-body md:text-body-lg text-gray-600 mt-6 leading-relaxed font-semibold">
                We do not sell personal data.
              </p>
            </div>

            {/* Legal Bases */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                4. Legal Bases (Where Applicable)
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                Where privacy laws require a legal basis (e.g., GDPR), we rely on:
              </p>
              <ul className="space-y-3 mt-4 ml-6">
                <li className="text-body text-gray-600">– Performance of a contract (account management, providing the Services)</li>
                <li className="text-body text-gray-600">– Legitimate interests (service improvement, security, analytics)</li>
                <li className="text-body text-gray-600">– Consent (where expressly obtained)</li>
                <li className="text-body text-gray-600">– Compliance with legal obligations</li>
              </ul>
            </div>

            {/* Cookies and Other Technologies */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                5. Cookies and Other Technologies
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-4 leading-relaxed">
                We use cookies and similar technologies to:
              </p>
              <ul className="space-y-3 mb-4 ml-6">
                <li className="text-body text-gray-600">– Authenticate users</li>
                <li className="text-body text-gray-600">– Remember preferences</li>
                <li className="text-body text-gray-600">– Analyze usage patterns</li>
                <li className="text-body text-gray-600">– Improve performance and functionality</li>
              </ul>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                Users may adjust browser settings to refuse cookies, but some parts of the Services may not function properly.
              </p>
            </div>

            {/* Disclosure of Personal Data */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                6. Disclosure of Personal Data
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-4 leading-relaxed">
                We may share personal data with:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    6.1 Service Providers
                  </h4>
                  <p className="text-body text-gray-600">
                    Third-party vendors supporting hosting, analytics, payment processing, customer support, email delivery, and similar services.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    6.2 Business Transfers
                  </h4>
                  <p className="text-body text-gray-600">
                    Personal data may transfer as part of a merger, acquisition, financing, or sale of assets, subject to confidentiality obligations.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-midnight mb-2">
                    6.3 Legal Requirements
                  </h4>
                  <p className="text-body text-gray-600">
                    We may disclose data to comply with laws, regulations, legal processes, or governmental requests.
                  </p>
                </div>
              </div>
              <p className="text-body md:text-body-lg text-gray-600 mt-6 leading-relaxed">
                We do not permit service providers to use personal data for their own independent purposes.
              </p>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                7. International Transfers
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                We may transfer personal data to jurisdictions in which our service providers operate. When required, we use reasonable safeguards such as contractual protections, including standard contractual clauses.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                8. Data Security
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                We implement commercially reasonable administrative, technical, and physical safeguards designed to protect personal data from unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-body md:text-body-lg text-gray-600 mt-4 leading-relaxed">
                No system is perfectly secure; we cannot guarantee security.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                9. Data Retention
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                We retain personal data only as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.
              </p>
              <p className="text-body md:text-body-lg text-gray-600 mt-4 leading-relaxed">
                Account-related data may be retained for a reasonable period after account closure, subject to deletion or anonymization thereafter.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                10. Children's Privacy
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                The Services are not directed to children under 16. We do not knowingly collect personal data from children under 16. If we learn that we have collected such data, we will delete it.
              </p>
            </div>

            {/* Your Privacy Rights */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                11. Your Privacy Rights
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-4 leading-relaxed">
                Depending on your jurisdiction, you may have certain rights, including:
              </p>
              <ul className="space-y-3 mb-4 ml-6">
                <li className="text-body text-gray-600">– Access to your personal data</li>
                <li className="text-body text-gray-600">– Correction or update of your data</li>
                <li className="text-body text-gray-600">– Deletion of your data</li>
                <li className="text-body text-gray-600">– Objection to or restriction of certain processing</li>
                <li className="text-body text-gray-600">– Withdrawal of consent where applicable</li>
              </ul>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                Requests may be submitted to legal@payai.network
              </p>
              <p className="text-body md:text-body-lg text-gray-600 mt-4 leading-relaxed">
                We may need to verify your identity before responding.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                12. Third-Party Links
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of such third parties.
              </p>
            </div>

            {/* Changes to this Privacy Policy */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                13. Changes to this Privacy Policy
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                We may modify this Privacy Policy from time to time. The "Last Updated" date will reflect the effective version. Continued use of the Services constitutes acceptance of changes.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                14. Contact Us
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-4 leading-relaxed">
                For questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-body font-medium text-midnight">
                legal@payai.network
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
