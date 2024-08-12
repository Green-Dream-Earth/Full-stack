import { Button } from "@/components/button";
import { H1 } from "@/components/heading";

import { howitworks } from "@/data/staticData";
import Image from "next/image";

export default function AskOurExperts() {
  return (
    <main>
      {/* <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 mb-4">
              <H1>Ask Our Experts</H1>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Get personalized advice from our team of industry experts.
                Submit a question and we&Prime;ll connect you with the right
                person to help.
              </p>
            </div>
            <Button variant="secondary" redirectPath="/booking">
              Connect with an Expert
            </Button>
          </div>
        </div>
      </section> */}
      {/* <section className="w-full py-12">
        <div className="container grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 md:px-6">
          {expertsData.map((expert) => (
            <ExperCard key={expert.id} expert={expert} />
          ))}
        </div>
      </section> */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-lg"
              alt="hero"
              src="https://images.unsplash.com/photo-1516546453174-5e1098a4b4af"
              height={300}
              width={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left text-center">
            <div className="space-y-2 mb-4">
              <H1 className="mb-4">Ask Our Experts</H1>
              <p className="max-w-[700px] text-lg text-gray-500">
                Planning to study abroad can be an exciting yet
                overwhelming experience. Our experts are dedicated to
                guiding you through every step of the process, ensuring that
                you make informed decisions and achieve your academic
                goals. Whether you need help with university selection,
                application procedures, SAT/GRE exam preparation or visa
                advice, we are here to assist you.
              </p>
            </div>
            <div className="flex justify-center mt-7">
              <Button variant="secondary" redirectPath="/booking">
                Connect with an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section id="reasons" className="text-gray-600 bg-slate-50 py-10">
        <div className="container mx-auto flex flex-wrap">
          <h2 className="text-center font-bold text-3xl w-full mx-auto">
            How It Works
          </h2>
          <p className="text-base text-slate-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center">
            Steps to help you at every step of the process in your study abroad
            journey
          </p>

          <div className="flex flex-col items-center w-full pt-7">
            <div className="w-full relative">
              <svg
                width={158}
                height={318}
                viewBox="0 0 158 935"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden md:flex absolute top-6 left-1/2 right-1/2 -translate-x-1/2"
              >
                <path
                  d="M151 1C150.307 73.0585 7.04324 152.383 7.00003 220C6.92738 333.675 151 378 151 453.5C150.307 525.559 19.2367 613.383 19.1934 681C19.1208 794.675 151 859.5 151 935"
                  stroke="#B3B3B3"
                  strokeWidth={14}
                />
              </svg>

              {howitworks.map((reason, index) => (
                <div
                  key={reason.id}
                  className={`flex relative py-4 items-center ${"justify-start"} md:w-1/2 `}
                  style={{
                    flexDirection: index % 2 == 0 ? "row" : "row-reverse",
                    marginLeft: index % 2 == 0 ? "auto" : 0,
                    marginRight: index % 2 !== 0 ? "auto" : 0,
                  }}
                >
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    {/* {index !== 4 && (
                    <div className="h-full w-1 bg-gray-200 pointer-events-none justify-start" />
                  )} */}
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-white font-semibold relative z-10">
                    {reason.id}
                  </div>
                  <h3
                    className="title-font text-base text-gray-700 px-4"
                  // style={{
                  //   padding: index % 2 == 0 ? "" : "row-reverse",
                  // }}
                  >
                    <span className="font-semibold text-primary">
                      {`${reason.description.split(" ")[0]} ${reason.description.split(" ")[1]
                        }`}
                    </span>
                    &nbsp;
                    {reason.description.split(" ").slice(2).join(" ")}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <Button redirectPath="/booking" className="flex mx-auto mt-10 ">
            Connect With Us Now!
          </Button>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-center text-slate-600 font-bold text-3xl w-full mx-auto">
            Our Success Stories
          </h2>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center">
            Stories that 
          </p> */}
          <div className="flex flex-wrap -m-4 mt-12">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://plus.unsplash.com/premium_photo-1682089869602-2ec199cc501a"
                />
                <p className="leading-relaxed text-base text-gray-500">
                  HelpStudyAbroad.com made my dream of studying overseas a
                  reality with their exceptional guidance and support. Their
                  knowledgeable team provided invaluable advice and handled all
                  the details, allowing me to focus on my studies.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4" />
                <h2 className="text-gray-600 font-medium title-font tracking-wider text-sm">
                  BHAVESH KULKARNI
                </h2>
                <p className="text-gray-500">PHD in Product Designing, MIT</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://plus.unsplash.com/premium_photo-1686244745070-44e350da9d37"
                />
                <p className="leading-relaxed text-base text-gray-500">
                  Navigating the complexities of studying abroad was a breeze
                  thanks to HelpStudyAbroad.com. Their personalized approach and
                  dedicated support team ensured that I felt confident and
                  prepared every step of the way.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4" />
                <h2 className="text-slate-600 font-medium title-font tracking-wider text-sm">
                  VINITA GIRASE
                </h2>
                <p className="text-gray-500">
                  Masters in User Experience, Oxford
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://images.unsplash.com/photo-1541657333963-d31b55f58de1"
                />
                <p className="leading-relaxed text-base text-gray-500">
                  I highly recommend HelpStudyAbroad.com for anyone considering
                  studying overseas. Their expertise, professionalism, and
                  genuine care for students success set them apart and made my
                  experience truly memorable.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4" />
                <h2 className="text-slate-600 font-medium title-font tracking-wider text-sm">
                  ALEX SMITH
                </h2>
                <p className="text-gray-500">Bachelors in Physcology</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
