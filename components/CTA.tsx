import { SevenStepProcessData } from "@/data/staticData";
import CtaItem from "./CtaItem";

export const CTA = () => {
  return (
    <section className="text-gray-600 overflow-x-hidden">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-center font-bold text-3xl w-full mx-auto">
            We follow Six Steps for your guaranteed Success!
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Our international team with combined experience of 20+ years will
            help you at every step of the process to ensure that you achieve
            great success in your study abroad journey
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center sm:mx-auto sm:mb-2 -mx-2">
          {/* {SevenStepProcessData.map((step) => (
            <div key={step.id} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <div className="">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    className="text-primary w-6 h-6 flex-shrink-0 mr-4 -ml-2 -mb-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    
                  </svg>
                  <span className="absolute -mt-6 -mr-8 text-lg text-primary font-bold ">{step.id}</span>
                </div>

                <span className="title-font font-medium">
                  {step.description}
                </span>
              </div>
            </div>
          ))} */}

          <div className="flex flex-col lg:flex-row">

            {/* Item */}
            <CtaItem />

            <div className="-ml-8">
              <svg className="h-52 w-52" viewBox="0 0 302 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={151} cy="152.022" r={110} fill="#D9D9D9" />
                <path d="M288 147.022C281.944 73.8783 231.709 15.3599 151 14.0219C70.2912 12.6839 20.523 72.7619 14 147.022" stroke="black" strokeWidth={27} strokeDasharray={45} />
              </svg>



            </div>

            <div className="-ml-8">
              <svg width={221} height={191} viewBox="0 0 221 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="110.5" cy="112.5" rx="77.5" ry="78.5" fill="#D9D9D9" />
                <path d="M207 109C202.734 56.7632 167.35 14.9712 110.5 14.0157C53.6504 13.0601 18.5947 55.9659 14 109" stroke="black" strokeWidth={27} strokeDasharray="24 24" />
              </svg>
            </div>

            <div className="-ml-8">
              <svg width={221} height={191} viewBox="0 0 221 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="110.5" cy="78.5" rx="77.5" ry="78.5" transform="rotate(-180 110.5 78.5)" fill="#D9D9D9" />
                <path d="M14 82C18.2656 134.237 53.6503 176.029 110.5 176.984C167.35 177.94 202.405 135.034 207 82" stroke="black" strokeWidth={27} strokeDasharray="24 24" />
              </svg>

            </div>

            <div className="-ml-8">
              <svg width={221} height={191} viewBox="0 0 221 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="110.5" cy="112.5" rx="77.5" ry="78.5" fill="#D9D9D9" />
                <path d="M207 109C202.734 56.7632 167.35 14.9712 110.5 14.0157C53.6504 13.0601 18.5947 55.9659 14 109" stroke="black" strokeWidth={27} strokeDasharray="24 24" />
              </svg>
            </div>

            <div className="-ml-8">
              <svg width={221} height={191} viewBox="0 0 221 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="110.5" cy="78.5" rx="77.5" ry="78.5" transform="rotate(-180 110.5 78.5)" fill="#D9D9D9" />
                <path d="M14 82C18.2656 134.237 53.6503 176.029 110.5 176.984C167.35 177.94 202.405 135.034 207 82" stroke="black" strokeWidth={27} strokeDasharray="24 24" />
              </svg>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
