'use client'

import { Button } from "@/components/button";
import { H1 } from "@/components/heading";
import emailjs from '@emailjs/browser';
import { howitworks } from "@/data/staticData";

import React, { useRef } from "react";

function ContactUs() {

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    // @ts-ignore
    emailjs.sendForm('service_ugsrfco', 'template_cd5hu05', form.current, {
        publicKey: 'i1TwefFnhVXtYhF-U',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-opacity-20 rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-col gap-4 ">
          <div className="h-[50%] flex flex-col md:flex-row">
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16666.675928405763!2d77.30434899884847!3d28.57765890220617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45a2fec4393%3A0xaa5938d112af449e!2sNoida%20Sector%203%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1719311552071!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div className="bg-slate-50 w-full md:w-1/2 relative flex flex-wrap py-6 rounded shadow-md">
              <div className=" px-6">
                <h2 className="title-font font-bold text-gray-600 tracking-widest text-lg">
                  OUR ADDRESS IN INDIA
                </h2>
                <p className="mt-1">
                  G13, Block D, Noida Sector 3, 201301, India
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  CONTACT US AT
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  info@HelpStudyAbroad.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  OR GIVE US A CALL
                </h2>
                <p className="leading-relaxed">+91 9625061184 </p>
              </div>
            </div>
            <iframe
              width="100%"
              height="100%"
              className="w-full md:w-1/2"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16666.675928405763!2d77.30434899884847!3d28.57765890220617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45a2fec4393%3A0xaa5938d112af449e!2sNoida%20Sector%203%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1719311552071!5m2!1sen!2sin"
            // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
          </div>
          <div className="h-[50%] flex flex-col md:flex-row">
            <iframe
              width="100%"
              height="100%"
              className="w-full md:w-1/2"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4965.712777572964!2d-0.19275405402844795!3d51.51585066370139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761aaa9e1f89b9%3A0xa37d399bdb6d260b!2s11%20Porchester%20Rd%2C%20London%20W6%208NS%2C%20UK!5e0!3m2!1sen!2sin!4v1719484439198!5m2!1sen!2sin"
            // style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16666.675928405763!2d77.30434899884847!3d28.57765890220617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45a2fec4393%3A0xaa5938d112af449e!2sNoida%20Sector%203%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1719311552071!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div className="bg-slate-50 w-full md:w-1/2 relative flex flex-wrap py-6 rounded shadow-md">
              <div className=" px-6">
                <h2 className="title-font font-bold text-gray-600 tracking-widest text-lg">
                  OUR ADDRESS IN UK
                </h2>
                <p className="mt-1">
                  11 Porchester Road, W2 5DP, London, United Kingdom
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  CONTACT US AT
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  info@HelpStudyAbroad.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  OR GIVE US A CALL
                </h2>
                <p className="leading-relaxed">+44 7501908688</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <H1>Contact Us</H1>
          <p className="leading-relaxed mb-5 text-gray-600">
            Write us a mail and let&apos;s take this discussion further!
          </p>
          {/* @ts-ignore */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm font-semibold text-gray-600">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="user_name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm font-semibold text-gray-600">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="user_email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-sm font-semibold text-gray-600">
                Phone Number
              </label>
              <input
                required
                type="text"
                id="phone"
                name="user_phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm font-semibold text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button type="submit" value={"Send"} className="text-white w-full bg-primary/90 border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">
              Send!
            </button>

            {/* <Button variant="primary">Send!</Button> */}
          </form>
          <p className="text-xs text-gray-500 mt-3">
            send us a mail for any buisness or consulting inquiries by hitting
            the send button
          </p>
        </div>
      </div>
      {/* <div className="">
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

            
              <div
             
                className={`flex relative py-4 items-center ${"justify-start"} md:w-1/2 `}
                style={{
                  flexDirection: index % 2 == 0 ? "row" : "row-reverse",
                  marginLeft: index % 2 == 0 ? "auto" : 0,
                  marginRight: index % 2 !== 0 ? "auto" : 0,
                }}
              >
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  {index !== 4 && (
                    <div className="h-full w-1 bg-gray-200 pointer-events-none justify-start" />
                  )}
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-white relative z-10">
                  
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  
                </div>
                <h3
                  className="title-font text-base text-gray-700 px-4"
                  style={{
                    padding: index % 2 == 0 ? "" : "row-reverse",
                  }}
                >
                  <span className="font-semibold text-primary">
                    {`${reason.description.split(" ")[0]} ${
                      reason.description.split(" ")[1]
                    }`}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, omnis! Totam harum ullam quia nulla accusamus nostrum
                  dolor officiis repudiandae non. Neque dolores iure, placeat
                  natus accusamus amet labore illum.
                  </span>
                  &nbsp;
                  {reason.description.split(" ").slice(2).join(" ")}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, omnis! Totam harum ullam quia nulla accusamus nostrum
                  dolor officiis repudiandae non. Neque dolores iure, placeat
                  natus accusamus amet labore illum.
                </h3>
              </div>
            
          </div>
        </div>
      </div> */}
      <section id="reasons" className="text-gray-600 bg-slate-50 py-10">
        <div className="container mx-auto flex flex-wrap">
          <h2 className="text-center font-bold text-3xl w-full mx-auto">
            What Happens After You Contact Us For free Consultation
          </h2>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-center">
            Our team with combined experience of 20+ years will help you at
            every step of the process to ensure that you achieve great success
            in your study abroad journey
          </p> */}

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
          <Button redirectPath="/contact-us" className="flex mx-auto mt-10 ">
            Connect With Us Now!
          </Button>
        </div>
      </section>
    </section>
  );
}

export default ContactUs;
