import React from "react";
import Wrapper from "../Wrapper";
import AnimatedSeprator from "../AnimatedSeprator";
import { Button } from "@/components/ui/button";
import AnimatedSepratorTwo from "../AnimatedSepratorTwo";

const JoinUsSection = () => {
  return (
    <>
      <section className="bg-[#F4F7FA]  dark:dark:bg-[#020618]">
        <AnimatedSepratorTwo className="hidden my-0 dark:flex dark:my-9" />
        <Wrapper>
          <section className="flex flex-col gap-3 justify-center py-20">
            <h1 className="text-4xl my-title text-center tracking-wider font-bold leading-tight">
              Join Our Delivery Excellence Team
            </h1>
            <p className="text-sm font-light my-title sm:text-base leading-relaxed text-center">
              Be part of a team committed to efficiency, innovation, and
              outstanding service
            </p>
            <div className="flex items-center justify-center">
              <Button variant={"myblue"} size={"custom"}>
                Send Application
              </Button>
            </div>
          </section>
        </Wrapper>
        <div className="w-[60%] mx-auto">
          <AnimatedSeprator className="hidden dark:flex my-9" />
        </div>
      </section>
    </>
  );
};

export default JoinUsSection;
