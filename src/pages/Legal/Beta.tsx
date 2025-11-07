import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Checkbox } from "../../components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

export function Beta() {
  const [accountType, setAccountType] = useState("individual");

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl mb-8"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "var(--color-brand-primary)",
            }}
          >
            Become A Beta Tester.
          </h1>

          <p
            className="text-xl sm:text-2xl text-brand-primary mb-12"
            style={{ fontWeight: 400 }}
          >
            Help shape the future of Vigilant!
          </p>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
            <div className="bg-white/[0.05] backdrop-blur-[60px] border border-white/20 rounded-2xl p-8 shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] hover:bg-white/[0.08] hover:border-brand-primary/40 transition-all">
              <h2 className="text-xl mb-4" style={{ fontWeight: 500 }}>
                What's in it for you?
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">•</span>
                  <span>Free Vigilant subscription.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">•</span>
                  <span>Early access to new features.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.05] backdrop-blur-[60px] border border-white/20 rounded-2xl p-8 shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] hover:bg-white/[0.08] hover:border-brand-primary/40 transition-all">
              <h2 className="text-xl mb-4" style={{ fontWeight: 500 }}>
                What's your role?
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">•</span>
                  <span>
                    Use the Vigilant app and take notes of what's good and bad.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">•</span>
                  <span>
                    Participate in frequent surveys (5-10 minutes each).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">•</span>
                  <span>
                    Tell your friends and family about Vigilant and earn
                    referral credit!
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-[#2d3748]/80 to-[#1a202c]/80 backdrop-blur-[60px] rounded-3xl p-8 md:p-12 border border-white/20 shadow-[0_20px_60px_0_rgba(0,0,0,0.6)]">
          <form className="space-y-6">
            {/* First Name */}
            <div>
              <Label htmlFor="firstName" className="text-white mb-2 block">
                First name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                type="text"
                required
                className="bg-gray-100 border-0 text-gray-900 h-12"
              />
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="lastName" className="text-white mb-2 block">
                Last name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                type="text"
                required
                className="bg-gray-100 border-0 text-gray-900 h-12"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-white mb-2 block">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                className="bg-gray-100 border-0 text-gray-900 h-12"
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="text-white mb-2 block">
                Phone
              </Label>
              <div className="flex gap-2">
                <select className="bg-gray-100 border-0 text-gray-900 h-12 rounded-md px-3 w-20">
                  <option value="+1">🇺🇸</option>
                  <option value="+44">🇬🇧</option>
                  <option value="+91">🇮🇳</option>
                </select>
                <Input
                  id="phone"
                  type="tel"
                  className="bg-gray-100 border-0 text-gray-900 h-12 flex-1"
                />
              </div>
            </div>

            {/* Referred By */}
            <div>
              <Label htmlFor="referredBy" className="text-white mb-2 block">
                Referred By
              </Label>
              <Input
                id="referredBy"
                type="text"
                className="bg-gray-100 border-0 text-gray-900 h-12"
              />
            </div>

            {/* Account Type */}
            <div>
              <Label className="text-white mb-3 block">
                Account Type <span className="text-red-500">*</span>
              </Label>
              <RadioGroup value={accountType} onValueChange={setAccountType}>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem
                    value="individual"
                    id="individual"
                    className="border-brand-primary text-brand-primary"
                  />
                  <Label
                    htmlFor="individual"
                    className="text-brand-primary cursor-pointer"
                  >
                    Individual
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="family"
                    id="family"
                    className="border-brand-primary text-brand-primary"
                  />
                  <Label
                    htmlFor="family"
                    className="text-brand-primary cursor-pointer"
                  >
                    Family/ Team
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Conditional Family/Team Field */}
            {accountType === "family" && (
              <div>
                <Label htmlFor="teamMembers" className="text-white mb-2 block">
                  Who is included in Your Family/ Team? (If Applicable)
                </Label>
                <Input
                  id="teamMembers"
                  type="text"
                  className="bg-gray-100 border-0 text-gray-900 h-12"
                />
              </div>
            )}

            {/* How did you hear */}
            <div>
              <Label htmlFor="howHeard" className="text-white mb-2 block">
                How did you hear about Vigilant's beta program?
              </Label>
              <Textarea
                id="howHeard"
                rows={4}
                className="bg-gray-100 border-0 text-gray-900 resize-none"
              />
            </div>

            {/* Agreement Checkbox */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreement"
                className="mt-1 border-brand-primary data-[state=checked]:bg-brand-primary"
              />
              <Label
                htmlFor="agreement"
                className="text-brand-primary cursor-pointer leading-tight"
              >
                I agree to participate in the beta program and receive
                electronic communications from Vigilant Inc.
              </Label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full h-14 bg-brand-primary hover:bg-brand-primary-hover text-black border-0 rounded-xl"
                style={{ fontWeight: 500 }}
              >
                Apply to Join Vigilant Beta
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
