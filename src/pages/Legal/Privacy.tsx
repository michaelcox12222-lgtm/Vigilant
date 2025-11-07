import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export function Privacy() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <h1 className="text-4xl sm:text-5xl tracking-tight text-white mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-400 mb-12">
            Last modified: 27 September 2024
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <p className="text-gray-300">
                <span className="text-white">Introduction:</span> Vigilant Inc.
                is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, store, and protect your
                personal information through our products and services,
                including our websites, mobile app, learning environment
                (Academy), and associated services ("Services"). It also applies
                to any Vigilant physical devices and products such as Labels
                ("Products").
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                I. Information We Collect
              </h2>

              <div className="ml-4 space-y-6">
                <div>
                  <h3 className="text-xl text-white mb-3">
                    a. Information You Provide
                  </h3>
                  <ol className="list-decimal ml-6 space-y-3">
                    <li className="text-gray-300">
                      <span className="text-white">Account Information:</span>{" "}
                      Username, email, real name, nicknames, date of birth,
                      telephone number, password, shipping and billing
                      addresses, products activated, and optional photo.
                    </li>
                    <li className="text-gray-300">
                      <span className="text-white">Team Information:</span>{" "}
                      Names, email addresses, phone numbers, and photos (if
                      provided) for each team member.
                    </li>
                    <li className="text-gray-300">
                      <span className="text-white">Identity Verification:</span>{" "}
                      Government-issued ID, selfie, and parental consent
                      information.
                    </li>
                    <li className="text-gray-300">
                      <span className="text-white">
                        Payment and Transaction Information:
                      </span>{" "}
                      Email, name, shipping address, and payment details
                      processed by billing/payment processors.
                    </li>
                    <li className="text-gray-300">
                      <span className="text-white">
                        Optional Account Information:
                      </span>{" "}
                      Customization features within Products.
                    </li>
                    <li className="text-gray-300">
                      <span className="text-white">Other Information:</span>{" "}
                      Survey responses, referral services, help requests, and
                      call records.
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl text-white mb-3">
                    b. Information We Collect Automatically
                  </h3>
                  <ol className="list-decimal ml-6 space-y-3">
                    <li className="text-gray-300">
                      <span className="text-white">Device Information:</span>{" "}
                      Hardware, software, mobile device identifiers, IP address,
                      browser information, and language preference.
                    </li>
                    <li className="text-gray-300">
                      <span className="text-white">
                        Location and Movement Information:
                      </span>{" "}
                      IP address, WiFi, Bluetooth, GPS coordinates, motion
                      information.
                    </li>
                    <li className="text-gray-300">
                      <span className="text-white">Event Information:</span>{" "}
                      Sensory and motion data, including activity type and
                      speed.
                    </li>
                    <li className="text-gray-300">
                      <span className="text-white">
                        Messages and User Content:
                      </span>{" "}
                      In-app messages, feedback, blog posts, comments, and
                      social media tags.
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                II. Information From Third Parties
              </h2>
              <div className="ml-4 space-y-3">
                <p className="text-gray-300">
                  <span className="text-white">
                    a. Smart Partner Platforms:
                  </span>{" "}
                  Location information for any smart devices which you decide to
                  link to Vigilant or the Voyager app.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">b. Social Networks:</span>{" "}
                  Information made public on Social Networks when connected to
                  our Services.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">c. Social Features:</span>{" "}
                  Cookies and information collected by Social Network plugins
                  and widgets.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                III. How We Collect Information
              </h2>
              <p className="text-gray-300 mb-3">
                We use cookies, web beacons, log files, embedded scripts, and
                other tracking technologies to collect usage and device
                information. We also use analytics, advertising, and anti-fraud
                technologies. We use third-party analytics tools to measure
                traffic and usage trends. Advertising partners collect
                additional information for tailored advertising and research
                purposes.
              </p>
              <div className="ml-4 space-y-3">
                <p className="text-gray-300">
                  <span className="text-white">
                    a. Cookies and Similar Technologies:
                  </span>{" "}
                  Cookies personalize your website experience by saving your
                  information. Web beacons track and measure the performance of
                  our Services.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">
                    b. Analytics and Advertising Technologies
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                IV. How We Use Your Information
              </h2>
              <div className="ml-4 space-y-3">
                <p className="text-gray-300">
                  <span className="text-white">
                    a. Administrative Purposes:
                  </span>{" "}
                  Provide and improve our Services, develop new products, ensure
                  security, verify identity, communicate about accounts, process
                  payments, and prevent illegal activities.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">b. Marketing:</span> Send
                  promotional materials, conduct online behavioral advertising,
                  tailor content and advertisements, introduce new features, and
                  inform about special offers.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">
                    c. Research and Development:
                  </span>{" "}
                  Conduct market research, marketing analytics, and internal
                  analysis.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">
                    d. Connecting with Social Media:
                  </span>{" "}
                  Enhance our Services through information from Social Networks.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">
                    e. Information Collected Automatically:
                  </span>{" "}
                  user information, authenticate access, keep track of
                  preferences, provide personalized content, monitor
                  effectiveness, and enhance Services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                V. Information We Disclose to Third Parties
              </h2>
              <div className="ml-4 space-y-3">
                <p className="text-gray-300">
                  <span className="text-white">a. Vigilant Teams:</span>{" "}
                  Disclose information to team members.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">b. Public Websites:</span>{" "}
                  Information posted to blogs or social media is public.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">
                    c. Service Providers and Business Partners:
                  </span>{" "}
                  Share anonymized information for specific features and
                  services.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">d. Business Transactions:</span>{" "}
                  Transfer information in corporate transactions.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">e. Legal Reasons:</span> Disclose
                  information to law enforcement or regulators when required by
                  law.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">
                    f. De-Identified Information:
                  </span>{" "}
                  Share anonymized and aggregated data for research and
                  analytics.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                VI. Your Choices About Your Information
              </h2>
              <div className="ml-4 space-y-3">
                <p className="text-gray-300">
                  <span className="text-white">a. Modifying Information:</span>{" "}
                  Update or delete your account information through the App
                  Settings.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">b. Communications:</span> Opt-out
                  of promotional emails through unsubscribe instructions.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">c. Location Data:</span> Control
                  data collection through App Settings or by uninstalling the
                  app.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">
                    d. Web-Based Personal Information Sales:
                  </span>{" "}
                  Exercise Opt-In and Opt-Out rights via website links.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                VII. Our Policy Towards Children
              </h2>
              <div className="ml-4 space-y-3">
                <p className="text-gray-300">
                  <span className="text-white">
                    a. Setting Up a Child Account:
                  </span>{" "}
                  Parents provide verifiable consent.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">b. Information Collected:</span>{" "}
                  Only as necessary for the child to use our Services.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">c. Information Sharing:</span>{" "}
                  Share with third parties as described in the policy.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">d. Parental Contact:</span>{" "}
                  Review or delete child's information by contacting{" "}
                  <a
                    href="mailto:info@govigilant.app"
                    className="text-brand-primary hover:text-brand-primary-hover transition-colors cursor-pointer"
                  >
                    info@govigilant.app
                  </a>
                  .
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                VIII. How We Protect Your Information
              </h2>
              <div className="ml-4 space-y-3">
                <p className="text-gray-300">
                  <span className="text-white">a. Security:</span> Implement
                  standards to reduce unauthorized access risk.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">
                    b. Email and Password Security:
                  </span>{" "}
                  Ensure the secrecy of your password and email accuracy.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">c. Fraud Prevention:</span> Use
                  anti-bot services.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">d. Onward Transfer:</span>{" "}
                  Vigilant remains responsible for third-party agent processing.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">e. Data Retention:</span> Retain
                  information as long as necessary for business purposes.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                IX. Additional Privacy Terms
              </h2>
              <div className="ml-4 space-y-3">
                <p className="text-gray-300">
                  <span className="text-white">a. California Rights:</span>{" "}
                  Exercise rights under CCPA and CPRA.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">b. Nevada Rights:</span> Opt-out
                  of certain future sales of covered information.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">c. International Transfer:</span>{" "}
                  Consent to information storage in various jurisdictions.
                </p>
                <p className="text-gray-300">
                  <span className="text-white">d. Data Privacy Framework:</span>{" "}
                  Comply with EU-U.S. DPF, UK Extension, and Swiss-U.S. DPF.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                X. Links to Other Websites
              </h2>
              <p className="text-gray-300">
                Our Services may contain links to third-party websites and
                services, not covered by this policy. Review their privacy
                policies before use.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                XI. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-300">
                We may update this policy periodically. Changes are effective
                when posted. Objecting to changes means ceasing to use our
                Services and requesting information erasure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">XII. Contact Us</h2>
              <p className="text-gray-300">
                For questions or concerns, contact us at{" "}
                <a
                  href="mailto:info@govigilant.app"
                  className="text-brand-primary hover:text-brand-primary-hover transition-colors"
                >
                  info@govigilant.app
                </a>
                .
              </p>
            </div>

            {/* FAQ Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h2 className="text-2xl text-white mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border border-white/10 rounded-lg px-6 bg-white/5"
                >
                  <AccordionTrigger className="text-white hover:text-brand-primary transition-colors">
                    How does Vigilant use my data?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Vigilant only uses your data to optimize your safety experience
                    on the app and we have never sold data. Our systems are built
                    with security and privacy at their core. We minimize the
                    collection of personal data and retain it only for as long as
                    necessary. Access to user data is restricted to a small,
                    authorized group within our engineering team, with every access
                    logged, audited, and subject to ongoing privacy reviews.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border border-white/10 rounded-lg px-6 bg-white/5"
                >
                  <AccordionTrigger className="text-white hover:text-brand-primary transition-colors">
                    Why does Vigilant need my location?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Vigilant is focused on user safety. We cannot do that if we do
                    not know where you are. We use your location only to send you
                    relevant and life saving safety alerts about public safety
                    incidents going on around you.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border border-white/10 rounded-lg px-6 bg-white/5"
                >
                  <AccordionTrigger className="text-white hover:text-brand-primary transition-colors">
                    Can other Vigilant users see my location?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Only users who you explicitly share your location with are able
                    to see your location. Administrators are also given full control
                    over these permissions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
