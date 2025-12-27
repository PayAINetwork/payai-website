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
              Terms and Conditions
            </h1>
            <p className="text-body-lg md:text-body-large text-gray-600 mb-4">
              Please read these terms carefully before using our services.
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
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed mb-4">
                These Terms and Conditions ("Terms") govern access to and use of the software, services, and websites provided by PayAI Network, LLC, a Delaware limited liability company ("PayAI," "we," "us," or "our"). By accessing or using any PayAI offering, you ("Customer" or "you") agree to be bound by these Terms.
              </p>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed font-semibold">
                IF YOU DO NOT AGREE TO THESE TERMS, DO NOT ACCESS OR USE THE SERVICES.
              </p>
            </div>

            {/* Definitions */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                1. Definitions
              </h2>
              <div className="space-y-4">
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">1.1 "Services"</span> means PayAI's hosted platform, APIs, downloadable tools and software, mobile applications, documentation, and any other products or services made available by PayAI, whether paid, free, subscription-based, or usage-based.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">1.2 "Order"</span> means any online checkout, click-through order, subscription selection, pricing page, or separate ordering document referencing these Terms.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">1.3 "Customer Data"</span> means data, content, code, files, or materials that Customer submits to PayAI or processes through the Services.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">1.4 "Feedback"</span> means suggestions, improvements, or input provided by Customer relating to the Services.
                </p>
              </div>
            </div>

            {/* Accounts and Access */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                2. Accounts and Access
              </h2>
              <div className="space-y-4">
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">2.1 Registration.</span> Customer is responsible for maintaining account security. Customer is responsible for all activity occurring under its account, as well as accuracy and completeness.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">2.2 Eligibility.</span> Customer represents that it has legal capacity to enter into these Terms. If Customer is an organization, the individual accepting these Terms represents that they have authority to bind the organization.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">2.3 License.</span> Subject to these Terms and any applicable agreement, payment terms, and laws, PayAI grants Customer a non-exclusive, non-transferable, revocable license to access and use the Services for Customer's internal business purposes or personal use, as applicable.
                </p>
              </div>
            </div>

            {/* Acceptable Use */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                3. Acceptable Use
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 mb-4 leading-relaxed">
                Customer shall not, and shall not permit anyone to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-body text-gray-600">
                  (a) use the Services in violation of any applicable laws or regulations;
                </li>
                <li className="text-body text-gray-600">
                  (b) attempt to gain unauthorized access to the Services or related systems;
                </li>
                <li className="text-body text-gray-600">
                  (c) reverse engineer, decompile, or create derivative works of the Services except to the extent permitted by law;
                </li>
                <li className="text-body text-gray-600">
                  (d) interfere with or disrupt the Services or their security features;
                </li>
                <li className="text-body text-gray-600">
                  (e) resell, sublicense, or commercially exploit the Services except as expressly permitted; or
                </li>
                <li className="text-body text-gray-600">
                  (f) submit or transmit any malware, harmful code, or infringing, illegal, or abusive content.
                </li>
              </ul>
            </div>

            {/* Orders, Fees, and Payment */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                4. Orders, Fees, and Payment
              </h2>
              <div className="space-y-4">
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">4.1 Fees.</span> Fees for the Services are set forth in the applicable Order or pricing page or as otherwise applicable for a given Service. Fees may include subscription charges, usage-based charges, or one-time fees.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">4.2 Billing and Renewal.</span> Subscriptions renew automatically for successive terms unless cancelled at least 30 days prior to the renewal date pursuant to the applicable Service's cancellation terms. Customer authorizes PayAI and its third-party payment processors to charge all applicable fees to Customer's selected payment method.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">4.3 Payment Terms.</span> All fees are due immediately upon invoicing or as otherwise specified. Late amounts may accrue interest at 1.5% per month (or the maximum allowed by law).
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">4.4 Taxes.</span> Fees are exclusive of all taxes, which shall be the responsibility of Customer, except for taxes on PayAI's income.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">4.5 No Refunds.</span> Except as expressly required by law, all fees are non-refundable.
                </p>
              </div>
            </div>

            {/* Customer Data */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                5. Customer Data
              </h2>
              <div className="space-y-4">
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">5.1 Ownership.</span> Customer retains all rights in Customer Data. Customer grants PayAI a worldwide, non-exclusive license to host, store, process, and transmit Customer Data to provide and improve the Services.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">5.2 Data Responsibility.</span> Customer is solely responsible for Customer Data and its compliance with applicable laws.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">5.3 Privacy Policy.</span> Use of the Services and these Terms are subject to PayAI's Privacy Policy, which is incorporated by reference.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                6. Intellectual Property
              </h2>
              <div className="space-y-4">
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">6.1 Company IP.</span> PayAI retains all rights, title, and interest in the Services, including all related intellectual property and derivative works. These Terms do not grant Customer any ownership interest.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">6.2 Feedback.</span> Customer grants PayAI a perpetual, irrevocable, royalty-free license to use Feedback for any purpose without restriction.
                </p>
              </div>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                7. Confidentiality
              </h2>
              <div className="space-y-4">
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">7.1 Definition.</span> "Confidential Information" means information disclosed by one party to the other that is identified as confidential or would reasonably be understood to be confidential.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">7.2 Obligations.</span> Each party shall use commercially reasonable efforts to protect the other party's Confidential Information and shall not disclose it except to employees, contractors, or agents who need to know such information and are subject to confidentiality obligations.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">7.3 Exclusions.</span> Confidential Information does not include information that is publicly known, independently developed, lawfully obtained from a third party, or required to be disclosed by law (with notice, where legally permitted).
                </p>
              </div>
            </div>

            {/* Publicity */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                8. Publicity
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                Customer grants PayAI the right to use Customer's name and logo for marketing and promotional purposes. Customer may withdraw this consent upon written notice, after which PayAI will make commercially reasonable efforts to cease new uses.
              </p>
            </div>

            {/* Term and Termination */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                9. Term and Termination
              </h2>
              <div className="space-y-4">
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">9.1 Term.</span> These Terms commence upon Customer's first use of the Services and continue until terminated.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">9.2 Termination for Cause.</span> Either party may terminate these Terms immediately upon written notice if the other party materially breaches these Terms and fails to cure such breach within 30 days of notice.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">9.3 Termination for Convenience.</span> Customer may terminate its account at any time by following account termination instructions. Prepaid fees are not refundable.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">9.4 Effect of Termination.</span> Upon termination, Customer's rights to access the Services cease. PayAI may delete Customer Data after 30 days.
                </p>
              </div>
            </div>

            {/* Warranties; Disclaimers */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                10. Warranties; Disclaimers
              </h2>
              <div className="space-y-4">
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">10.1 Customer Warranties.</span> Customer represents that it has all necessary rights to use and submit Customer Data.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">10.2 Services Provided "AS IS."</span> To the fullest extent permitted by law, the Services are provided "AS IS" and "AS AVAILABLE," without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, non-infringement, or uninterrupted availability.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                11. Indemnification
              </h2>
              <div className="space-y-4">
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">11.1 By Customer.</span> Customer shall indemnify, defend, and hold harmless PayAI from all claims, losses, liabilities, damages, and expenses (including reasonably attorney's fees) arising from: (a) Customer Data; (b) Customer's use of the Services in violation of law or these Terms; or (c) Customer's infringement or misappropriation of third-party rights.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">11.2 By PayAI.</span> PayAI will defend Customer against third-party claims alleging that the Services, as provided and when used in accordance with these Terms, infringe a third-party U.S. patent, copyright, or trademark, but only to the extent PayAI had actual knowledge at the time of delivery that the Services infringed such rights.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">11.3 Exclusions.</span> PayAI has no obligation nor liability whatsoever for claims arising from: (a) Customer Data or modifications; (b) combination of the Services with other products not provided by PayAI; (c) use after PayAI notifies Customer to cease use.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">11.4 Remedies.</span> PayAI may, at its discretion, (a) procure rights for continued use; (b) replace or modify the Services; or (c) terminate the affected portion of the Services and refund unused prepaid fees.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                12. Limitation of Liability
              </h2>
              <div className="space-y-4">
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">12.1 Exclusion of Indirect Damages.</span> Neither party is liable for indirect, incidental, consequential, punitive, or special damages.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">12.2 Liability Cap.</span> Except for Customer's indemnity obligations, each party's aggregate liability is limited to the fees paid or payable by Customer in the 12 months preceding the event giving rise to liability.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">12.3 Multiple Claims.</span> Multiple claims do not enlarge the cap.
                </p>
              </div>
            </div>

            {/* Arbitration and Dispute Resolution */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                13. Arbitration and Dispute Resolution
              </h2>
              <div className="space-y-4">
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">13.1 Arbitration.</span> Any dispute arising under these Terms shall be finally resolved by binding arbitration administered by the American Arbitration Association ("AAA") under its Consumer Arbitration Rules (for individual users) or Commercial Arbitration Rules (for business users). Proceedings will be conducted by a single arbitrator, and may be performed remotely as provided by the AAA.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">13.2 Informal Resolution.</span> Before filing for arbitration, the parties will attempt to resolve disputes in good faith for at least 30 days.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">13.3 Equitable Relief.</span> Either party may seek injunctive or equitable relief in any court of competent jurisdiction for claims relating to intellectual property or Confidential Information.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">13.4 Class Action and Jury Trial Waiver.</span> Disputes shall be conducted only on an individual basis, and you expressly waive any right to file a class action or seek relief on a class basis, and you waive any right to a jury trial.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                14. Governing Law
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                These Terms are governed by the laws of the State of Delaware, without regard to conflict-of-laws principles.
              </p>
            </div>

            {/* Changes to the Terms */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                15. Changes to the Terms
              </h2>
              <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                PayAI may update these Terms periodically. The "Last Updated" date will reflect changes. Continued use of the Services after changes constitutes acceptance.
              </p>
            </div>

            {/* Miscellaneous */}
            <div>
              <h2 className="text-subheading md:text-heading font-semibold text-midnight mb-6">
                16. Miscellaneous
              </h2>
              <div className="space-y-4">
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">16.1 Assignment.</span> Customer may not assign these Terms without PayAI's written consent. PayAI may assign these Terms freely.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">16.2 Severability.</span> If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">16.3 Notices.</span> Notices to PayAI must be sent to: legal@payai.network. Notices to Customer may be sent to the email associated with Customer's account.
                </p>
                <p className="text-body md:text-body-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold">16.4 Entire Agreement.</span> These Terms and any referenced policies or Orders constitute the entire agreement between the parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
