import Image from "next/image";
import Link from "next/link";
import HeroLogos from "../hero-logos";
import { Subheading } from "./subheading";

export default function HeroSection() {
  return (
    <section className="pt-16 relative overflow-hidden dark:bg-[#171F2E]">
      <div className="max-w-[120rem] mx-auto relative">
        <div className="wrapper">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center pb-14">
              <Subheading text="Trusted Software Development Partner" />

              <h1 className="text-gray-800 mx-auto font-bold mb-5 text-4xl sm:text-[52px] dark:text-white/90 sm:leading-[64px] max-w-[800px]">
                Engineering Digital Experiences That Accelerate Business Growth
              </h1>

              <p className="max-w-[650px] text-center mx-auto dark:text-gray-400 text-gray-500 text-base leading-7">
                Anchor Techno Soft builds scalable web applications, mobile apps,
                AI-powered solutions, and cloud platforms for startups, SMEs, and
                enterprises worldwide.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-primary-500 hover:bg-primary-600 transition px-7 py-3 rounded-full text-white text-sm font-medium"
                >
                  Start Your Project
                </Link>

                <Link
                  href="/services"
                  className="border border-gray-300 dark:border-white/10 px-7 py-3 rounded-full text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>

              {/* TRUST STATS */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-[500px] mx-auto text-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    20+
                  </h3>
                  <p className="text-sm text-gray-500">Projects Delivered</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    98%
                  </h3>
                  <p className="text-sm text-gray-500">Client Satisfaction</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    24/7
                  </h3>
                  <p className="text-sm text-gray-500">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          
        </div>

        {/* TECH STACK */}
        

        <HeroLogos />
      </div>
 {/* DECORATIVE SHAPES */}
        {/* <div className="max-[1100px]:hidden">
          <Image
            src="/images/hero/shape-left-1.svg"
            className="absolute top-14 left-16 floating-1"
            alt=""
            width={170}
            height={44}
          />
          <Image
            src="/images/hero/shape-left-2.svg"
            className="absolute left-[145px] top-[298px] floating-2"
            alt=""
            width={181}
            height={44}
          />
          <Image
            src="/images/hero/shape-right-1.svg"
            className="absolute right-16 top-[108px] floating-3"
            alt=""
            width={176}
            height={44}
          />
          <Image
            src="/images/hero/shape-right-2.svg"
            className="absolute top-[316px] right-[200px] floating-4"
            alt=""
            width={179}
            height={44}
          />
        </div> */}
      <div className="hero-glow-bg pointer-events-none w-full h-167.5 absolute z-10 bottom-0"></div>
    </section>
  );
}