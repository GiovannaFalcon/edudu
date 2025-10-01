import Image from "next/image";

import { ClassCard } from "@/Components/ClassCard";
import { Button } from "@/Components/Button";

import ImgClass from "@/assets/imgclass.svg";
import AudioIcon from "@/assets/audioicon.svg";
import LiveIcon from "@/assets/liveicon.svg"
import RecordedIcon from "@/assets/recordedicon.svg"

export function Class() {
  return (
    <section className="bg-[#F8F8F8] pb-10">
      <div className="pt-36 pb-26">
        <div className="text-center">
          <h1 className="text-center font-extrabold text-2xl md:text-3xl lg:text-4xl">
            Whats in the class at Edudu?
          </h1>
          <p className="mx-auto text-center text-[#1F1C14]/70 mt-3 max-w-[540px] md:max-w-[640px] lg:max-w-[640px] text-[16px]">
            Online classes with teachers, continuous questions and answers
            during class if you do not understand. At the end of the session,
            the lesson is recorded for your child to review
          </p>
          <Button>Free trial lesson</Button>
        </div>
        <div className="relative flex justify-center items-center mt-14 mx-10">
          <div className="border border-white bg-white rounded-2xl p-6 md:p-8 lg:p-8">
            <Image
              src={ImgClass}
              alt="Image from Class Edudu"
              className="rounded-xl "
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-6 my-2 mx-auto">
          <ClassCard
            icon={AudioIcon}
            alt="Audio Icon"
            bgColor="bg-[#FFF4F2]"
            title="Audio Classes"
          />
          <ClassCard
            icon={LiveIcon}
            alt="Live Icon"
            bgColor="bg-[#F8F2FF]"
            title="Live Classes"
          />
          <ClassCard
            icon={RecordedIcon}
            alt="Play Icon"
            bgColor="bg-[#E5FFF3]"
            title="Recorded Class"
          />
        </div>
      </div>
    </section>
  );
}
