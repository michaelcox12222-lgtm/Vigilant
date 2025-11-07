export function LawEnforcement() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <h1 className="text-4xl sm:text-5xl tracking-tight text-white mb-4">
            Law Enforcement Guide
          </h1>

          <p className="text-gray-400 mb-12">
            Information for Law Enforcement Authorities
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <p className="text-gray-300">
                Vigilant Inc. is a U.S.-based safety technology company that
                operates the Vigilant mobile application, available on the Apple
                App Store and Google Play. The Vigilant platform provides
                real-time safety information, verified alerts, and secure
                communication tools to help individuals and organizations
                improve situational awareness and emergency response
                coordination.
              </p>
              <p className="text-gray-300 mt-4">
                This guide is intended to assist law enforcement agencies in
                understanding the types of information that may be available
                from Vigilant and the appropriate legal process required to
                compel disclosure of such information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">Review Process</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  When Vigilant receives a legal request from a law enforcement
                  agency, government entity, defense attorney, or civil
                  litigant, our Legal and Compliance team reviews the request to
                  determine whether it meets applicable legal and procedural
                  requirements, including statutory authority, jurisdiction, and
                  constitutional considerations.
                </p>
                <p className="text-gray-300">
                  Vigilant's review includes ensuring that any request:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li className="text-gray-300">
                    Meets the requirements of the Electronic Communications
                    Privacy Act (ECPA) and other relevant federal and state
                    laws;
                  </li>
                  <li className="text-gray-300">
                    Is narrowly tailored and not overly broad or burdensome; and
                  </li>
                  <li className="text-gray-300">
                    Does not infringe upon the constitutional rights of Vigilant
                    or its users, including rights to privacy, expression, and
                    association.
                  </li>
                </ul>
                <p className="text-gray-300">
                  If the request is legally sufficient and properly scoped,
                  Vigilant will identify whether responsive information exists
                  and remains available under our retention policies. We may
                  request clarification or additional details from the requester
                  to ensure accurate and lawful processing. Requests that are
                  deficient, overbroad, or lacking proper authority may be
                  rejected or returned.
                </p>
                <p className="text-gray-300">
                  Once responsive records are identified and validated, Vigilant
                  produces the information securely to the requesting agency.
                  After production, the matter is documented and closed.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-3">
                Vigilant Inc. accepts service via email and mail:
              </p>
              <div className="ml-4 space-y-2">
                <p className="text-gray-300">
                  <span className="text-white">Email:</span>{" "}
                  <a
                    href="mailto:contact@govigilant.app"
                    className="text-brand-primary hover:text-brand-primary-hover transition-colors cursor-pointer"
                  >
                    contact@govigilant.app
                  </a>
                </p>
                <p className="text-gray-300">
                  <span className="text-white">Mailing Address:</span> Vigilant
                  Inc., Legal Compliance
                  <br />
                  440 Monticello Ave Ste 1800, Norfolk, VA, 23510 - 2670, USA
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">Form of Requests</h2>
              <p className="text-gray-300 mb-3">
                To process a legal request, the following details are required:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li className="text-gray-300">
                  Name of the requesting law enforcement agency and issuing
                  officer;
                </li>
                <li className="text-gray-300">
                  Official law-enforcement domain email address and phone
                  number;
                </li>
                <li className="text-gray-300">
                  Specific data categories requested, with precise date ranges;
                  and
                </li>
                <li className="text-gray-300">
                  Identifying information for the relevant account(s), such as
                  username, registered email address, or phone number.
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                Vigilant cannot process vague or overly broad requests. Requests
                must be specific enough to allow reasonable identification of
                the user or data sought.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                U.S. Legal Process Requirements
              </h2>
              <p className="text-gray-300 mb-3">
                Vigilant discloses user data only in accordance with our Terms
                of Service and applicable U.S. law, including the ECPA (18
                U.S.C. §§ 2701–2712).
              </p>
              <p className="text-gray-300 mb-3">Under federal law:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li className="text-gray-300">
                  A <span className="text-white">valid subpoena</span> is
                  required to compel disclosure of basic subscriber information,
                  which may include username, email address, phone number,
                  account creation date, and recent IP address.
                </li>
                <li className="text-gray-300">
                  A{" "}
                  <span className="text-white">
                    court order under 18 U.S.C. § 2703(d)
                  </span>{" "}
                  is required to compel disclosure of non-content records, such
                  as metadata or log data associated with account activity.
                </li>
                <li className="text-gray-300">
                  A{" "}
                  <span className="text-white">
                    search warrant issued on probable cause
                  </span>{" "}
                  is required to compel disclosure of content data, such as
                  messages, photos, videos, or location information.
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                Vigilant interprets the national security letter provision to
                require disclosure only of a user's name and length of service,
                unless otherwise legally required.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                International Legal Process Requirements
              </h2>
              <p className="text-gray-300">
                International agencies must use appropriate diplomatic channels
                such as the Mutual Legal Assistance Treaty (MLAT) or letters
                rogatory process to request user information. Requests sent
                directly by non-U.S. agencies will not be processed unless
                consistent with these procedures.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                Preservation Requests
              </h2>
              <p className="text-gray-300">
                Vigilant honors valid preservation requests made under 18 U.S.C.
                § 2703(f). Upon receipt of such a request, we will preserve the
                specified account information for 90 days, subject to a single
                90-day renewal if renewed before expiration.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">
                Data Retention and Availability
              </h2>
              <div className="space-y-3">
                <p className="text-gray-300">
                  Vigilant retains user data only as long as necessary to
                  operate our services or comply with legal obligations. We do
                  not retain deleted content unless a valid preservation request
                  was received before the user deleted it.
                </p>
                <p className="text-gray-300">
                  Basic account information remains available while the user's
                  account is active. If a user updates or deletes information,
                  the prior data is overwritten and cannot be retrieved unless
                  previously preserved.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">Emergency Requests</h2>
              <p className="text-gray-300 mb-3">
                In cases of imminent threat to life or serious physical harm,
                law enforcement may submit an emergency disclosure request
                pursuant to 18 U.S.C. §§ 2702(b)(8) and 2702(c)(4).
              </p>
              <p className="text-gray-300 mb-3">Requests must:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li className="text-gray-300">
                  Be submitted by a verified law enforcement official;
                </li>
                <li className="text-gray-300">
                  Be sent from an official agency email; and
                </li>
                <li className="text-gray-300">
                  Describe the nature of the emergency and the specific
                  information sought.
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                <span className="text-white">Emergency Contact:</span>{" "}
                <a
                  href="mailto:contact@govigilant.app"
                  className="text-brand-primary hover:text-brand-primary-hover transition-colors"
                >
                  contact@govigilant.app
                </a>
              </p>
              <p className="text-gray-300 text-sm mt-2">
                (Non-law enforcement users should contact local authorities
                directly in emergencies.)
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">Child Safety Matters</h2>
              <p className="text-gray-300">
                Vigilant reports all apparent instances of child exploitation to
                the National Center for Missing and Exploited Children (NCMEC).
                If your request relates to child safety, please indicate this
                clearly and include any relevant NCMEC report identifiers to
                expedite handling.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">Testimony</h2>
              <p className="text-gray-300">
                Vigilant does not provide expert testimony. All records produced
                are self-authenticating under applicable law and should not
                require a custodian witness. If a certification form is
                required, attach it to your request.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">Cost Reimbursement</h2>
              <p className="text-gray-300">
                Vigilant may seek reimbursement of costs incurred while
                responding to lawful requests, as permitted by statute. Fees may
                be waived for investigations involving imminent harm or child
                safety.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-white mb-4">Legal Advice</h2>
              <p className="text-gray-300">
                Vigilant cannot provide legal advice to requesting agencies. For
                questions about provider disclosure obligations under the ECPA,
                agencies should contact the U.S. Department of Justice –
                Computer Crime and Intellectual Property Section (CCIPS) at
                (202) 514-1026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
