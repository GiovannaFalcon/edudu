import Image from "next/image";

import LightIcon from "@/assets/light.svg";
import HeroImage from "@/assets/heroimg.svg";
import { Button } from "@/Components/Button";

export function Hero() {
  return (
    <section className="relative mt-20">
      <div className="absolute top-20 left-1 md:left-26 w-[500px] h-[500px] rounded-full bg-[#FAB900]/20 blur-3xl pointer-events-none z-0"></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between py-16 px-6 md:px-18 lg:px-24">
        <div className="flex-1">
          <Image
            src={LightIcon}
            alt="Light Icon"
            className="ml-[-10px]"
            width={54}
          />
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
            Knowledge Connection <br />
            <span className="relative font-bold">Open the Door to the Future</span>
          </h1>
          <p className="mt-5 max-w-[600px] lg:text-[16px]">
            Giving every student the opportunity to access the best education
            and open the door to the world of knowledge. <br /> Start your
            learning journey today with Edudu to become an outstanding student
            in our learning community.
          </p>
          <Button>Get started!</Button>
        </div>
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="w-100 md:w-[440px] lg:w-[500px] xl:w-[600px] h-auto hover:-translate-y-[2px] transition-transform duration-200"
            priority
          />
        </div>
      </div>
    </section>
  );
}
