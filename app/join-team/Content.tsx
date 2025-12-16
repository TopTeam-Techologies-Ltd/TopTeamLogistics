import Wrapper from "@/components/layout/Wrapper";
import { Button } from "@/components/ui/button";

const Content = () => {
  return (
    <div className="bg-[#FAFAFA] pb-24 dark:bg-[#020618]">
      <Wrapper>
        <section className="relative z-30 -mt-20 rounded-3xl bg-white dark:bg-[#020618] shadow-xl">
          <div className="text-[#838696] px-6 sm:px-10 md:px-12 py-12 md:py-16 max-w-4xl mx-auto space-y-10">
            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Join TopTeam Logistics – Start Your Career in Modern Logistics
              </h2>

              <p className="font-light">
                Are you ready to be part of a trusted, diverse, and supportive
                delivery team? Do you enjoy being on the road and want to build
                a career in modern logistics?
              </p>

              <p className="font-light">
                <span className="font-semibold">TopTeam Logistics</span> is
                hiring Delivery Associates to support last-mile deliveries for
                leading e-commerce and logistics partners, with immediate starts
                available in Peterborough and surrounding areas.
              </p>

              <p className="font-light">
                We specialise in reliable, professional last-mile delivery
                services, helping our partners connect customers with their
                parcels efficiently and safely.
              </p>
            </div>
            {/* What We Offer */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">✅ What We Offer</h3>

              <ul className="space-y-3 font-light">
                <li className="flex items-start gap-3">
                  <span>🚐</span>
                  <span>Free company van, insurance, and fuel provided</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>💷</span>
                  <span>£130.50 + VAT per route</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>💰</span>
                  <span>Performance bonuses and competitive overtime pay</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>📅</span>
                  <span>Weekly payments every Friday morning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>📈</span>
                  <span>Immediate start – earn right away</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>🧠</span>
                  <span>
                    Comprehensive paid training – no experience required
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span>🕐</span>
                  <span>Flexible working patterns to fit your lifestyle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>🤝</span>
                  <span>Friendly local support team ready to assist you</span>
                </li>
              </ul>
            </div>
            {/* Requirements */}
            <div id="apply-now" className="space-y-4">
              <h3 className="text-xl font-semibold">📝 Requirements</h3>

              <ul className="space-y-3 font-light  list-disc list-inside">
                <li>
                  Valid UK or EU driving licence (held for at least 12 months)
                </li>
                <li>Maximum 6 points on licence</li>
                <li>Ability to pass a Basic Criminal Disclosure check</li>
                <li>Basic English communication skills</li>
                <li>Eligibility to work in the UK</li>
                <li>This is a self-employed role</li>
              </ul>
            </div>
            {/* Location */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">📍 Location</h3>
              <p className="font-light">
                Based in Peterborough, delivering Amazon parcels across the city
                and surrounding areas.
              </p>
            </div>
            {/* CTA */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                Ready to get on the road?
              </h3>
              <p className="font-light">
                Take the next step in your career today – apply now and start
                delivering with confidence.
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Button variant={"myblue"} size={"custom"}>
                Apply Now
              </Button>
            </div>{" "}
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

export default Content;
