import AnimatedCounter from "@/components/AnimatedCounter";
import BrandCarousel from "@/components/BrandCarousel";
import Features from "@/components/Features";
import MotionWrapper from "@/components/MotionWrapper";
import MARKETING_AND_CRO_AGENCIES_LOGO_URLS from "@/constants/marketingAndCROAgencies";
import TOP_BRANDS_LOGOS_URLS from "@/constants/topBrands";
import { Diamond, MoveRight, MoveUp, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="container py-20 min-h-screen grid items-center justify-center">
        <div className="grid grid-cols-2 gap-5 ">
          <MotionWrapper className="flex flex-col gap-5 my-auto">
            <h1 className="text-[58px] leading-14 font-bold mb-4">
              <span className="text-primary-900">All-in-one&nbsp;</span>
              AOV enhancement app for your Shopify store
            </h1>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="text-amber-500 size-5"
                    strokeWidth={1.5}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Rated 4.9/5 (500+ reviews on the Shopify App Store)
              </p>
            </div>
            <div className="flex items-center gap-4">
              <MotionWrapper
                as="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                whileFocus={{ scale: 1.05 }}
                className="btn-primary"
              >
                Book Demo&nbsp;
                <MoveRight className="size-4" />
              </MotionWrapper>
              <MotionWrapper
                as="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                whileFocus={{ scale: 1.05 }}
                className="btn-secondary"
              >
                Start free trial
              </MotionWrapper>
            </div>
          </MotionWrapper>
          <MotionWrapper className="bg-radial-gradient-primary rounded-xl p-8 flex flex-col gap-6">
            <div className="bg-white rounded-lg p-4 shadow-lg flex pt-5 flex-col gap-5 relative">
              <div className="absolute top-4 left-4 text-gray-500">
                <h3 className="text-gray-500 text-lg font-semibold">
                  Total Sales
                </h3>
                <AnimatedCounter
                  from={0}
                  to={71399}
                  className="col-span-2 text-center text-4xl font-bold text-primary-900"
                />
              </div>

              <span className="absolute top-8 right-4 text-emerald-500 text-3xl font-semibold flex items-center gap-1">
                <MoveUp strokeWidth={3} />
                15%
              </span>

              <svg viewBox="0 0 100 50">
                <path
                  className="stroke-gray-400 animate-draw"
                  fill="none"
                  stroke="white"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                  d="M2,48 L30,47 L70,42 L95,38"
                  strokeLinecap="round"
                  style={{
                    animation: "drawLine 2s ease forwards",
                  }}
                />
                <path
                  className="stroke-primary-900 animate-draw-delayed"
                  fill="none"
                  stroke="white"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                  d="M2,46 L30,44 L70,30 L95,10"
                  strokeLinecap="round"
                  style={{
                    animation: "drawLine 2s ease forwards 0.5s",
                  }}
                />
              </svg>
              <div className="flex items-center gap-4 px-1">
                <div className="flex items-center gap-2">
                  <span className="size-4 bg-primary-900" />
                  <span className="text-base text-gray-700">with Monk</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-4 bg-gray-400" />
                  <span className="text-base text-gray-700">without Monk</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg flex flex-col gap-5 relative">
              <div className="text-gray-500">
                <h3 className="text-gray-500 text-lg font-semibold">
                  Average Order Value
                </h3>
                <div className="flex justify-between items-end">
                  <AnimatedCounter
                    from={0}
                    to={152}
                    className="text-4xl font-bold text-primary-900"
                  />
                  <span className=" text-emerald-500 text-3xl font-semibold flex items-center gap-1">
                    <MoveUp strokeWidth={3} />
                    13%
                  </span>
                </div>
              </div>
            </div>
          </MotionWrapper>
          <MotionWrapper
            as="section"
            className="col-span-2 flex flex-col gap-10 justify-center items-center py-6 mt-10 overflow-hidden"
          >
            <p className="text-xl text-gray-700 font-semibold">
              Widgets & offers displayed across 100,000+ website sessions daily
              and used by some of the top brands on Shopify
            </p>
            <BrandCarousel images={TOP_BRANDS_LOGOS_URLS} />
          </MotionWrapper>
        </div>
      </section>

      <Features />
      <MotionWrapper
        as="section"
        className="col-span-2 flex flex-col gap-10 justify-center items-center py-6 mt-10 overflow-hidden container mx-auto"
      >
        <p className="text-xl text-gray-700 font-semibold">
          Trusted by top Marketing & CRO agencies globally
        </p>
        <BrandCarousel images={MARKETING_AND_CRO_AGENCIES_LOGO_URLS} />
      </MotionWrapper>

      <MotionWrapper
        as="section"
        className="py-10 mt-10 container mx-auto text-center"
      >
        <div className="text-6xl font-bold mb-4 flex items-center justify-center gap-3 text-gray-900">
          <span>Monk is</span>
          <span className="bg-blue-100 rounded-full text-5xl leading-16 p-5 font-normal flex items-center gap-2 justify-center">
            <Diamond className="size-12  text-blue-500" fill="currentColor" />
            Built for Shopify
          </span>
        </div>
        <p className="text-xl font-medium text-gray-700 mt-6 mb-12">
          The app meets Shopify's highest quality standards for speed, ease of
          use, and merchant value - Less than 2% of all apps have been awarded
          this badge by Shopify
        </p>
      </MotionWrapper>
    </>
  );
}
