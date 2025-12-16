"use client";
import AnimatedSeprator from "@/components/layout/AnimatedSeprator";
import Image from "next/image";

const Contact = () => {
  const features = [
    {
      icon: "/icons/envelope.svg",
      title: "Email",
      description: "hello@deupload.com",
    },
    {
      icon: "/icons/phone-flip.svg",
      title: "Phone",
      description: "+1 415 800-3128",
    },
  ];

  return (
    <>
      {/* TOP / HERO SECTION */}
      <AnimatedSeprator className="hidden dark:block my-0" />
      <div className="relative bg-my-blue text-white dark:bg-[#020618]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 md:py-14 lg:py-36 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left content */}
          <section className="flex flex-col justify-center items-center lg:items-start gap-4">
            <h1 className="text-3xl text-center md:text-start md:text-5xl font-bold leading-tight">
              Got Questions? Let&apos;s Talk!
            </h1>
            <p className="text-sm font-light text-white/90 md:w-[70%] text-center lg:text-start">
              Our team would love to hear from you!
            </p>
            <section className="w-full bg-white text-[#003C71] rounded-xl p-4 md:p-8 shadow-xl dark:bg-[#161c2d]/80 dark:text-white lg:hidden">
              <form className="space-y-6">
                {/* Your Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium form-color">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
            w-full
            rounded-md
            bg-[#F4F5F6]
            px-4
            py-3
            text-sm
            outline-none
            focus:ring-2
            focus:ring-[#00A8E1]
            dark:bg-white/10
          "
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium form-color">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
            w-full
            rounded-md
            bg-[#F4F5F6]
            px-4
            py-3
            text-sm
            outline-none
            focus:ring-2
            focus:ring-[#00A8E1]
            dark:bg-white/10
          "
                  />
                </div>

                {/* Phone Number (Optional) */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium form-color">
                    Phone Number{" "}
                    <span className="text-xs opacity-70">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="
            w-full
            rounded-md
            bg-[#F4F5F6]
            px-4
            py-3
            text-sm
            outline-none
            focus:ring-2
            focus:ring-[#00A8E1]
            dark:bg-white/10
          "
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium form-color">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Type your message here..."
                    className="
            w-full
            rounded-md
            bg-[#F4F5F6]
            px-4
            py-3
            text-sm
            outline-none
            resize-none
            focus:ring-2
            focus:ring-[#00A8E1]
            dark:bg-white/10
          "
                  />
                </div>

                {/* Actions */}
                <div className="flex pt-4 justify-center lg:justify-end">
                  {/* Replace this button with your own Button component */}
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-md bg-[#00A8E1] text-white text-sm font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </section>
          </section>
          {/* Empty column to preserve grid balance */}
          <div />
        </div>
        {/* OVERLAPPING CARD */}

        <div className="hidden lg:block absolute right-0 bottom-0 translate-y-1/2 z-20 w-full max-w-xl px-4 sm:px-6 lg:right-[calc((100%-63rem)/2)] xl:right-[calc((100%-80rem)/2)] 2xl:right-[calc((100%-80rem)/2)]">
          <section className="bg-white text-[#003C71] rounded-xl p-8 shadow-xl dark:bg-[#161c2d]/80 dark:text-white">
            <form className="space-y-6">
              {/* Your Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium form-color">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
            w-full
            rounded-md
            bg-[#F4F5F6]
            px-4
            py-3
            text-sm
            outline-none
            focus:ring-2
            focus:ring-[#00A8E1]
            dark:bg-white/10
          "
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium form-color">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
            w-full
            rounded-md
            bg-[#F4F5F6]
            px-4
            py-3
            text-sm
            outline-none
            focus:ring-2
            focus:ring-[#00A8E1]
            dark:bg-white/10
          "
                />
              </div>

              {/* Phone Number (Optional) */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium form-color">
                  Phone Number{" "}
                  <span className="text-xs opacity-70">(Optional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="
            w-full
            rounded-md
            bg-[#F4F5F6]
            px-4
            py-3
            text-sm
            outline-none
            focus:ring-2
            focus:ring-[#00A8E1]
            dark:bg-white/10
          "
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium form-color">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Type your message here..."
                  className="
            w-full
            rounded-md
            bg-[#F4F5F6]
            px-4
            py-3
            text-sm
            outline-none
            resize-none
            focus:ring-2
            focus:ring-[#00A8E1]
            dark:bg-white/10
          "
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end pt-4">
                {/* Replace this button with your own Button component */}
                <button
                  type="submit"
                  className="px-6 py-3 rounded-md bg-[#00A8E1] text-white text-sm font-medium"
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>

      {/* LOWER SECTION */}
      <AnimatedSeprator className="dark:lg:hidden my-0" />

      <div
        id="contact-us"
        className="bg-[#FAFAFA] pt-14 pb-52 dark:bg-[#020618] relative z-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col gap-9 justify-start md:space-y-9 md:flex-row md:justify-center lg:flex-col lg:gap-0 ">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#00A8E1] rounded-full flex items-center justify-center shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm font-light">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
